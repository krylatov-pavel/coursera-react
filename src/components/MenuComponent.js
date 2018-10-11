import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderMenuItem({dish, onClick}) {
    return (
        <div className="col-12 col-md-5 m-1">
            <Link to={`/menu/${dish.id}`}>
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </Link>
        </div>
    );
}

const Menu = (props) => {
    const menu = props.dishes.dishes.map((dish) => {
        return (
            <RenderMenuItem dish={dish} key={dish.id} />
        );
    });

    return (
        <div className="row">
            {menu}
        </div>
    );
}

export default Menu;