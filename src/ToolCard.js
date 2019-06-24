import React from 'react';

class ToolCard extends React.Component {


    constructor(){
        super()
        this.state = {
            tool_name: "Bike Pump",
            tool_img: "https://i5.walmartimages.com/asr/8a754fce-059e-452e-84ac-4aaefc449308_1.1e668f9744ed884850ef3c5686dae53c.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"
            , description: "Pump it !"
        }
    }

    render(){
        let variable = "variable"
        return(
            <div className="ui card">
                <div className="image">
                    <img src={this.state.tool_img}/>
                </div>
                <div className="content">
                    <a className="header"> {this.state.tool_name}</a>
                    {variable = "hey!"}
                    <div className="description">
                    {this.state.description}
                    </div>
                </div>
                <button>Save! </button>
            </div>


        )


    }







}

export default ToolCard;