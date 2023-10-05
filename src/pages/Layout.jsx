import { Outlet } from "react-router-dom"
import LayoutHeader from "../components/LayoutHeader"

const Layout = () => {
  return (
    <div>
      <LayoutHeader />
      <Outlet />
    </div>
  )
}

export default Layout
