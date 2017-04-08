import React, { Component } from "react";
import { Link, browserHistory } from "react-router";

import Accounts from "./accounts";

class Header extends Component {

    onBinClick(e) {
        e.preventDefault();

        Meteor.call("bins.insert", (err, binId) => {
            if (err) {
                return;
            } else {
                browserHistory.push(`/bins/${binId}`);
            }
        });

    }

    render() {
        return (
            <div className="header">
                <nav className="nav navbar-default">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">MarkBin</Link>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><Accounts /></li>
                        <li><a href="#" onClick={this.onBinClick.bind(this)}>Create Bin</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;