import { Outlet, Link } from 'react-router-dom'

export default function RootLayout() {
    const sidebarStyle =
        'text-gray-900 text-center py-2 px-4 m-2 mx-5 rounded hover:text-blue-700 hover:bg-blue-50 hover:border-l-4 hover:border-blue-700  flex items-center justify-start'
    const icons = 'material-symbols-outlined mx-3'

    return (
        <div className="w-full md:w-auto flex">
            <header className="w-1/6 h-screen border-r-2 border-gray-200">
                <nav className="mt-8 flex flex-col items-center items-stretch">
                    <p className="text-gray-300 mx-11">MENU</p>
                    <Link to="dashboard" className={sidebarStyle}>
                        <span className={icons}>dashboard</span>
                        Dashboard
                    </Link>
                    <Link to="orders" className={sidebarStyle}>
                        <span className={icons}>shopping_bag</span>
                        Orders
                    </Link>
                    <Link to="inventory" className={sidebarStyle}>
                        <span className={icons}>inventory_2</span>
                        Inventory
                    </Link>
                    <Link to="logistics" className={sidebarStyle}>
                        <span className={icons}>conveyor_belt</span>
                        Logistics
                    </Link>
                    <Link to="payments" className={sidebarStyle}>
                        <span className={icons}>payments</span>
                        Payments
                    </Link>
                    <Link to="analytics" className={sidebarStyle}>
                        <span className={icons}>analytics</span>
                        Analytics
                    </Link>
                </nav>
            </header>

            <main className="w-5/6 h-screen bg-gray-50">
                <p>test</p>
                <Outlet />
            </main>
        </div>
    )
}

//<div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center custom-border-right"></div>
