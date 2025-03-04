import {ComponentType} from "react";
import {FieldError} from "react-hook-form";
import {form} from "@style/form.ts";

type FormFieldProps = {
    label: string;
    error?: FieldError;
};

const withFormField = <T extends object>(
    WrappedComponent: ComponentType<T>
) => {
    const {inputFloating, labelFloating} = form();
    return ({label, error, ...props}: T & FormFieldProps) => (
        <div className="relative w-full">
            <WrappedComponent {...(props as T)} className={inputFloating()}/>
            <label className={labelFloating()}>{label}</label>
            {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
        </div>
    );
};

const TextInput = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
    return <input {...props} placeholder=" " />;
};

const PasswordInput = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
    return <TextInput {...props} type="password" />;
};

export const FormTextInput = withFormField(TextInput);
export const FormPasswordInput = withFormField(PasswordInput);