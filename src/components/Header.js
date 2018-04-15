import React, { Component } from 'react';
import { Button } from 'react-bootstrap';



class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="headerFooter">
                <img alt="logo" src="https://i.imgur.com/ATXs717.png"/>

                <h1>&nbsp;&nbsp;&nbsp;Kill the Site Survey</h1>
                <hr/>
            </div>
        )
    }
}

export default Header;