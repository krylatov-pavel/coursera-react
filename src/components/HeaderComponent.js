import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavbarToggler, Collapse, NavbarBrand, Jumbotron, Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: true,
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.onSignIn = this.onSignIn.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    onSignIn(event) {
        event.preventDefault();
        alert(`${this.username.value}, ${this.password.value}`);
        this.toggleModal();
    }

    render() {
        return (
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={() => this.toggleNav()} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" width="41" height="30" alt="logo" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home"></span> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list"></span> Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info"></span> About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card"></span> Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}>
                                        <span className="fa fa-sign-in"></span> Sign In
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSignIn}>
                            <FormGroup row>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" name="username"
                                    innerRef={(input) => this.username = input}/>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" name="password"
                                    innerRef={(input) => this.password = input}/>
                            </FormGroup>
                            <FormGroup row>
                                <Button type="submit">Sign In</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;