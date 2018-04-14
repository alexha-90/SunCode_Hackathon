import React, { Component } from 'react';
import { Button } from 'react-bootstrap';



class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="headerFooter">
                <h1>Kill the Site Survey</h1>
            </div>
        )
    }
}

export default Header;