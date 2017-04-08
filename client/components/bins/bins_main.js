import React, { Component } from "react";
import { createContainer } from "meteor/react-meteor-data";
import { Bins } from "../../../imports/collections/bins";

import BinsEditor from "./bins_editor";
import BinsViewer from "./bins_viewer";

class BinsMain extends Component {
    render() {
        if ( !this.props.bin ) {
            return <div>Loading...</div>;
        }

        return (
            <div className="bins-main">
                <BinsEditor bin={this.props.bin}/>
                <BinsViewer bin={this.props.bin}/>
            </div>
        );
    }
}

export default createContainer((props) => {
    Meteor.subscribe("bins");
    const bin = Bins.findOne(props.params.binId);
    return { bin };
}, BinsMain);