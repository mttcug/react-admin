import React from "react";
import { NavLink , Link } from "react-router-dom"
import style from './index.scss'

const sidebarItem = [
  { title: '项目管理', icon: '', link: 'proj-manage' },
  { title: '签文管理', icon: '', link: 'sign-manage' }
]
const links = sidebarItem.map((item, index) => <NavLink key={ index } className={ style.sidebarItem } to={ item.link }>{ item.title }</NavLink >)

const Sidebar = () => {
	return (
		<div className={style.sidebar}>
			{ links }
		</div>
	)
}

export default Sidebar
