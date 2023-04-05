import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import ErrorPage from './pages/Error-page'
import Dashboard from './pages/Dashboard'
import Orders from './pages/Orders'
import Inventory from './pages/Inventory'
import Logistics from './pages/Logistics'
import Payments from './pages/Payments'
import Analytics from './pages/Analytics'

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Dashboard />,
            },
            {
                path: 'dashboard',
                element: <Dashboard />,
            },
            {
                path: 'orders',
                element: <Orders />,
            },
            {
                path: 'inventory',
                element: <Inventory />,
            },
            {
                path: 'logistics',
                element: <Logistics />,
            },
            {
                path: 'payments',
                element: <Payments />,
            },
            {
                path: 'analytics',
                element: <Analytics />,
            },
        ],
    },
])

function App() {
    return <RouterProvider router={router} />
}

export default App
