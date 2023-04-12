import { Outlet } from 'react-router-dom'
import SidebarLinks from '../components/SidebarLinks'
import { rootLayoutStyle } from '../styles/allStyles'
import DarkModeToggle from '../components/DarkModeToggle'

export default function RootLayout() {
    return (
        <div className={rootLayoutStyle.div}>
            {/* sidebar on the left */}
            <header className={rootLayoutStyle.header}>
                <nav className={rootLayoutStyle.nav}>
                    <p className={rootLayoutStyle.p}>MENU</p>
                    <SidebarLinks name="dashboard" iconsName="dashboard" />
                    <SidebarLinks name="orders" iconsName="shopping_bag" />
                    <SidebarLinks name="inventory" iconsName="inventory_2" />
                    <SidebarLinks name="logistics" iconsName="conveyor_belt" />
                    <SidebarLinks name="payments" iconsName="payments" />
                    <SidebarLinks name="analytics" iconsName="analytics" />
                </nav>
                <nav>
                    <p className={rootLayoutStyle.p}>SUPPORT</p>
                    <SidebarLinks name="settings" iconsName="settings" />
                    <SidebarLinks name="help" iconsName="help" />
                    <DarkModeToggle />
                </nav>
            </header>

            {/* main page on the right */}
            <main className={rootLayoutStyle.main}>
                <Outlet />
            </main>
        </div>
    )
}
