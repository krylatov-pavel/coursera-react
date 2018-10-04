import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    selectedDish(dishId) {
        this.setState({
            selectedDish: dishId
        });
    }

    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">
                            Con Fusion
                        </NavbarBrand>
                    </div>
                </Navbar>
                <div className="container">
                    <Menu dishes={this.state.dishes} onClick={(dishId) => this.selectedDish(dishId)} />
                    <DishDetail dish={this.state.dishes.find((dish) => dish.id === this.state.selectedDish)} />
                </div>
            </div>
        );
    }
}

export default Main;