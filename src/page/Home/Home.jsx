import React, { Component } from "react";
import Header from "../../components/Header"
import Sidebar from "../../components/Sidebar"
import { Route, Switch } from 'react-router-dom'
import pathes from '../../router/index'
import style from './Home.scss'

class Home extends Component {

	constructor () {
		super()
		this.state = {
			title: ''
		}
	}

	changeDefaultProps = (_title) => {
		this.setState({
			title: _title
		})
	}

	render () {
		return (
			<div>
				<Sidebar title={ this.state.title } callback={ this.changeDefaultProps } />
				<div className={ style.content }>
					<Header title={ this.state.title } />
					<div>
						<p>正文内容哦</p>
						<Switch>
							{
								pathes.map((routeItem, index) => <Route key={ index } path={ routeItem.path } component={ routeItem.component } />)
							}
						</Switch>
					</div>
				</div>
			</div>
		)
	}
}

export default Home
