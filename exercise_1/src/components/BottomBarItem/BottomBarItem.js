
import React from 'react';
import './BottomBarItem.css';

class BottomBarItem extends React.Component {


    render() {

        if (this.props.active) {
            return (
                <button className="BottomBarItem Active">
                    {this.props.children}
                </button>
            )
        }

        return (
            <button onClick={this.props.onClick} id={this.props.id} className="BottomBarItem">
                {this.props.children}
            </button>
        )
    }
}

export default BottomBarItem;