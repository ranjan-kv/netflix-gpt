import  {createBrowserRouter} from "react-router-dom";
import Login from './login';
import Browse from './Browse';
import { RouterProvider } from "react-router-dom";

const Body = () => {

const appRouter = createBrowserRouter([

  {
    path: '/',
    element: <Login />,
    // fallback: <Login/>
  },

  {
    path: '/browse',
    element: <Browse />
    // fallback: <Browse/>
  }

])

  return (
    <div>
    <RouterProvider router ={appRouter}/>
    </div>
  )
}

export default Body
