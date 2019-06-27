import React from 'react';
import ToolCard from './ToolCard';

function SavedToolContainer(props){

    
        return(
            <div className="ui right sidebar visible" style={{"float": "right"}}>
                {props.savedTools.map(tool => <ToolCard  toolInfo={tool} handleSave = {props.handleSave}/> )}

            </div>
        )
    

}

export default SavedToolContainer;