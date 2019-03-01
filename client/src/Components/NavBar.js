import React, { Component } from 'react';
import { Nav, NavItem } from 'reactstrap';
import {Link} from 'react-router-dom';
class Navbar extends Component {
    render() {
        return (
            <div>
                <Nav>
                    <NavItem>
                        <Link to= "/"> Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link to = ''> Shoes </Link>
                    </NavItem>
                    <NavItem>
                        <Link to = "/users"> Users </Link>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}

export default Navbar;