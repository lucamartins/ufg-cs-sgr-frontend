import { create } from "zustand";
import { AppStore } from "./appStoreTypes";

export const confirmationDialogDetailsInitialState: AppStore["confirmationDialogDetails"] =
  {
    message: null,
    title: null,
    open: false,
    onConfirm: null,
    onCancel: null,
    isOnConfirmLoading: false,
  };

const useAppStore = create<AppStore>((set) => ({
  snackbarDetails: {
    open: false,
    message: null,
    severity: null,
  },
  confirmationDialogDetails: confirmationDialogDetailsInitialState,
  openSnackbar: ({ message, severity }) =>
    set({ snackbarDetails: { open: true, message, severity } }),
  closeSnackbar: () =>
    set({ snackbarDetails: { open: false, message: null, severity: null } }),
}));

export default useAppStore;
