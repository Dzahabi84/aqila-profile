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
import ReactQueryDevtools from "react-query/devtools";
import { useTheme } from "./context/Theme";
import Project from "./pages/Project";
import Skill from "./pages/Skill";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="project" element={<Project />} />
      <Route path="skill" element={<Skill />} />
    </Route>
  )
);

function App() {
  const { theme } = useTheme();
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
