import React from 'react';
import './BarTitle.css';
class BarTitle extends React.Component {
    
    render() {
        return (
            <h5>
                {this.props.children}
            </h5>
        )
    }
}

export default BarTitle;
