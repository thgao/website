import React, { Component } from 'react';
import { Nav, NavLink, NavItem, Navbar, NavbarToggler, Collapse } from 'reactstrap';
import '../css/index.css'
import CSS from '../css/menu.module.css'
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
            <Navbar light expand="md" className={CSS.navbar}>
                <div className={CSS.fillerNavRow}/>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem className={CSS.menuNavItem}>
                        <NavLink tag={Link} to="/">
                            <h3 className={CSS.navText}>home</h3>
                        </NavLink>
                    </NavItem>
                    <h3 className={CSS.navTextDivider}>•</h3>
                    <NavItem className={CSS.menuNavItem}>
                        <NavLink tag={Link} to="/traditional">
                            <h3 className={`${CSS.navText} ${this.props.active === 'traditional' && CSS.menuItemActive}`}>traditional art</h3>
                        </NavLink>
                    </NavItem>
                    <h3 className={CSS.navTextDivider}>•</h3>
                    <NavItem className={CSS.menuNavItem}>
                        <NavLink tag={Link} to="/digital">
                            <h3 className={`${CSS.navText} ${this.props.active === 'digital' && CSS.menuItemActive}`}>digital art</h3>
                        </NavLink>
                    </NavItem>
                    <h3 className={CSS.navTextDivider}>•</h3>
                    <NavItem className={CSS.menuNavItem}>
                        <NavLink tag={Link} to="/photography">
                            <h3 className={`${CSS.navText} ${this.props.active === 'photography' && CSS.menuItemActive}`}>photography</h3>
                        </NavLink>
                    </NavItem >
                </Nav>
                </Collapse>
            </Navbar>
        )
    }
}