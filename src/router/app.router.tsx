import { createBrowserRouter } from "react-router";
import HomePage from "../cucharaSocial/pages/home/HomePage";
import AdminPage from "../admin/pages/AdminPage";
import { CucharaSocialLayout } from "../cucharaSocial/layouts/CucharaSocialLayout";
import { AdminLayout } from "../admin/layouts/AdminLayout";
import { LogInLayout } from "../logIn/layouts/LogInLayout";
import { LoginPage } from "../logIn/pages/LoginPage";
import { lazy } from "react";
import ProfilePage from "../cucharaSocial/pages/profile/ProfilePage";

const SearchPage = lazy(() => import("../cucharaSocial/pages/profile/ProfilePage")) // Esto es para que carge la página bajo demanda y no tenga que descargarlo todo a la vez
const SettingsPage = lazy(() => import("../cucharaSocial/pages/settings/SettingsPage"))
const ChatPage = lazy(() => import("../cucharaSocial/pages/chat/ChatPage"))

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <CucharaSocialLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'profile',
                element: <ProfilePage />
            },
            {
                path: 'settings',
                element: <SettingsPage />
            },
            {
                path: 'chat',
                element: <ChatPage/>
            }
        ]
    },

    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
             {
                index: true,
                element: <AdminPage />
            }
        ]
    },
    {
        path: '/logIn',
        element: <LogInLayout/>,
        children: [
             {
                index: true,
                element: <LoginPage />
            }
        ]
    }

]);