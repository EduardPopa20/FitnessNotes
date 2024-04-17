import { FC } from "react";

interface Props {
    errors: string[]
}

const ErrorDisplayer: FC<Props> = ({ errors }) => {
    return (
        <>
            {
                errors.map((error, index) => {
                    return <span key={index}>{error}<br /></span>
                })
            }
        </>
    );
}

export default ErrorDisplayer;