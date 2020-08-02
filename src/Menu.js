import React, { Component } from 'react';
import { Nav, NavLink, NavItem, Navbar, NavbarToggler, Collapse } from 'reactstrap';
import './css/index.css'
import CSS from './css/styles.module.css'
import { Link } from 'react-router-dom';

export default class Menu extends Component {
    constructor(props){
        super(props)
        this.state = {
            isOpen: false
        }
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };
    render() {
        return (
            <Navbar color="light" light expand="md" className={CSS.navbar}>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem style={{padding:'12px'}}>
                        <NavLink tag={Link} to="/traditional">
                            <h3 className={`${CSS.navText} ${this.props.active === 'traditional' && CSS.menuItemActive}`}>Traditional Art</h3>
                        </NavLink>
                    </NavItem>
                    <NavItem style={{padding:'12px'}}>
                        <NavLink tag={Link} to="/digital">
                            <h3 className={`${CSS.navText} ${this.props.active === 'digital' && CSS.menuItemActive}`}>Digital Art</h3>
                        </NavLink>
                    </NavItem>
                    <NavItem style={{padding:'12px'}}>
                        <NavLink tag={Link} to="/photography">
                            <h3 className={`${CSS.navText} ${this.props.active === 'photography' && CSS.menuItemActive}`}>Photography</h3>
                        </NavLink>
                    </NavItem >
                    <NavItem style={{padding:'12px', paddingRight: '100px'}}>
                        <NavLink tag={Link} to="/">
                            <h3 className={CSS.navText}>Home</h3>
                        </NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
        )
    }
}