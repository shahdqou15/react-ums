import { createBrowserRouter } from "react-router-dom"
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Users from './pages/users/Users'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'users',
                element: <Users />
            }
        ]

    }

]);

export default router;