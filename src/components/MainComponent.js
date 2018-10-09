import React, { Component } from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import HomePage from './HomeComponent';
import ContactsPage from './ContactsComponent';
import DishDetail from './DishdetailComponent';
import About from './AboutComponent';
import { Route, Switch, Redirect } from 'react-router-dom';
import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { COMMENTS } from '../shared/comments';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            leaders: LEADERS,
            promos: PROMOTIONS,
            comments: COMMENTS
        };
    }

    render() {
        const dishWithID = ({ match }) => {
            var dishId = parseInt(match.params.dishId);

            return (
                <DishDetail dish={this.state.dishes.find((dish) => dish.id === dishId)}
                    comments={this.state.comments.filter((comment) => comment.dishId === dishId)} />
            )};


        return (
            <div className="container">
                <Header />
                <Switch>
                    <Route path="/home" component={() =>
                        <HomePage dish={this.state.dishes.find((dish) => dish.featured)}
                            promo={this.state.promos.find((promo) => promo.featured)}
                            leader={this.state.leaders.find((leader) => leader.featured)}
                        />}
                    />
                    <Route path="/menu" exact component={() => <Menu dishes={this.state.dishes} />} />
                    <Route path="/menu/:dishId" component={dishWithID} />
                    <Route path="/contactus" component={ContactsPage} />
                    <Route path="/aboutus" component={() => <About leaders={this.state.leaders} />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;