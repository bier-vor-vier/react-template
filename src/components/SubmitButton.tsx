import { useState } from "react";
import {button} from "@style/button.ts";

type SubmitButtonProps = {
    onClick: () => Promise<void>; // 🔥 Erwartet eine asynchrone Funktion
    children: React.ReactNode;
};

export const SubmitButton = ({ onClick, children }: SubmitButtonProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleClick = async () => {
        setIsSubmitting(true);
        try {
            await onClick(); // 🔥 Warten auf das Ende des Promise
        } catch (error) {
            console.error("Fehler beim Absenden:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            disabled={isSubmitting}
            className={button({variant: "primary"})}
        >
            {isSubmitting && <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>}
            {children}
        </button>
    );
};

