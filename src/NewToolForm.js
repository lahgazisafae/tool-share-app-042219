import React from 'react';




class NewToolForm extends React.Component{

    constructor(){
        super() 
        this.state={

            "tool":" ",
            "lender_name":" "
           
        }
    }

    handleChange=(e)=>{

        this.setState({  [e.target.name]: e.target.value})

    }

    handleSubmit=()=>{

    }

    render(){

        return(
            <form className="ui form">
                <div className="field">
                    <label>Tool</label>
                    <input onChange = {this.handleChange} type="text" name="tool" placeholder="Tool"/>
                </div>
                <div className="field">
                    <label>Lender Name</label>
                    <input onChange = {this.handleChange} type="text" name="lender_name" placeholder="Lender Name"/>
                </div>
               
                <button onClick = {this.handleSubmit} className="ui button" type="submit">Submit</button>
        </form>


        )




    }






}

export default NewToolForm;