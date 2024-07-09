import { Outlet } from "react-router-dom";
import { ConfirmationDialogComponent, SnackbarComponent } from "./components";

const GlobalLayout = () => {
  return (
    <>
      <Outlet />
      <SnackbarComponent />
      <ConfirmationDialogComponent />
    </>
  );
};

export default GlobalLayout;
