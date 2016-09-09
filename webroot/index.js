import React from 'react'
import { render }from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import Main from './common/Main'
import AppManagerRoute from './routes/Appmanager'
import APIManagerRoute from './routes/ApiManager'
import RenRenGORoute from './routes/RenRenGO'
import {ProductManagerRoute, CategoryManagerRoute, StockManagerRoute }from './routes/ProductManager'

const routes = {
    path: "/",
    component: Main,
    childRoutes: [
        AppManagerRoute,
        RenRenGORoute,
        ProductManagerRoute,
        CategoryManagerRoute,
        StockManagerRoute
    ]
}
render(<Router history={browserHistory} routes={routes}/>,document.getElementById("root"));

//render((
//        <Router history={browserHistory}>
//            <Route path="/" component={Main}>
//                <Route path="appmanager" route={AppManagerRoute}/>
//                <Route path="apimanager" component={APIManager}/>
//                <Route path="postman" component={POSTMan}/>
//                <Route path="apidoc" component={APIDoc}/>
//            </Route>
//        </Router>
//    ),document.getElementById("root")
//)