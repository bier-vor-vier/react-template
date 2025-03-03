import {createContext, ReactNode, useContext} from "react";
import {useAuthSelector} from "../store/authSlice.ts";

type AuthContextType = {
    isAuthenticated: boolean;
};
const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const AuthProvider = ({children}: { children: ReactNode }) => {
    const isAuthenticated = useAuthSelector(x => x.auth.isAuthenticated);
    return (
        <AuthContext.Provider value={{isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
};