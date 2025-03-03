import {FetchBaseQueryError} from "@reduxjs/toolkit/query/react";
import {SerializedError} from "@reduxjs/toolkit";

type ErrorMessageProps = {
    error?: FetchBaseQueryError | SerializedError;
};

const ErrorMessage = ({error}: ErrorMessageProps) => {
    if (!error) return null;
    let errorMessage = "Ein unbekannter Fehler ist aufgetreten.";
    if ("data" in error) {
        errorMessage = (error.data as { message?: string })?.message || errorMessage;
    }

    return <p className="text-red-500">❌ {errorMessage}</p>;
};

export default ErrorMessage;
