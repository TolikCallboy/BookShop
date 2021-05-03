import React from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import TitlePage from "./Pages/TitlePage/TitlePage";
import Header from "./Pages/Header/Header";
import "./App.css"

const App = ( ) => {
    return (
        <main role='main' className="container">
            <Header numItems={5} total={101111}/>
            <Switch>
                <Route
                    path="/"
                    component={HomePage}
                    exact />
                <Route
                    path="/cart"
                    component={TitlePage}
                />
            </Switch>
        </main>
    )
}

export default App