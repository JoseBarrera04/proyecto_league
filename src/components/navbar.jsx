import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
    const location = useLocation();
    const { isAuthenticated } = useSelector((state) => state.auth);

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/user" className={location.pathname === '/user' ? 'active' : ''}>
                        Usuario
                    </Link>
                </li>
                <li>
                    <Link to="/news" className={location.pathname === '/news' ? 'active' : ''}>
                        Noticias
                    </Link>
                </li>
                <li>
                    <Link to="/friends" className={location.pathname === '/friends' ? 'active' : ''}>
                        Chat/Lista amigos
                    </Link>
                </li>
                <li>
                    <Link to="/community" className={location.pathname === '/community' ? 'active' : ''}>
                        Comunidad
                    </Link>
                </li>
                <li>
                    <Link to="/settings" className={location.pathname === '/settings' ? 'active' : ''}>
                        Ajustes
                    </Link>
                </li>
                {isAuthenticated ? (
                    <li>
                        <Link to="/logout" className={location.pathname === '/logout' ? 'active' : ''}>
                            Cerrar Sesión
                        </Link>
                    </li>
                ) : (
                    <li>
                        <Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>
                            Iniciar Sesión
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;