import React, { Component } from 'react';
import { Nav, NavLink, NavItem, Navbar } from 'reactstrap';
import './css/index.css'
import CSS from './css/styles.module.css'

export default class Menu extends Component {
    render() {
        return (
            <Navbar color="light" light expand="md" style={{float: 'right', padding: 0, marginTop: '-10px'}}>
                <Nav className="mr-auto" navbar>
                    <NavItem style={{padding:'12px'}}>
                        <NavLink href="/traditional">
                            <h3 className={this.props.active === 'traditional' && CSS.menuItemActive}>Traditional Art</h3>
                        </NavLink>
                    </NavItem>
                    <NavItem style={{padding:'12px'}}>
                        <NavLink href="/digital">
                            <h3 className={this.props.active === 'digital' && CSS.menuItemActive}>Digital Art</h3>
                        </NavLink>
                    </NavItem>
                    <NavItem style={{padding:'12px'}}>
                        <NavLink href="/photography">
                            <h3 className={this.props.active === 'photography' && CSS.menuItemActive}>Photography</h3>
                        </NavLink>
                    </NavItem >
                    <NavItem style={{padding:'12px', paddingRight: '10%'}}>
                        <NavLink href="/">
                            <h3>Home</h3>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}