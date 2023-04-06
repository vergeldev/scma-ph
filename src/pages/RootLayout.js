import { Outlet, Link } from 'react-router-dom'

export default function RootLayout() {
    const sidebarStyle =
        'text-gray-900 text-center py-2 px-4 m-1 rounded hover:text-blue-900 hover:bg-blue-50 hover:border-l-4 hover:border-blue-900'

    return (
        <div className="container flex">
            <header className="w-1/5 h-screen">
                <nav className="mt-8 flex flex-col items-center items-stretch">
                    <Link to="dashboard" className={sidebarStyle}>
                        Dashboard
                    </Link>
                    <Link to="orders" className={sidebarStyle}>
                        Orders
                    </Link>
                    <Link to="inventory" className={sidebarStyle}>
                        Inventory
                    </Link>
                    <Link to="logistics" className={sidebarStyle}>
                        Logistics
                    </Link>
                    <Link to="payments" className={sidebarStyle}>
                        Payments
                    </Link>
                    <Link to="analytics" className={sidebarStyle}>
                        Analytics
                    </Link>
                </nav>
            </header>

            <main className="w-4/5 h-screen bg-gray-200">
                <p>test</p>
                <Outlet />
            </main>
        </div>
    )
}

//<div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center custom-border-right"></div>
