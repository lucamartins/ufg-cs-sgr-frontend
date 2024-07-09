import useAppStore, {
  confirmationDialogDetailsInitialState,
} from "../../appStore";

const useStateConfirmationDialog = () => {
  const [isOpen, message, title, isOnConfirmLoading] = useAppStore((state) => [
    state.confirmationDialogDetails.open,
    state.confirmationDialogDetails.message,
    state.confirmationDialogDetails.title,
    state.confirmationDialogDetails.isOnConfirmLoading,
  ]);

  const initFlow = ({
    message,
    onConfirm,
    onCancel = null,
  }: {
    message: string;
    onConfirm: () => void;
    onCancel?: (() => void) | null;
  }) => {
    useAppStore.setState({
      confirmationDialogDetails: {
        ...useAppStore.getState().confirmationDialogDetails,
        message,
        onCancel,
        onConfirm,
        open: true,
      },
    });
  };

  const endFlow = async (hasAccepted: boolean) => {
    const onConfirm =
      useAppStore.getState().confirmationDialogDetails.onConfirm;
    const onCancel = useAppStore.getState().confirmationDialogDetails.onCancel;

    if (hasAccepted) {
      if (!onConfirm) {
        throw new Error(
          "Confirmation dialog has no onConfirm function to handle confirmation."
        );
      }

      useAppStore.setState({
        confirmationDialogDetails: {
          ...useAppStore.getState().confirmationDialogDetails,
          isOnConfirmLoading: true,
        },
      });

      await onConfirm();

      useAppStore.setState({
        confirmationDialogDetails: {
          ...useAppStore.getState().confirmationDialogDetails,
          isOnConfirmLoading: false,
        },
      });
    } else {
      onCancel?.();
    }

    useAppStore.setState({
      confirmationDialogDetails: confirmationDialogDetailsInitialState,
    });
  };

  return {
    initFlow,
    endFlow,
    details: {
      isOpen,
      message,
      title,
      isOnConfirmLoading,
    },
  };
};

export default useStateConfirmationDialog;
