import {RouteObject} from "react-router-dom";
import {lazy} from "react";
import Layout from "../layout/Layout.tsx";
import ProtectedRoute from "../features/auth/components/ProtectedRoute.tsx";
import AnimatedPage from "@components/AnimatedPage.tsx";

const Home = lazy(() => import("./pages/Home.tsx"));
const About = lazy(() => import("./pages/About.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const Settings = lazy(() => import("../features/settings/pages/Settings.tsx"));
const Login = lazy(() => import("../features/auth/pages/Login.tsx"));

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout/>, // Layout bleibt immer erhalten
        children: [
            {path: "/", element: <AnimatedPage><Home/></AnimatedPage>},
            {path: "/about", element: <AnimatedPage><About/></AnimatedPage>},
            {path: "/login", element: <AnimatedPage><Login/></AnimatedPage>},
            {
                path: "/",
                element: <ProtectedRoute />, // ⛔ Geschützte Routen
                children: [
                    { path: "/settings", element: <AnimatedPage><Settings /></AnimatedPage> },
                ],
            },
            {path: "*", element: <NotFound/>}, // 404-Route
        ]
    }];