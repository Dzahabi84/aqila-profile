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
import ThemeProvider, { useTheme } from "./context/Theme";
import Project from "./pages/Project";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="project" element={<Project />} />
    </Route>
  )
);

function App() {
  const { theme } = useTheme();
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className={`${theme} font-['IBM_Plex_Sans']`}>
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
