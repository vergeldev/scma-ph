import { Outlet, Link } from 'react-router-dom'

export default function RootLayout() {
    return (
        <>
            <header>
                <nav>
                    <Link to="dashboard">Dashboard</Link>
                    <Link to="orders">Orders</Link>
                    <Link to="inventory">Inventory</Link>
                    <Link to="logistics">Logistics</Link>
                    <Link to="payments">Payments</Link>
                    <Link to="analytics">Analytics</Link>
                </nav>
            </header>

            <main>
                <p>test</p>
                <Outlet />
            </main>
        </>
    )
}

//<div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center custom-border-right"></div>
