import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import MainLayout from "../layouts/MainLayout";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* <Route index element={<Navigate to="/" />} */}
        {
          routes.map(route => (
            <Route key={route.link} path={route.link} element={route.element} />
          ))
        }
      </Route>
    </Routes>
  )
}

export default Router;