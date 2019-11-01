

const routes = [
	// 项目管理
	{
		path: '/proj-manage',
		component: () => import("../Components/Project/index")
	},
	// 签文管理
	{
		path: '/sign-manage',
		component: () => import("../Components/Sign/index")
	}
]

export default routes
