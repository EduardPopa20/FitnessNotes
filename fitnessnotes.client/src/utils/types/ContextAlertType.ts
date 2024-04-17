import { Dispatch, SetStateAction } from "react";

type ContextAlertType = {
    state: boolean;
    setState: Dispatch<SetStateAction<boolean>>;
};

export default ContextAlertType;