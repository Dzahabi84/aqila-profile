import {
  Route,
  Router,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./layout/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}/>
    </Route>
  )
)

function App() {
  return (
    <div className="font-['IBM_Plex_Sans']">
      <RouterProvider router={router}/>
    </div>
      
  )
}

export default App
