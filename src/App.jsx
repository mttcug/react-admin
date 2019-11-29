import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from "$P/Home/home"
import ErrorPage from "$P/Error/index"
import './App.scss'

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={ Home } />
                <Route path='/error' component={ ErrorPage } />
                <Redirect to='/' />
            </Switch>
        </BrowserRouter>
    )
}

export default App
