import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom"
import style from './index.scss'

const sidebarItem = [
  { title: '项目管理', icon: '', link: 'proj-manage' },
  { title: '签文管理', icon: '', link: 'sign-manage' }
]

class Sidebar extends Component {

	toPage = (e) => {
		console.log('怎么样')
	}

	render () {
		return (
			<div className={style.sidebar}>
				<ul>
				{ 
					sidebarItem.map((item, index) => 
					(
						<li key={ index } onClick={ this.toPage }>
							<NavLink className={ style.sidebarItem } to={ item.link }>{ item.title }</NavLink>
						</li>
					))
				}
				</ul>
			</div>
		)
	}
}

export default Sidebar
