import { AlertColor, AlertPropsColorOverrides } from "@mui/material";
import { OverridableStringUnion } from "@mui/types";

type AlertInterface = {
    isAlertOpen: boolean,
    alertType: OverridableStringUnion<AlertColor, AlertPropsColorOverrides> | undefined,
    handleCloseAlert: React.MouseEventHandler<HTMLButtonElement> | undefined,
    message: string
}

export default AlertInterface