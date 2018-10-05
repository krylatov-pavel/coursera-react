import React, { Component } from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import HomePage from './HomeComponent';
import { Route, Switch, Redirect } from 'react-router-dom';
import { DISHES } from '../shared/dishes';


class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES
        };
    }
    
    render() {
        return (
            <div className="container">
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route path="/menu" exact component={() => <Menu dishes={this.state.dishes} />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;