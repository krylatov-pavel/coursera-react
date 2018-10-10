import React, { Component } from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import HomePage from './HomeComponent';
import ContactsPage from './ContactsComponent';
import DishDetail from './DishdetailComponent';
import About from './AboutComponent';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = function (state) {
    return {
        dishes: state.dishes,
        leaders: state.leaders,
        promos: state.promos,
        comments: state.comments
    };
}


class Main extends Component {
    render() {
        const dishWithID = ({ match }) => {
            var dishId = parseInt(match.params.dishId);

            return (
                <DishDetail dish={this.props.dishes.find((dish) => dish.id === dishId)}
                    comments={this.props.comments.filter((comment) => comment.dishId === dishId)} />
            )};


        return (
            <div className="container">
                <Header />
                <Switch>
                    <Route path="/home" component={() =>
                        <HomePage dish={this.props.dishes.find((dish) => dish.featured)}
                            promo={this.props.promos.find((promo) => promo.featured)}
                            leader={this.props.leaders.find((leader) => leader.featured)}
                        />}
                    />
                    <Route path="/menu" exact component={() => <Menu dishes={this.props.dishes} />} />
                    <Route path="/menu/:dishId" component={dishWithID} />
                    <Route path="/contactus" component={ContactsPage} />
                    <Route path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));