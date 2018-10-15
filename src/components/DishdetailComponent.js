import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Modal, ModalHeader, ModalBody, Button, Label } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';
import { LoadingSpinner } from './LoadingSpinnerComponent';
import { baseUrl } from '../shared/config';

const maxLength = len => val => !val || val.length <= len;
const minLength = len => val => val && val.length >= len; 

class CommentsForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    toggleModal() {
        this.setState({
            showModal: !this.state.showModal
        });
    }

    submitForm(model) {
        alert(`Form content is: ${JSON.stringify(model)}`);
        this.props.postComment(this.props.dishId,
            model.rating,
            model.author,
            model.comment);

        this.toggleModal();
    }

    render() {
        return (
            <div>
                <Button outline onClick={this.toggleModal}><span className="fa fa-edit"></span> Submit Comment</Button>
                <Modal toggle={this.toggleModal} isOpen={this.state.showModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={this.submitForm}>
                            <div className="form-group">
                                <Label for="rating">Rating</Label>
                                <Control.select className="form-control"
                                    name="rating"
                                    id="rating"
                                    model=".rating">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </div>
                            <div className="form-group">
                                <Label for="author">Author</Label>
                                <Control.text className="form-control"
                                    name="author"
                                    id="author"
                                    model=".author"
                                    validators={{ minLength: minLength(3), maxLength: maxLength(15) }}
                                />
                                <Errors className="text-danger"
                                    model=".author"
                                    show="touched" messages={
                                    {
                                        minLength: "Must be at least 3 characters length",
                                        maxLength: "Must be no longer then 15 characters"
                                    }
                                } />
                            </div>
                            <div className="form-group">
                                <Label for="comment">Author</Label>
                                <Control.textarea className="form-control"
                                    rows={5}
                                    name="comment"
                                    id="comment"
                                    model=".comment" />
                            </div>
                            <div className="form-group">
                                <Button color="primary" type="submit">Submit</Button>
                            </div>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

function RenderDish({dish}) {
    return (
        <Card>
            <CardImg top src={baseUrl + dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}

function RenderComments({comments, postComment, dishId}) {
    if (comments !== null) {
        const commentsContent = comments.map((comment) => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {comment.date}</p>
                </li>
            )
        });

        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {commentsContent}
                </ul>
                <CommentsForm postComment={postComment} dishId={dishId} />
            </div>
        );
    }
    else {
        return (<div></div>);
    }
}

const DishDetail = (props) => {
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <LoadingSpinner />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null) {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments} postComment={props.postComment} dishId={props.dish.id} />
                </div>
            </div>
        );
    } else {
        return (<div></div>);
    }
}

export default DishDetail;