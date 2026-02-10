import { Outlet } from "react-router"

export const AdminLayout = () => {
  return (
    <div style={{backgroundColor: "pink"}}>
        <Outlet />
    </div>
  )
}
