import { router_items } from '../../routes'
import { useState } from 'react'
import { Menu, MenuProps } from 'antd'
import { useNavigate } from 'react-router-dom'
// 获取缓存
const storageSelectedKeys = sessionStorage.getItem('selectedKeys') || ''
const defaultOpenKeys = JSON.parse(sessionStorage.getItem('defaultOpenKeys') || '[]')
function Aside() {
  const [routes] = useState(router_items)
  const [selectedKeys, setSelectedKeys] = useState<string>(storageSelectedKeys)
  const [openKeys, setOpenKeys] = useState<[]>(defaultOpenKeys)
  const navigate = useNavigate()
  const handleMenu: MenuProps['onClick'] = (e) => {
    const keyPath = e.keyPath
    const copyKeyPath = JSON.parse(JSON.stringify(keyPath))
    setOpenKeys(copyKeyPath.slice(1))
    sessionStorage.setItem('defaultOpenKeys', JSON.stringify(copyKeyPath.slice(1)))
    const router=keyPath.reverse().join('/')
    navigate('/' + router)
  }
  return (
    <aside className="aside">
      <Menu
        mode="inline"
        items={routes}
        onClick={handleMenu}
        defaultOpenKeys={openKeys}
        theme="dark"
      ></Menu>
    </aside>
  )
}

export default Aside
