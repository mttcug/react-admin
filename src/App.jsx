import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from "./page/Home/home"
import ErrorPage from "./page/Error/index"

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={ Home } />
                <Route component={ ErrorPage } />
            </Switch>
        </BrowserRouter>
    )
}

export default App
