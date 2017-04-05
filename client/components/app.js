import React from "react";

import Header from "./header";
import BinsList from "./bins/bins_list";

const App = () => {

    return (
        <div className="app">
            <Header />
            <BinsList />
        </div>
    );
}


export default App;