import React, { Component } from 'react';
import { Button } from 'react-bootstrap';



class Header extends Component {
    constructor() {
        super();
        this.redirectHome = this.redirectHome.bind(this);
    }

    redirectHome() {
        window.location.href = "/";
    }


    render() {
        return (
            <div className="headerFooter" onClick={this.redirectHome}>
                <img alt="logo" src="https://i.imgur.com/ATXs717.png"/>
                <h1>&nbsp;&nbsp;&nbsp;Kill the Site Survey</h1>
            </div>
        )
    }
}

export default Header;