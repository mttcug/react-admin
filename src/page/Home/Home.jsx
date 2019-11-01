import React from "react";
import Header from "../../Components/Header"
import Sidebar from "../../Components/Sidebar"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import pathes from '../../router/index'
import style from './Home.scss'

const routes = pathes.map((routeItem, index) => <Route key={ index } path={ routeItem.path } component={ routeItem.component } />)

const Home = () => {
	return (
		<div>
			<Sidebar />
			<Header />
			<div className={ style.content }>
				<BrowserRouter>
					<Switch>{ routes }</Switch>
				</BrowserRouter>
			</div>
		</div>
	)
}

export default Home
