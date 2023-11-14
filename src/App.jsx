import {
  Route,
  Router,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./layout/RootLayout";
import { QueryClient, QueryClientProvider } from "react-query";
import { useGlobal } from "./context/Global";
import Project from "./pages/Project";
import Skill from "./pages/Skill";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<ErrorPage />} element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="project" element={<Project />} />
      <Route path="skill" element={<Skill />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  const { theme } = useGlobal();
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className={`${theme} font-['IBM_Plex_Sans']`}>
        <div className="dark:bg-black bg-white">
          <RouterProvider router={router} />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
