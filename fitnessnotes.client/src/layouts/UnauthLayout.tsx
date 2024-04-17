import { ReactNode } from "react";

const UnauthLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="page page-unauth">
            <div className="panel-unauth">
                {children}
            </div>
        </div>
    );
}

export default UnauthLayout;