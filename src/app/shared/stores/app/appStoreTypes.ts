import { AlertProps } from "@mui/material";

export interface OpenSnackbarProps {
  message: string;
  severity: AlertProps["severity"];
}

export interface AppStore {
  snackbarDetails: {
    open: boolean;
    message: string | null;
    severity: AlertProps["severity"] | null;
  };
  confirmationDialogDetails: {
    open: boolean;
    title: string | null;
    message: string | null;
    onConfirm: (() => void | Promise<void>) | null;
    onCancel: (() => void | Promise<void>) | null;
    isOnConfirmLoading: boolean;
  };
  openSnackbar: ({ message, severity }: OpenSnackbarProps) => void;
  closeSnackbar: () => void;
}
