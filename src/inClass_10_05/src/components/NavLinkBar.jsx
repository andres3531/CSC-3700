// src/components/NavLinkBar.jsx
import { NavLink } from 'react-router-dom'

function NavLinkBar() {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container-fluid'>
                <a className='navbar-brand' href='/'>Books 4 U</a>

                <button className='navbar-toggler' type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarNav'>
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item'>
                            {/* end prop — without it / matches all routes so Home is always active */}
                            <NavLink className='nav-link' to='/' end>
                                Home
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/about'>
                                About
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/contact'>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavLinkBar
