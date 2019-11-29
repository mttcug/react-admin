import React, { useState } from "react"
import { Layout, Icon } from 'antd'
const {  Header } = Layout
import './index.scss'

const Head = (Props) => {

	let [ collapsed, setCollapsed ] = useState(Props.collapsed)

	const toggle = () => {
		setCollapsed(!collapsed)
		Props.callBack(collapsed)
	}

	return (
		<Header style={{ background: '#fff' }}>
			<Icon
				className='trigger'
				type={ collapsed ? 'menu-unfold' : 'menu-fold' }
				onClick={ toggle }
			/>
		</Header>
	)
}

export default Head
