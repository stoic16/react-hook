import './layout.scss'
import { Outlet } from 'react-router-dom'
import Aside from './aside'
function Layout() {
  return (
    <section id="container">
      <Aside />
      <section className="right">
        <header>header</header>
        <main>
          <Outlet />
        </main>
      </section>
    </section>
  )
}

export default Layout
