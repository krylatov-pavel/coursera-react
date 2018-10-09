import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Col, FormFeedback } from 'reactstrap';

class ContactsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false
            }
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onTouched = this.onTouched.bind(this); 
    }

    validate(firstname, lastname, telnum, email) {
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''
        };

        if (this.state.touched.firstname) {
            if (firstname.length < 3)
                errors.firstname = "Length must be more then 3 characters";
        }


        if (this.state.touched.lastname) {
            if (lastname.length < 3)
                errors.lastname = "Length must be more then 3 characters";
        }

        const reg = /^\d+$/;
        if (this.state.touched.telnum && !reg.test(telnum))
            errors.telnum = 'Tel. Number should contain only numbers';

        if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Email should contain a @';

        return errors;
    }

    onSubmit(event) {
        event.preventDefault();
        alert(JSON.stringify(this.state));
    }

    onTouched(event) {
        this.setState({
            touched: { ...this.state.touched, [event.target.name]: true }
        });
    };

    handleInputChange(event) {
        var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

        this.setState({
            [event.target.name]: value
        });
    }

    render() {
        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);

        return (
            <div className="container">
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h4>Let us know what you think</h4>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup row>
                                <Label md={2} htmlFor="firstname">First Name</Label>
                                <Col md={10}>
                                    <Input type="text" name="firstname"
                                        value={this.firstname}
                                        valid={this.state.touched.firstname && !errors.firstname}
                                        invalid={!!errors.firstname}
                                        onChange={this.handleInputChange}
                                        onBlur={this.onTouched} />
                                    <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2} htmlFor="lasttname">Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" name="lastname"
                                        value={this.lastname}
                                        valid={this.state.touched.lastname && !errors.lastname}
                                        invalid={!!errors.lastname}
                                        onChange={this.handleInputChange}
                                        onBlur={this.onTouched} />
                                    <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2} htmlFor="telnum">Tel Num</Label>
                                <Col md={10}>
                                    <Input type="tel" name="telnum"
                                        value={this.telnum}
                                        valid={this.state.touched.telnum && !errors.telnum}
                                        invalid={!!errors.telnum}
                                        onChange={this.handleInputChange}
                                        onBlur={this.onTouched} />
                                    <FormFeedback>{errors.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2} htmlFor="email">Email</Label>
                                <Col md={10}>
                                    <Input type="email" name="email"
                                        value={this.email}
                                        valid={this.state.touched.email && !errors.email}
                                        invalid={!!errors.email}
                                        onChange={this.handleInputChange}
                                        onBlur={this.onTouched} />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check htmlFor="agree">
                                            <Input type="checkbox" name="agree" value={this.agree} onChange={this.handleInputChange} />
                                            <strong>May we cantact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Input type="select" name="contactType" value={this.contactType} onChange={this.handleInputChange}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2} htmlFor="message">Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" rows={10} value={this.message} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactsPage;