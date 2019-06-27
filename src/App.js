import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import ToolContainer from './ToolContainer';
import SavedToolContainer from './SavedToolContainer';
import NewToolForm from './NewToolForm';

class App extends React.Component {

  constructor(){
    super()
      this.state= {tools: []}

  }


  handleSave=(toolInfo)=>{

    //for tool with id x 
      //update saved boolean
    //setState to cause a rerender

    let newToolArray = this.state.tools.map(tool =>{
      if(tool.id === toolInfo.id){
        tool.saved = !tool.saved
        return tool}
      else
        return tool
    })

    this.setState({tool: newToolArray})
  }

  getTools(){

    return this.state.tools.filter(tool => !tool.saved )
    // return this.state.tools.filter((tool)=>{
    //   return !tool.saved
    // })
  }

  getSavedTools(){

    let savedTools = this.state.tools.filter(tool => tool.saved)
    return savedTools
  }

  componentDidMount(){
    //fetch tools from api
    fetch('http://localhost:3000/tools')
    .then(res => res.json())
    .then(tools => this.setState({tools: tools}))
  }

  componentDidUpdate(){
    console.log("App component Did update!")
  }

  render(){
  return (
    <div >

      <ToolContainer handleSave = {this.handleSave} tools = {this.getTools()} />
      <NewToolForm />
      <SavedToolContainer savedTools = {this.getSavedTools()} handleSave = {this.handleSave} />  
    </div>
  );
  }
}

export default App;
