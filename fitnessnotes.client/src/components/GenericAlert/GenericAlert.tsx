import { useContext, useEffect } from "react";

import { Collapse, Alert, IconButton, AlertColor, AlertPropsColorOverrides } from "@mui/material";
import { OverridableStringUnion } from "@mui/types";
import CloseIcon from '@mui/icons-material/Close';

import { SuccessAlertContext, ErrorAlertContext, WarningAlertContext } from "../../layouts/AlertLayout";

import AlertInterface from "../../utils/interfaces/Alert";
import AlertMessages from "../../utils/constants/alertMessages";

const GenericAlert = (props: AlertInterface) => {
    const { message, alertType, handleCloseAlert } = props;

    return (
        <Collapse >
            <Alert
                className="generic-alert"
                variant="filled"
                severity={alertType as OverridableStringUnion<AlertColor, AlertPropsColorOverrides> | undefined}
                action={
                    <IconButton
                        aria-label="close-alert-button"
                        color="inherit"
                        size="small"
                        onClick={handleCloseAlert}
                    >
                        <CloseIcon />
                    </IconButton>
                }
            >
                {message}
            </Alert>
        </Collapse>
    );
}
const SuccessAlert = () => {
    const contextValue = useContext(SuccessAlertContext);

    if (!contextValue) {
        return null;
    }

    const { state, setState } = contextValue;

    useEffect(() => {
        setTimeout(() => {
            setState(false);
        }, 3000);
    }, [state])

    return <GenericAlert
        isAlertOpen={state}
        alertType={"success"}
        handleCloseAlert={() => setState(!setState)}
        message={AlertMessages.SUCCESS}
    />
}

const ErrorAlert = () => {
    const contextValue = useContext(ErrorAlertContext);

    if (!contextValue) {
        return null;
    }

    const { state, setState } = contextValue;

    useEffect(() => {
        setTimeout(() => {
            setState(false);
        }, 3000);
    }, [state])

    return <GenericAlert
        isAlertOpen={state}
        alertType={"error"}
        handleCloseAlert={() => setState(!state)}
        message={AlertMessages.ERROR}
    />
}


const WarningAlert = () => {
    const contextValue = useContext(WarningAlertContext);

    if (!contextValue) {
        return null;
    }

    const { state, setState } = contextValue;

    useEffect(() => {
        setTimeout(() => {
            setState(false);
        }, 7000);
    }, [state])

    return <GenericAlert
        isAlertOpen={state}
        alertType={"warning"}
        handleCloseAlert={() => setState(!state)}
        message={AlertMessages.SUCCESS}
    />
}

export default { SuccessAlert, ErrorAlert, WarningAlert };