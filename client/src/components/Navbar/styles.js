import styled from 'styled-components';

export const Container = styled.header`
    height: 7rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3rem;
    position: sticky;
    top: 0;
    right: 0;

    box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.1);
    background: var(--white-color);

    @media screen and (min-width: 760px) {
        padding: 0 3.8rem;

        .mobile-menu {
            display: none;
        }
    }
`;

export const Logo = styled.h1`
    font-size: var(--bigger-size);
    color: var(--primary-color);
`;

export const Nav = styled.div`
    position: fixed;
    top: 7rem;
    right: ${({ isMenuOpen }) => (isMenuOpen ? '0rem' : '-999px')};
    width: 100%;
    height: 100%;

    background: var(--white-color);
    transition: all 0.3s ease-in-out;

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 3.8rem 0;

        li {
            margin: 1.6rem 0;
            font-size: var(--normal-size);
            transition: color 0.2s ease-in;
            cursor: pointer;

            a {
                color: var(--black-color);

                &:hover {
                    color: var(--primary-alt-color);
                }
            }
        }

        .login {
            padding: 0.8rem 1.6rem;
            border-radius: 0.6rem;
            background: var(--primary-color);
            transition: all 0.2s ease-in;

            a {
                color: var(--white-color);
            }

            &:hover {
                background: var(--primary-alt-color);

                a {
                    color: var(--white-color);
                }
            }
        }
    }

    @media screen and (min-width: 760px) {
        position: unset;
        max-width: 22rem;
        align-items: center;
        justify-content: center;
        height: fit-content;

        ul {
            flex-direction: row;
            margin: 0;

            li {
                margin: 0 1.2rem;
            }
        }
    }
`;
