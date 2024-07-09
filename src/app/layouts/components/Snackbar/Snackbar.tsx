import { Alert, Snackbar as MUISnackbar } from "@mui/material";
import { useApp } from "../../../shared/hooks";
import { useAppStore } from "../../../shared/stores";

const Snackbar = () => {
  const { closeSnackbar } = useApp();
  const { snackbarDetails } = useAppStore();

  if (!snackbarDetails.message || !snackbarDetails.severity) return null;

  return (
    <MUISnackbar
      open={snackbarDetails.open}
      onClose={closeSnackbar}
      autoHideDuration={4000}
    >
      <Alert
        severity={snackbarDetails.severity}
        onClose={closeSnackbar}
        sx={{ width: "100%" }}
      >
        {snackbarDetails.message}
      </Alert>
    </MUISnackbar>
  );
};

export default Snackbar;
