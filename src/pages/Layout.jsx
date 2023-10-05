import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
      World
      <Outlet />
    </div>
  )
}

export default Layout
