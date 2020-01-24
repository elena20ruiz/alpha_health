import React from 'react';
import './ThoughtItem.css';

class ThoughtItem extends React.Component {

    render() {
        return (
            <button className="ThoughtItem">
                <p><b>{this.props.title}</b></p>
                <p>{this.props.date}</p>
            </button>
        )
    }
}

export default ThoughtItem;