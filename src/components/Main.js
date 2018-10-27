import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Menu';
import DishDetail from './DishDetail';
import { DISHES } from '../shared/dishes';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {
        const HomePage = ()=>(
            <Home/>
        );

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <div><Menu dishes={this.state.dishes} onClick={(dishId)=> this.onDishSelect(dishId)}   /> <DishDetail/> </div>} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;
