import React from "react";
import { NavLink } from "react-router-dom"
import style from './index.scss'

const sidebarItem = [
  { title: '项目管理', icon: '', link: 'proj-manage' },
  { title: '签文管理', icon: '', link: 'sign-manage' }
]

const Sidebar = (Props) => {

	const toPage = (title) => {
		return () => Props.callback(title)
	}

	return (
		<div className={style.sidebar}>
			<ul className={style.container}>
			{
				sidebarItem.map((item, index) =>
					<li key={ index } onClick={ toPage(item.title) }>
						<NavLink className={ style.sidebarItem } to={ item.link }>{ item.title }</NavLink>
					</li>
				)
			}
			</ul>
		</div>
	)
}

export default Sidebar
