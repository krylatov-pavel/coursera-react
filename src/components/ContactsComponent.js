import React, { Component } from 'react';
import { Label, Button, Col, Row } from 'reactstrap';
import { LocalForm, Control } from 'react-redux-form';

class ContactsPage extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onSubmit(values) {
        alert(JSON.stringify(values));
    }

    render() {
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
                        <LocalForm onSubmit={this.onSubmit}>
                            <Row className="form-group">
                                <Label md={2} htmlFor="firstname">First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" name="firstname"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label md={2} htmlFor="lasttname">Last Name</Label>
                                <Col md={10}>
                                    <Control.text model="lastname" name="lastname"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label md={2} htmlFor="telnum">Tel Num</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" name="telnum"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label md={2} htmlFor="email">Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" name="email"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{ size: 6, offset: 2 }}>
                                    <div className="form-check">
                                        <Label check htmlFor="agree">
                                            <Control.checkbox name="agree"
                                                model=".agree"
                                                className="form-check-input" />
                                            <strong>May we cantact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Control.select name="contactType" model=".contactType"
                                        className="form-control">
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label md={2} htmlFor="message">Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea rows={10} model=".message"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactsPage;