
import React from 'react';
import PAGES from '../../data/pages';

import './BottomBar.css';
import BarTitle from '../Typography/BarTitle/BarTitle';
import BottomBarItem from '../BottomBarItem/BottomBarItem';


class BottomBar extends React.Component {

    constructor(props) {
        super(props);

        var active_buttons = new Array(4).fill(0);
        active_buttons[this.props.init] = 1;

        this.state = {
            active_buttons: active_buttons
        }
    }


    handleClick(e) {
        console.log(e);
        const id = e.target.id;
        var active_buttons = new Array(4).fill(0);
        active_buttons[id] = 1;
        this.setState({
            active_buttons: active_buttons
        });
        this.props.onChangePage(id);
        e.preventDefault();
    }


    render() {

        //Render items
        var buttons = [];
        for (var i in PAGES) {
            buttons.push(
                <BottomBarItem
                    id={i}
                    active={this.state.active_buttons[i]}
                    onClick={(e) => this.handleClick(e)}
                >
                    <i>{PAGES[i]['icon']}</i>
                    <BarTitle>{PAGES[i]['title']}</BarTitle>
                </BottomBarItem>
            )
        }

        return (
            <footer>
                <div className="ItemContainer">
                    {buttons}
                </div>
            </footer>
        )
    }
}

export default BottomBar;