import React, { Component } from "react";
import { createContainer } from "meteor/react-meteor-data";
import { Bins } from "../../../imports/collections/bins";

class BinsList extends Component {

    onBinRemove(bin) {
        Meteor.call("bins.remove", bin);
    }

    renderList() {
        return this.props.bins.map( bin => {
            return (
                <li key={bin._id} className="list-group-item">
                    Bin {bin._id}
                    <span className="pull-right">
                        <button 
                            className="btn btn-danger"
                            onClick={() => { this.onBinRemove(bin) }}>
                            Remove
                        </button>
                    </span>
                </li>
            );
        } );
    }

    render(){
        console.log(this.props.bins);
        return (
            <div className="bins-list">
                <ul className="list-group">
                    {this.renderList()}
                </ul>
            </div>
        );
    }
}

export default createContainer(() => {
    Meteor.subscribe("bins");

    return { bins: Bins.find({}).fetch() };
}, BinsList);