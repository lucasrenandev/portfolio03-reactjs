import styled from "styled-components";

export const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 1000;
    background-color: var(--bg-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 22px 16%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);

    @media (max-width: 1206px) {
        padding: 14px 2%;
    }
`
export const Logo = styled.a`
    font-size: 2rem;
    font-weight: 600;
    color: var(--main-color);
`
export const NavBar = styled.nav`
    @media (max-width: 900px) {
        position: absolute;
        top: -500px;
        left: 0;
        right: 0;
        width: 100%;
        background-color: #fff;
        transition: top 0.45s ease;

        &.active {
            top: 100%;
        }
    }
`
export const NavList = styled.ul`
    display: flex;
    align-items: center;

    @media (max-width: 900px) {
        flex-direction: column;
        justify-content: center;
    }
`
export const List = styled.li`
    margin: 0 1rem;
    padding: 0 10px;

    a {
        color: var(--text-color);
        font-size: 16px;
        font-weight: 500;
        transition: color 0.4s ease;

        :hover {
            color: var(--main-color);
        }

        @media (max-width: 900px) {
            display: block;
            padding: 10px;
        }
    }

    @media (max-width: 900px) {
        margin: 1rem 0;
        padding: 0;
    }
`
export const MenuIcon = styled.i`
    font-size: 36px;
    cursor: pointer;
    z-index: 1001;
    display: none;

    @media (max-width: 900px) {
        display: inline-flex;
        align-items: center;
    }
`