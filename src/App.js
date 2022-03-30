import React from "react";
import {Switch, Route, NavLink} from "react-router-dom";
import Home from "./pages/home/Home";
import Subreddit from "./pages/subreddit/Subreddit";
import './App.css';


function App() {

    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/subreddit/r/:subredditId">
                    <Subreddit/>
                </Route>
            </Switch>
            <footer>
                <p>In opdracht van NOVI Hogeschool C 2022</p>
            </footer>
        </>
    );
}

export default App;
