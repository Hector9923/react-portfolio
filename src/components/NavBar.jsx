import { NavLink } from 'react-router-dom'
import '../styles/components/navbar.css'

function NavBar() {
    return (
        <div className='navbar-container'>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Home
            </NavLink>
            <NavLink to='/about' className={({ isActive }) => (isActive ? 'active-link' : '')}>
                About me
            </NavLink>
            <NavLink to='/contact' className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Contact me
            </NavLink>
        </div>
    )
}

export default NavBar