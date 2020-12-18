import React, { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Container, Logo, Nav } from './styles';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMobileMenu = () => setOpenMenu(!openMenu);

    return (
        <Container>
            <Link to="/">
                <Logo>DevShare</Logo>
            </Link>

            <Nav isMenuOpen={openMenu}>
                <ul>
                    <li>
                        <Link to="/signup">Criar conta</Link>
                    </li>
                    <li className="login">
                        <Link to="/login">Entrar</Link>
                    </li>
                </ul>
            </Nav>

            <div className="mobile-menu" onClick={toggleMobileMenu}>
                {openMenu ? <FaTimes /> : <FaBars />}
            </div>
        </Container>
    );
};

export default Navbar;
