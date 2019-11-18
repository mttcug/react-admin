
import React, { lazy, Suspense } from 'react'
const Project = lazy(() => import('../Components/Project'))
const Sign = lazy(() => import('../Components/Sign'))

const SuspenseComponent = (Component) => {
	return props => (
		<Suspense fallback={ <div>loading...</div> }>
			<Component  {...props} />
		</Suspense>
	)
}

const routes = [
	// 项目管理
	{
		path: '/proj-manage',
		component: SuspenseComponent(Project)
	},
	// 签文管理
	{
		path: '/sign-manage',
		component: SuspenseComponent(Sign)
	}
]

export default routes
