import { BrowserRouter as Router, useRoutes } from "react-router-dom";

// import pages
import ShowCreators from "./pages/ShowCreators";
import ViewCreator from "./pages/ViewCreator";
import AddCreator from "./pages/AddCreator";
import EditCreator from "./pages/EditCreator";

// import components
import Navbar from "./components/Navbar";
import "./App.css";

function AppRoutes() {
  // route config
  const routes = useRoutes([
    { path: "/", element: <ShowCreators /> },
    { path: "/creator/:id", element: <ViewCreator /> },
    { path: "/add", element: <AddCreator /> },
    { path: "/edit/:id", element: <EditCreator /> },
  ]);

  return routes;
}

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
