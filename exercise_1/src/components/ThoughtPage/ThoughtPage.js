
import React from 'react';
import THOUGHTS from '../../data/thoughts';
import ThoughtItem from '../ThoughtItem/ThoughtItem';
import './ThoughtPage.css';
class ThoughtPage extends React.Component {
    
    
    renderItems() {
        var output = [];
        for(var i in THOUGHTS) {
            output.push(
                <ThoughtItem
                    title= {THOUGHTS[i]["title"]}
                    date = {THOUGHTS[i]["date"]}
                />
            )
        }
        return output;
    }
    
    render(){
        return (
            <div className="ListContainer">
                {this.renderItems()}
            </div>
        );
    }
}


export default ThoughtPage;