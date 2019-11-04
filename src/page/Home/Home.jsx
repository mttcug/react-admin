import React from "react";
import Header from "../../components/Header"
import Sidebar from "../../components/Sidebar"
import { Route, IndexRoute, Switch } from 'react-router-dom'
import pathes from '../../router/index'
import style from './Home.scss'

const routes = pathes.map((routeItem, index) => {
 	return <Route key={ index } path={ routeItem.path } component={ routeItem.component } />
})

const Home = () => {
	return (
		<div>
			<Sidebar />
			<div className={ style.content }>
				<Header />
				<div>
					<p>正文内容哦</p>
					<Switch>
						{ routes }
					</Switch>
				</div>
			</div>
		</div>
	)
}

export default Home
