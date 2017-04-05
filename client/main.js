import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute } from "react-router";
import createHistory from "history/createBrowserHistory";

import App from "./components/app";
import { Bins } from "../imports/collections/bins";
import BinsMain from "./components/bins/bins_main";

const history = createHistory();
const routes = (
    <Router history={history}>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/bins" component={BinsMain} />
        </div>
    </Router>
);

Meteor.startup(() => {
    ReactDOM.render(routes, document.querySelector(".render-target"));
});
