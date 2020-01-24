
import React from 'react';
import './Header.css';
import Title from '../Typography/Title/Title';

class Header extends React.Component {


    render() {
        return (
            <header>
                <Title>
                    {this.props.title}
                </Title>
            </header>
        )
    }
}

export default Header;