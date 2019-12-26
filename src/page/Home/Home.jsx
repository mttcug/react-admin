import React, { useState } from "react"
import { Layout } from 'antd'
import Head from "$C/Head"
import SideColumn from "$C/SideColumn"
import { Route, Switch } from 'react-router-dom'
import pathes from '$R/router'

const Home = () => {

	let [ collapsed, setCollapsed ] = useState(true)

	const toggleSidebar = (_collapsed) => {
		setCollapsed(_collapsed)
	}

	return (
		<Layout>
			<SideColumn collapsed={ collapsed } />
			<Layout>
				<Head collapsed={ collapsed } callBack = { toggleSidebar } />
				<div
					style={{
						margin: '24px 16px',
						padding: 24,
						background: '#fff',
						minHeight: 280
					}}
				>
                    <Switch>
                        {
                            pathes.map(item => {
                                return <Route exact path={ item.path } component={ item.component } key={ item.path } />
                            })
                        }
                    </Switch>
				</div>
			</Layout>
		</Layout>
	)
}

export default Home
