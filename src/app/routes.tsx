import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { CoinDetailsPage, HomePage } from "../pages";

const AppRouter = () => {
  const routes = createRoutesFromElements(
    <>
      <Route element={<HomePage />} path={"/"} />
      <Route element={<CoinDetailsPage />} path={"/coin-details/:id"} />
      <Route element={<h1
        className={
          "text-red-500 text-6xl text-center h-screen flex items-center justify-center"
        }>
        Are you lost?
      </h1>} path={"*"} />
    </>
  );

  const router = createBrowserRouter(routes, {});

  return <RouterProvider router={router} />;
};

export default AppRouter;
