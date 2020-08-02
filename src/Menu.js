import React, { Component } from 'react';
import { Nav, NavLink, NavItem, Navbar, NavbarToggler, Collapse } from 'reactstrap';
import './css/index.css'
import CSS from './css/styles.module.css'

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
                        <NavLink href="/traditional">
                            <h3 className={`${CSS.navText} ${this.props.active === 'traditional' && CSS.menuItemActive}`}>Traditional Art</h3>
                        </NavLink>
                    </NavItem>
                    <NavItem style={{padding:'12px'}}>
                        <NavLink href="/digital">
                            <h3 className={`${CSS.navText} ${this.props.active === 'digital' && CSS.menuItemActive}`}>Digital Art</h3>
                        </NavLink>
                    </NavItem>
                    <NavItem style={{padding:'12px'}}>
                        <NavLink href="/photography">
                            <h3 className={`${CSS.navText} ${this.props.active === 'photography' && CSS.menuItemActive}`}>Photography</h3>
                        </NavLink>
                    </NavItem >
                    <NavItem style={{padding:'12px', paddingRight: '10%'}}>
                        <NavLink href="/">
                            <h3 className={CSS.navText}>Home</h3>
                        </NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
        )
    }
}