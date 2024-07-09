import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAppStore } from "../../stores";

const useApp = () => {
  const { openSnackbar, closeSnackbar } = useAppStore();

  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  return { openSnackbar, closeSnackbar, navigate, location, params };
};

export default useApp;
