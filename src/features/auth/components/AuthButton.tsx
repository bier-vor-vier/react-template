import {logout, useAuthDispatch, useAuthSelector} from "../store/authSlice.ts";
import {button} from "@style/button.ts";
import {useNavigate} from "react-router-dom";

export function AuthButton() {
    const dispatch = useAuthDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useAuthSelector((state) => state.auth.isAuthenticated);

    return (
        <div className="flex flex-col items-center">
            {isAuthenticated ? (
                <button
                    className={button({variant: "secondary"})}
                    onClick={() => dispatch(logout())}
                >
                    Logout
                </button>
            ) : (
                <button
                    className={button({variant: "primary"})}
                    onClick={() => navigate('/login')}
                >
                    Login
                </button>
            )}
        </div>
    );
}
