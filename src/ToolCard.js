import React from 'react';

function ToolCard(props){

        return(
            <div className="ui card">
                <div className="image">
                    <img src={props.toolInfo.image}/>
                </div>
                <div className="content">
                    <a className="header"> {props.toolInfo.lender_name}</a>
                    <div className="description">
                    {props.toolInfo.instructions}
                    </div>
                </div>
                <button onClick = {(e)=> props.handleSave(props.toolInfo)}>{props.toolInfo.saved ? "Unsave" : "Save"}</button>
            </div>


        )


    }




export default ToolCard;