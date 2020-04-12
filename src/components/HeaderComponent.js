import React, { Component } from 'react';
import { Nav, Navbar,  NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label  } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';

class Header extends Component {

    constructor(props){
        super(props);

        this.state = {
            isNavOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render(){
        return (
            <React.Fragment>
                <Navbar className="p-0" id="headerModalBar">
                    <span className="navbar-text ml-auto mr-2">
                        <Button onClick={this.toggleModal}>
                            <i className="fa fa-sign-in" />  Login
                        </Button>
                        {' '}
                        <Button onClick={this.toggleModal}>
                            <i className="fa fa-sign-in" />  Join Us
                        </Button>
                    </span>
                </Navbar>
                <Jumbotron id="headerJumbotron" className="m-0">
                    <div className="row align-items-center">
                        
                            <Link to="/"><img  className="float-left" src="/img/TSAlogo.png" height="60" width="60" alt="TSA Logo" />
                                <span className="float-left ml-2" id="headerTSA">TSA</span>
                            </Link>{''}
                        
                        <span>Event</span>
                    
                    </div>
                </Jumbotron>
                <Navbar expand="md" id="headerNavbar">
                    <div className="container m-0">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/about" >
                                        <i className="fa fa-info fa-lg" /> About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/event" >
                                        <i className="fa fa-calendar"/> Event
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/livingguide" >
                                        <i className="fa fa-cutlery" /> Living Guide
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/studentgroup" >
                                        <i className="fa fa-users" /> Student Group
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                {/* toggle={this.toggleModal} in ModalHeader will automatically provide 
                    a way to close the modal when it's being opened*/}
                <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor="username">Usename</Label>
                            <Input type="text" id="username" name="username" 
                                innerRef={input => this.username = input} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" name="password"
                                innerRef={input => this.password = input} />
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="remember"
                                    innerRef={input => this.remember = input} />
                                Remember me
                            </Label>
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary">Login</Button>
                    </Form>
                </ModalBody>
            </Modal>
            </React.Fragment>
        );
    }
}

export default Header;