import { Link } from 'react-router-dom'
import { sidebarStyle } from '../styles/allStyles'

const SidebarLinks = ({ name, iconsName }) => {
    const capitalizedName = name.replace(/^\w/, (c) => c.toUpperCase())

    return (
        <Link to={name} className={sidebarStyle.link}>
            <span className={sidebarStyle.icons}>{iconsName}</span>
            {capitalizedName}
        </Link>
    )
}

export default SidebarLinks
