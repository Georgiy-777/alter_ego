import Main from "./pages/Main";
import New from "./pages/New";
import Profile from "./pages/Profile";
import { LOGIN_ROUTE, MAIN_ROUTE, NEW_ROUTE, PROFILE_ROUTE } from "./consts";
import Auth from "./pages/Auth";

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: NEW_ROUTE,
        Component: New
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
]

export const authRoutes = [
    {
        path: PROFILE_ROUTE,
        Component: Profile
    }
]