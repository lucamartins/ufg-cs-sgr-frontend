import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { GlobalLayout } from "../app/layouts";
import { HomePage } from "../app/pages";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<GlobalLayout />}>
      <Route index element={<HomePage />} />
    </Route>
  )
);

export default appRouter;
