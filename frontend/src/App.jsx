import { Toaster } from "react-hot-toast";
import { useRoutes } from "react-router-dom";
import routes from "./assets/routes.jsx";

export const App = () => {
  let element = useRoutes(routes)
  return (
    <>
      {element}
      <Toaster position="top-right" reverseOrder={false}/>
    </>
  )
}