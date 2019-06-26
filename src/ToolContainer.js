import React from 'react';
import ToolCard from './ToolCard';

function ToolContainer(props){

        return(
            <div>{props.tools.map(tool => <ToolCard handleSave = {props.handleSave} toolInfo = {tool}/>)}    
            </div>
        )
}

export default ToolContainer;