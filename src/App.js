import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import ToolContainer from './ToolContainer';
import SavedToolContainer from './SavedToolContainer';


class App extends React.Component {

  constructor(){
    super()
      this.state= {tools: [{
        "id":"1",
        "tool":"Bike Pump",
        "lender_name":"Susu",
        "instructions":"Attach nozzle to bike wheel and clamp closed, lift handle to pump air",
        "image":"https://images-na.ssl-images-amazon.com/images/I/51mZWP90q3L._SY741_.jpg",
        "contact":"susu@gmail.com",
        "saved":false
     },
     {
        "id":"2",
        "tool":"Oil Change Tools",
        "lender_name":"Fifi",
        "instructions":"Change Oil",
        "image":"https://images-na.ssl-images-amazon.com/images/I/71Ch1qq4mZL._SL1500_.jpg",
        "contact":"fifi@gmail.com",
        "saved":false
     },
     {
        "id":"3",
        "tool":"Dewalt Cordless Drill",
        "lender_name":"Naga",
        "instructions":"Add different tips and drill away",
        "image":"https://images-na.ssl-images-amazon.com/images/I/71KNU4RipCL._SL1200_.jpg",
        "contact":"fifi@gmail.com",
        "saved":false
     },
     {
        "id":"4",
        "tool":"Dewalt Tool Set",
        "lender_name":"Naga",
        "instructions":"Full tool set, different uses",
        "image":"https://images-na.ssl-images-amazon.com/images/I/91RRLv1XF9L._SX679_.jpg",
        "contact":"fifi@gmail.com",
        "saved":false
     }],
    color: "red"}

  }

  handleSave(toolInfo){


    console.log("it saved!")
    //change the specific tool's saved value

    let newTools = this.state.tools.map(tool=>{
          if(tool.id === toolInfo.id){
            tool.saved = !tool.saved
            return tool
          }
          else
            return tool
    })


    this.setState({tools:newTools})

  }

  render(){
  return (
    <div className="App">
      <ToolContainer handleSave= {this.handleSave} tools = {this.state.tools} color="red"/>
      <SavedToolContainer />  
    </div>
  );
  }
}

export default App;
