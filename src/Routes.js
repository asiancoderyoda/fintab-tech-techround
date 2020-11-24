import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from './history';



import Active from "./components/Active";
import Details from "./components/Details";




export default class Routes extends Component {

    render() {

        return (

            <Router history={history}>

                <Switch>
                    <Route path="/Active" exact component={Active} />
                    <Route path="/Details" component={Details} />
                </Switch>
            </Router>
        )
    }
}