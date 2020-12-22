import React, { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { useAuthContext } from '../../Context/AuthContext';
import Logo from '../Logo';

import { Container, Nav } from './styles';

const Navbar = ({ history }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const { user, logout } = useAuthContext();

    const toggleMobileMenu = () => setOpenMenu(!openMenu);

    const handleLogOut = () => {
        logout();
        history.push('/login');
    };

    return (
        <Container>
            <Logo />

            <Nav isMenuOpen={openMenu} className={user && 'logged'}>
                <ul>
                    {user ? (
                        <>
                            <li className="user">Olá, {user.username}</li>
                            <li className="logout" onClick={handleLogOut}>
                                Sair
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to="/signup">Criar conta</Link>
                            </li>
                            <li className="login">
                                <Link to="/login">Entrar</Link>
                            </li>
                        </>
                    )}
                </ul>
            </Nav>

            <div className="mobile-menu" onClick={toggleMobileMenu}>
                {openMenu ? <FaTimes /> : <FaBars />}
            </div>
        </Container>
    );
};

export default Navbar;
