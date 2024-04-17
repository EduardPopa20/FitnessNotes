import { createContext, useState, ReactNode } from 'react';

import GenericAlert from '../components/GenericAlert/GenericAlert';
import ContextAlertType from '../utils/types/ContextAlertType';

const SuccessAlertContext = createContext<ContextAlertType | undefined>(undefined);
const ErrorAlertContext = createContext<ContextAlertType | undefined>(undefined);
const WarningAlertContext = createContext<ContextAlertType | undefined>(undefined);

const AlertLayout = ({ children }: { children: ReactNode }) => {
    const [isSuccessAlertOpen, setIsSuccessAlertOpen] = useState(false);
    const [isErrorAlertOpen, setIsErrorAlertOpen] = useState(false);
    const [isWarningAlertOpen, setIsWarningAlertOpen] = useState(false);

    return (
        <SuccessAlertContext.Provider value={{ state: isSuccessAlertOpen, setState: setIsSuccessAlertOpen }}>
            <ErrorAlertContext.Provider value={{ state: isErrorAlertOpen, setState: setIsErrorAlertOpen }} >
                <WarningAlertContext.Provider value={{ state: isWarningAlertOpen, setState: setIsWarningAlertOpen }} >
                    {children}
                    <GenericAlert.SuccessAlert />
                    <GenericAlert.ErrorAlert />
                    <GenericAlert.WarningAlert />
                </WarningAlertContext.Provider>
            </ErrorAlertContext.Provider>
        </SuccessAlertContext.Provider >
    )
}

export { SuccessAlertContext, ErrorAlertContext, WarningAlertContext }
export default AlertLayout