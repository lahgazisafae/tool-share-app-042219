import React from 'react';

class ToolCard extends React.Component{



    componentDidUpdate(){
        console.log("Tool Card Component Updated!")
    }

    componentWillUnmount(){
        console.log("Tool Card Component Unmounted!")
    }
    render(){
        return(
            <div className="ui card">
                <div className="image">
                    <img src={this.props.toolInfo.image}/>
                </div>
                <div className="content">
                    <a className="header"> {this.props.toolInfo.lender_name}</a>
                    <div className="description">
                    {this.props.toolInfo.instructions}
                    </div>
                </div>
                <button onClick = {(e)=> this.props.handleSave(this.props.toolInfo)}>{this.props.toolInfo.saved ? "Unsave" : "Save"}</button>
            </div>


        )
        }

    }




export default ToolCard;