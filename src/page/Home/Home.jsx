import React, { useState } from "react"
import { Layout } from 'antd'
import Head from "$C/Head"
import SideColumn from "$C/SideColumn"
import { Route, Switch } from 'react-router-dom'
import pathes from '$R/router'

const Home = () => {

	let [ collapsed, setCollapsed ] = useState(true)

	const toggleSidebar = (_collapsed) => {
		console.log('_collapsed:', _collapsed)
		setCollapsed(_collapsed)
	}

	return (
		<Layout>
			<SideColumn collapsed={ collapsed }></SideColumn>
			<Layout>
				<Head collapsed={ collapsed } callBack = { toggleSidebar }></Head>
				<div
					style={{
						margin: '24px 16px',
						padding: 24,
						background: '#fff',
						minHeight: 280,
					}}
				>
					Content
				</div>
			</Layout>
		</Layout>
	)
}

export default Home
