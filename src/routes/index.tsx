import { useRoutes, Navigate, RouteObject } from 'react-router-dom'
import Home from '../views/home/index.tsx'
import User from '../views/user/index.tsx'
import Layout from '../views/layout/index.tsx'
export const router_items: object[] = [
  {
    path: '/',
    element: <Navigate to="/layout/home" />,
    label: '首页',
    key:'/'
  },
  {
    path: '/layout',
    element: <Layout />,
    label: '控制台',
    key:'layout',
    children: [
      {
        path: 'home',
        element: <Home />,
        label: '首页',
        key:'home',
      },
      { path: 'user', element: <User />, label: '用户', key:'user' },
    ],
  },
]
function GetRoutes() {
  const routes: RouteObject[] = useRoutes(router_items)

  return routes
}

export default GetRoutes
