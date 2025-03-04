import {BrowserRouter as Router, useLocation, useRoutes} from "react-router-dom";
import {AuthProvider} from "./features/auth/components/AuthProvider.tsx";
import {Suspense, useState} from "react";
import {routes} from "./app/appRoutes.tsx";
import ThemeProvider from "./app/components/ThemeProvider.tsx";
import "@store/i18n.ts";
import i18n from "@store/i18n.ts";
import {I18nextProvider} from "react-i18next";
import SplashScreen from "@components/SplashScreen.tsx";
import {AnimatePresence} from "framer-motion";
import LanguageUpdater from "@components/LanguageUpdater.tsx";

const AppRoutes = () => {
    const location = useLocation()
    return (
        <AnimatePresence mode={"wait"}>
            <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
                <div key={location.pathname}>{useRoutes(routes)}</div>
            </Suspense>
        </AnimatePresence>
    );
};

const App = () => {
    const [loading, setLoading] = useState(true);

    return (
        <I18nextProvider i18n={i18n}>
            <LanguageUpdater />
            <ThemeProvider>
                {loading && <SplashScreen onFinish={() => setLoading(false)}/>}
                <AuthProvider>
                    <Router basename={'/react-template'}>
                        <AppRoutes/>
                    </Router>
                </AuthProvider>
            </ThemeProvider>
        </I18nextProvider>
    )
}

export default App
