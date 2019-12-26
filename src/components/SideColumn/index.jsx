import React from "react"
import { Layout, Menu, Icon } from 'antd'
import { Route, NavLink } from 'react-router-dom'
import './index.scss'

const {  Sider } = Layout
const SideColumn = (Props) => {

	const sideLinks = [
		{ id: '1', name: '项目管理', link: '/proj-manage', icon: 'user' },
		{ id: '2', name: '签文管理', link: '/sign-manage', icon: 'video-camera' },
		{ id: '3', name: '图片管理', link: '/proj-manage', icon: 'upload' },
	]

	return (
		<Sider trigger={null} collapsible collapsed={ Props.collapsed }>
			<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
			{
				sideLinks.map(menu => 
					<Menu.Item key={ menu.id }>
						<Icon type={ menu.icon } />
						<NavLink className='navLink' to={ menu.link }>{ menu.name }</NavLink>
					</Menu.Item>
				)
			}
			</Menu>
		</Sider>
	)
}

export default SideColumn
