import React, { Component } from "react";

import CodeMirror from "react-codemirror";
import "codemirror/mode/markdown/markdown";

class BinsEditor extends Component {

    onEditorChange(content) {
        Meteor.call("bins.update", this.props.bin, content);
    }

    render() {
        return (
            <div className="bins-editor">
                <div className="col-xs-6">
                    <h5>Input</h5>
                    <CodeMirror 
                        onChange={this.onEditorChange.bind(this)}
                        options={{ mode: "markdown", lineNumbers: true }}
                        value={this.props.bin.content}
                        />
                </div>
            </div>
        );
    }
}

export default BinsEditor;