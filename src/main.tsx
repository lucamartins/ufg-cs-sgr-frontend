import { CssBaseline, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./routes";
import { MUIThemeConfig } from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline />
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={MUIThemeConfig}>
        <RouterProvider router={appRouter} />
      </ThemeProvider>
    </LocalizationProvider>
  </React.StrictMode>
);
