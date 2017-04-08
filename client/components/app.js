import React from "react";

import Header from "./header";
import BinsList from "./bins/bins_list";

const App = (props) => {

    return (
        <div className="app">
            <Header />
            {props.children}
        </div>
    );
}


export default App;