import React, { Component } from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import HomePage from './HomeComponent';
import ContactsPage from './ContactsComponent';
import { Route, Switch, Redirect } from 'react-router-dom';
import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            leaders: LEADERS,
            promos: PROMOTIONS
        };
    }
    
    render() {
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
                    <Route path="/contactus" component={ContactsPage} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;