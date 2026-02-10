import { RouterProvider } from "react-router-dom"
import { appRouter } from "./router/app.router"

export const CucharaSocialApp = () => {
  return (
    <>
        <RouterProvider router={appRouter} />
    </>
  )
}

