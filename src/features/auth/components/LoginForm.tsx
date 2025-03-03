import {useLoginMutation} from "../store/authApi.ts";
import ErrorMessage from "../../../components/ErrorMessage.tsx";
import {useLocation, useNavigate} from "react-router-dom";
import {box} from "@style/box.ts";
import {z} from "zod";
import {SubmitButton} from "@components/SubmitButton.tsx";
import {useZodForm} from "@store/useZodForm.ts";
import {useFeatureTranslation} from "@store/useFeatureTranslation.ts";
import {LockIcon} from "lucide-react";
import {FormPasswordInput, FormTextInput} from "@components/FormField.tsx";


const LoginForm = () => {

    const t = useFeatureTranslation("auth");

    const loginSchema = z.object({
        email: z.string().min(1, t("email.min")).email(t("email.email")),
        password: z.string().min(6, t("password.min")),
    });

    const {register, handleSubmit, formState: {errors}} = useZodForm(loginSchema);
    const [login, {error}] = useLoginMutation();
    const navigate = useNavigate();
    const location = useLocation();

    const onSubmit = async (data: z.infer<typeof loginSchema>) => {
        await login(data).unwrap();
        const from = location.state?.from || "/";
        navigate(from, {replace: true});
    };

    const {container, title} = box({size: 'sm'});

    return (
        <form autoComplete="off" className={container()}>
            <h2 className={title()}>
                <LockIcon size={24}></LockIcon>
                {t("title")}
            </h2>
            <FormTextInput
                label={t("email")}
                {...register("email")}
                error={errors.email}
                autoFocus={true}
            />
            <FormPasswordInput
                label={t("password")}
                {...register("password")}
                error={errors.password}
            />
            <SubmitButton onClick={handleSubmit(onSubmit)}>Login</SubmitButton>
            <ErrorMessage error={error}/>
        </form>
    );
}

export default LoginForm;