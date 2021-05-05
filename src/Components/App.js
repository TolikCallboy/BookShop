import React from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import TitlePage from "./Pages/TitlePage/TitlePage";
import Header from "./Pages/Header/Header";
import "./App.css"
import Authorization from "./Authorization/Authorization";
import Login from "./Authorization/Login";

const App = ( ) => {
    return (
        <main role='main' className="container">
            <Header/>
            <Switch>
                <Route
                    path="/"
                    component={HomePage}
                    exact />
                <Route
                    path="/cart"
                    component={TitlePage}
                />
                <Route path='/authorization' render={() => <Authorization/>}/>
                <Route path='/login' render={() => <Login/>}/>
            </Switch>
        </main>
    )
}

export default App