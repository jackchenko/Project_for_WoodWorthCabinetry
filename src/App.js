import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
//import Popup from 'reactjs-popup';
//import { browsehistory } from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    date: '',
    name: 'empty',
    phone: 0,
    email: 'empty',
    addr: 'empty',
    ch: '',
    bh: '',
    rm: 'YES',
    stove: 'Gas',
    stove1: 'Freestading',
    venti: 'Hood Vent',
    flength: '',
    fwidth: '',
    fheight: '',
    microwave: 'YES',
    mlength: '',
    mwidth: '',
    mheight: '',
    microwavestyle: 'Not build in',
    dishwasher: 'empty',
    cabinet: 'Shaker White',
    cabinetheight: '30 inches',
    trim: 'Not preferred',
    trimnotes: '',
    doors: 0,
    drawers: 0,
    glocation: '',
    gtype: '',
    sp: 0,
    pantry: 0,
    pot: 0,
    cts: 0,
    os: 0,
    rot: 0,
    wr: 0,
    wb: 0,
    island: 0,
    deco: false,
    bm: false,
    post: false,
    corbels: false,
    countertop: 'Granite',
    countersample: '',
    sink: 'Big Left Small Right',
    ownsink: 'YES',
    edge: 'not selected',
    supplier: 'Berenson',
    code1: '',
    code2: '',
    extra: '',
    selectedFile: null,
  }
}

  handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })
  handleSelectChange1(event) {
    this.setState({rm: event.target.value});
  }
  handleSelectChange1 = this.handleSelectChange1.bind(this);
  handleSelectChange2(event) {
    this.setState({stove: event.target.value});
  }
  handleSelectChange2 = this.handleSelectChange2.bind(this);
  handleSelectChange3(event) {
    this.setState({stove1: event.target.value});
  }
  handleSelectChange3 = this.handleSelectChange3.bind(this);
  handleSelectChange4(event) {
    this.setState({venti: event.target.value});
  }
  handleSelectChange4 = this.handleSelectChange4.bind(this);
  handleSelectChange5(event) {
    this.setState({microwave: event.target.value});
  }
  handleSelectChange5 = this.handleSelectChange5.bind(this);
  handleSelectChange6(event) {
    this.setState({microwavestyle: event.target.value});
  }
  handleSelectChange6 = this.handleSelectChange6.bind(this);
  handleSelectChange7(event) {
    this.setState({cabinet: event.target.value});
  }
  handleSelectChange7 = this.handleSelectChange7.bind(this);
  handleSelectChange8(event) {
    this.setState({cabinetheight: event.target.value});
  }
  handleSelectChange8 = this.handleSelectChange8.bind(this);

  handleSelectChange9(event) {
    this.setState({trim: event.target.value});
  }
  handleSelectChange9 = this.handleSelectChange9.bind(this);

  handleSelectChange10(event) {
    this.setState({countertop: event.target.value});
  }
  handleSelectChange10 = this.handleSelectChange10.bind(this);

  handleSelectChange11(event) {
    this.setState({sink: event.target.value});
  }
  handleSelectChange11 = this.handleSelectChange11.bind(this);

  handleSelectChange12(event) {
    this.setState({ownsink: event.target.value});
  }
  handleSelectChange12 = this.handleSelectChange12.bind(this);

  handleSelectChange13(event) {
    this.setState({edge: event.target.value});
  }
  handleSelectChange13 = this.handleSelectChange13.bind(this);

  handleSelectChange14(event) {
    this.setState({supplier: event.target.value});
  }
  handleSelectChange14 = this.handleSelectChange14.bind(this);
  //upload handlechange
  onChangeHandler=event=>{
    this.setState({
     selectedFile: event.target.files,
    })
}
  //upload
  async onClickHandler() {
    const data = new FormData()
    data.append('name',this.state.name)
    try{
    for(var x = 0; x<this.state.selectedFile.length; x++) {
      data.append('file', this.state.selectedFile[x])
    }
    axios.post('http://localhost:7000/uploadPic',data,{})
      .then(res => { // then print response status
        console.log(res.statusText)
            })
    }
    catch (e){
      return;
    }

}

  async createAndDownloadPdf() {
    //const name = this.state.name
    await axios.post('http://localhost:8000/GeneratePDFandZIP', this.state)
    //.then(await axios.post('http://localhost:9000/sendEmail', this.state))
  }

  async sendEmail(){
    await axios.post('http://localhost:9000/sendEmail', this.state)
  }

  handleClick = async() => {
    this.onClickHandler();
    await this.createAndDownloadPdf();
    await this.sendEmail()
    .then(alert('Your quote and pictures have been uploaded successfully'))
    .then(window.location.href = "http://woodworthcabinetry.com")
    return false;
  }
  render() {
    return (
      <div className="App">
        <h1>WOOD WORTH CABINETRY</h1>
        <h4>IMPORTANT: This is for dealer use only, not for individual customers.</h4>
        <h3>CLIENT INFORMATION</h3>
       <p></p> 
        Name:<input type="text" placeholder="Name" name="name" onChange={this.handleChange} />
        <p></p> 
        Phone:<input type="tel" placeholder="Phone #" name="phone" onChange={this.handleChange} />
        <p></p> 
        Email Address:<input type="text" placeholder="EmailAddress" name="email" onChange={this.handleChange} />
        <p></p> 
        Project Address:<input type="text" placeholder="ProjectAddress" name="addr" onChange={this.handleChange} />
        <p>Please fill in the blanks and/or choose any of the options that apply. (eg. Gas / Electric)</p>
        <h3>STRUCTURAL ELEMENTS:</h3>
        Ceiling Height (please indicate inch/feet):<input type="text" placeholder="" name="ch" onChange={this.handleChange} />
        <p></p>
        Bulkhead Height (please indicate inch/feet):<input type="text" placeholder="" name="bh" onChange={this.handleChange} />
        <p></p>
        Do you plan on removing the Bulkhead?    
        <select value={this.state.rm} onChange={this.handleSelectChange1}> 
          <option value="YES">YES</option>
          <option value="NO">NO</option>
        </select>
        
        <p></p>
        <h3>APPLIANCES:</h3>
        <div className="Stove">
        Stove: <select value={this.state.stove} onChange={this.handleSelectChange2}> 
          <option value="Gas">Gas</option>
          <option value="Electric">Electric</option>
        </select>
        </div>
        <div className="Stove">Stove Style:<select value={this.state.stove1} onChange={this.handleSelectChange3}> 
          <option value="Freestading">Freestading</option>
          <option value="Slide-in">Slide-in</option>
          <option value="Cooktop & Wall Oven">Cooktop & Wall Oven</option>
        </select></div>
        <div className="Ventilation">
        Ventilation: <select value={this.state.venti} onChange={this.handleSelectChange4}> 
          <option value="Hood Vent">Hood Vent</option>
          <option value="Chimney Hood">Chimney Hood</option>
          <option value="Microwave">Microwave</option>
          <option value="Wood Hood">Wood Hood</option>
        </select>
        </div>
        Fridge Dimension:
        Length (in inch):<input type="text" placeholder="" name="flength" onChange={this.handleChange} />
        Width (in inch):<input type="text" placeholder="" name="fwidth" onChange={this.handleChange} />
        Height (in inch):<input type="text" placeholder="" name="fheight" onChange={this.handleChange} />
        <p></p>
        Microwave:
        <div className="microwave">
        built-in? <select value={this.state.microwave} onChange={this.handleSelectChange5}> 
          <option value="YES">YES</option>
          <option value="NO">NO</option>
        </select>
        </div>
        Length (in inch):<input type="text" placeholder="" name="mlength" onChange={this.handleChange} />
        Width (in inch):<input type="text" placeholder="" name="mwidth" onChange={this.handleChange} />
        Height (in inch):<input type="text" placeholder="" name="mheight" onChange={this.handleChange} />
        <div className="mlocation">
        Where would you want to place? <select value={this.state.microwavestyle} onChange={this.handleSelectChange6}> 
          <option value="Not build in">Not build in</option>
          <option value="Over the Stove">Over the Stove</option>
          <option value="On Counter">On Counter</option>
          <option value="In a Wall Cabinet">In a Wall Cabinet</option>
          <option value="In a Base Cabinet">In a Base Cabinet</option>
        </select>
        </div>
        Dishwasher:<input type="text" placeholder="Beside Sink/other" name="dishwasher" onChange={this.handleChange} />
        <p></p>
        <h3>CABINET INFORMATION</h3>
        <div className="cabinet">
        Style: <select value={this.state.cabinet} onChange={this.handleSelectChange7}> 
          <option value="Shaker White">Shaker White</option>
          <option value="Shaker Grey">Shaker Grey</option>
          <option value="Concord Chestnut">Concord Chestnut</option>
          <option value="Willow Grey">Willow Grey</option>
        </select>
        </div>
        <div className="cabinetheight">
        <h3>UPPER CABINET HEIGHT</h3><select value={this.state.cabinetheight} onChange={this.handleSelectChange8}> 
          <option value="30 inches">30 inches</option>
          <option value="36 inches">36 inches</option>
          <option value="42 inches">42 inches</option>
        </select>
        </div>
        <div className="trim">
        <h3>TRIM DETAILS</h3>Style:<select value={this.state.trim} onChange={this.handleSelectChange9}> 
          <option value="Not preferred">Not preferred</option>
          <option value="Crown to Ceiling">Crown to Ceiling</option>
          <option value="Staggered">Staggered</option>
          <option value="Space Above">Space Above</option>
          <option value="Light Rail">Light Rail</option>
          <option value="Window Valance">Window Valance</option>
          <option value="Other(See notes)">Other - Please specified below</option>
        </select>
        Extra notes on trim:<input type="text" placeholder="" name="trimnotes" onChange={this.handleChange} />  
        </div>
        <h3>STORAGE/DETAILS</h3>
        How many doors you need:<input type="number" placeholder="" name="doors" onChange={this.handleChange} />  
        How many drawers you need:<input type="number" placeholder="" name="drawers" onChange={this.handleChange} />  
        <p></p>
        <h3>GLASS DOORS</h3>
        Location:<input type="text" placeholder="" name="glocation" onChange={this.handleChange} />  
        Type:<input type="text" placeholder="" name="gtype" onChange={this.handleChange} />
        <p></p>
        <h3>ACCESSORIES</h3>
        Please choose any of the features below you would like to include in your kitchen(optional):
        <p></p>
        Spice Pull<input type="number" placeholder="Qty" name="sp" onChange={this.handleChange} /> 
        Pantry<input type="number" placeholder="Qty" name="pantry" onChange={this.handleChange} /> 
        Pot and pan drawers<input type="number" placeholder="Qty" name="pot" onChange={this.handleChange} /> 
        Cooking Tray Storage<input type="number" placeholder="Qty" name="cts" onChange={this.handleChange} /> 
        <p></p>
        Open Shelves<input type="number" placeholder="Qty" name="os" onChange={this.handleChange} /> 
        Roll out Trays<input type="number" placeholder="Qty" name="rot" onChange={this.handleChange} /> 
        Wine Rack<input type="number" placeholder="Qty" name="wr" onChange={this.handleChange} /> 
        Waste Bin<input type="number" placeholder="Qty" name="wb" onChange={this.handleChange} /> 
        <p></p>
        <h3>ISLAND/PENINSULA</h3>
        How many people would you like to seat at your island or peninsula?
        <input type="number" placeholder="" name="island" onChange={this.handleChange} /> 
        <p></p>
        Please choose any of the features below you would like to include:
        Deco Doors<input type="checkbox" name = "deco"  onChange={this.handleChange} /> 
        Baseboard Moulding<input type="checkbox" name = "bm" onChange={this.handleChange} /> 
        Posts<input type="checkbox" name = "post" onChange={this.handleChange} /> 
        Corbels<input type="checkbox" name = "corbels" onChange={this.handleChange} /> 
        
        <h3>COUNTERTOP MATERIAL</h3>
        <div className="countertop">
          Style:
        <select value={this.state.countertop} onChange={this.handleSelectChange10}> 
          <option value="Granite">Granite</option>
          <option value="Quartz">Quartz</option>
        </select>
        If there is a sample you like in the showroom, please write it down:
        <input type="text" placeholder="" name="countersample" onChange={this.handleChange} />
        </div>
        <h3>SINKS</h3>
        <div className="sink">
          Position:
        <select value={this.state.sink} onChange={this.handleSelectChange11}> 
          <option value="Big Left Small Right">Big Left Small Right</option>
          <option value="Equal Double">Equal Double</option>
          <option value="Apron or Farm Sink">Apron or Farm Sink</option>
          <option value="Single Bowl">Single Bowl</option>
          <option value="Special Order">Special Order</option>
        </select>
        </div>
        <div className="ownsink">
        Client will provide own sink<select value={this.state.ownsink} onChange={this.handleSelectChange12}> 
          <option value="YES">YES</option>
          <option value="NO">NO</option>
        </select>
        </div>
        <h3>EDGE PROFILES</h3>
        <div className="edge">
        <select value={this.state.edge} onChange={this.handleSelectChange13}> 
          <option value="not selected">Please select</option>
          <option value="3/4 inches no built up edge">3/4 inches no built up edge</option>
          <option value="Build up edge(appears 1 and 1/2 inches thick): Quarter Round">Build up edge(appears 1 and 1/2 inches thick): Quarter Round</option>
          <option value="Build up edge(appears 1 and 1/2 inches thick): Pencil Round">Build up edge(appears 1 and 1/2 inches thick): Pencil Round</option>
          <option value="Build up edge(appears 1 and 1/2 inches thick): Top Bevel">Build up edge(appears 1 and 1/2 inches thick): Top Bevel</option>
          <option value="Build up edge(appears 1 and 1/2 inches thick): Top and Bottom Bevel">Build up edge(appears 1 and 1/2 inches thick): Top and Bottom Bevel</option>
          <option value="Upgraded Edge Profiles: Ogee">Upgraded Edge Profiles: Ogee</option>
          <option value="Upgraded Edge Profiles: Waterfall">Upgraded Edge Profiles: Waterfall</option>
        </select>
        </div>
        <h3>DOORS AND DRAWER PULLS</h3>
        <div className="supplier">
        Supplier: <select value={this.state.supplier} onChange={this.handleSelectChange14}> 
          <option value="Breson">Breson</option>
          <option value="Marathon">Marathon</option>
        </select>
        Code<input type="text" placeholder="" name="code1" onChange={this.handleChange} />
        Code<input type="text" placeholder="" name="code2" onChange={this.handleChange} />
        </div>
        <h3>EXTRA NOTES</h3>
        <input type="text" placeholder="" name="extra" onChange={this.handleChange} style={{ width: "500px"}}/>
        <p></p>
        <h3>FILE UPLOAD</h3>
        <input type="file" class="form-control" name="file" multiple onChange={this.onChangeHandler}/>
        <p></p>
        <button onClick={this.handleClick}>Submit Quote</button>
      </div>
    );
  }
}
export default App;