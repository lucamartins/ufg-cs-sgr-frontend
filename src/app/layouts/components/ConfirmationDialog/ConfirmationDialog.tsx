import { LoadingButton } from "@mui/lab";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useStateConfirmationDialog } from "../../../shared/stores/app/hooks";

const ConfirmationDialog = () => {
  const { details, endFlow } = useStateConfirmationDialog();

  const handleConfirm = () => {
    endFlow(true);
  };

  const handleCancel = () => {
    endFlow(false);
  };

  return (
    <Dialog
      open={details.isOpen}
      onClose={handleCancel}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle id="alert-dialog-title">
        {details.title ?? "Você tem certeza?"}
      </DialogTitle>
      <DialogContent dividers>
        <DialogContentText id="alert-dialog-description">
          {details.message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>Cancelar</Button>
        <LoadingButton
          loading={details.isOnConfirmLoading}
          onClick={handleConfirm}
          variant="contained"
        >
          Confirmar
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
