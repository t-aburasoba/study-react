import React from 'react';
import {Route, Switch} from "react-router";
import {SignUp, SignIn, Reset, ProductEdit, ProductList, ProductDetail} from "./templates";
import Auth from './Auth'

const Router = () => {
    return (
        <Switch>
            <Route exact path={"/signup"} component={SignUp}></Route>
            <Route exact path={"/signin"} component={SignIn}></Route>
            <Route exact path={"/signin/reset"} component={Reset}></Route>

            <Auth>
                <Route exact path={"(/)?"} component={ProductList}></Route>
                <Route exact path={"/product/:id"} component={ProductDetail}></Route>
                <Route path={"/product/edit(/:id)?"} component={ProductEdit}></Route>
            </Auth>
        </Switch>
    )
}
export default Router