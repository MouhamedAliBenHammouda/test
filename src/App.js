import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/home/Home.jsx";
import ListeEmployee from "./pages/ListeEmployee/ListeEmployee.jsx";
import SignInSide from "./pages/login/SignInSide.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="Logout" element={<SignInSide />} />
    <Route path="/" element={<Root/>}>
      <Route index element={<Home/>} />
      <Route path="ListeEmployee" element={<ListeEmployee />} />
      <Route path="ListCvMission" element={<SignInSide />} />
      <Route path="Profile" element={<SignInSide />} />
    </Route>
    </>

  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
