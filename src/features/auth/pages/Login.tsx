import LoginForm from "../components/LoginForm.tsx";

const Login = () => {
    return (
        <div className="flex flex-col items-center">
            <LoginForm></LoginForm>
            <p className="text-sm text-center mt-4 dark:text-gray-300">
                Noch kein Konto? <a href="#" className="text-blue-500">Registrieren</a>
            </p>
        </div>
    );
};

export default Login;
