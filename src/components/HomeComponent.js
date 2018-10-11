import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { LoadingSpinner } from './LoadingSpinnerComponent';

function RenderCard({item, isLoading, errMess}) {
    if (isLoading) {
        return (
            <LoadingSpinner />
        );
    }
    else if (errMess) {
        return (
            <h4>{errMess}</h4>
        );
    }
    else if (item) return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
    else return (<div></div>);
}

function HomePage(props) {
    return (
        <div className="row align-items-start">
            <div className="col-12 col-md m-1">
                <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess} />
            </div>
            <div className="col-12 col-md m-1">
                <RenderCard item={props.leader} />
            </div>
            <div className="col-12 col-md m-1">
                <RenderCard item={props.promo} />
            </div>
        </div>
    );
}

export default HomePage;