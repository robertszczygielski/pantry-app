import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Home } from "./Home";
import { AddProduct } from "../products/AddProduct";
import { AllProducts } from "../products/AllProducts";

export const Routing = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/add">Add</Link>
                    </li>
                    <li>
                        <Link to="/show">All</Link>
                    </li>
                </ul>

                <Switch>
                    <Route path="/show">
                        <AllProducts/>
                    </Route>
                    <Route path="/add">
                        <AddProduct/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
        );
}
