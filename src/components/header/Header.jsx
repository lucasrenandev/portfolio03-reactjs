import { Header, Logo, NavBar, NavList, List, MenuIcon } from "./styled";
import { HashLink as Link } from "react-router-hash-link";
import { BiMenu } from "react-icons/bi"
import { IoClose } from "react-icons/io5"
import { useEffect, useRef, useState } from "react";

export default function header() {
    const [menuIcon, setMenuIcon] = useState(<BiMenu/>)
    const navRef = useRef(null)

    useEffect(() => {
        window.addEventListener("scroll", function() {
            navRef.current.classList.remove("active")
            setMenuIcon(<BiMenu/>)
        })
    }, [])

    function menuToggle() {
        if(navRef.current.classList.contains("active")) {
            navRef.current.classList.remove("active")
            setMenuIcon(<BiMenu/>)
        }
        else {
            navRef.current.classList.add("active")
            setMenuIcon(<IoClose/>)
        }
    }

    return(
        <Header>
            <Logo href="/">
                Elmiz
            </Logo>

            <NavBar ref={navRef}>
                <NavList>
                    <List>
                        <Link smooth to={'#home'}>Home</Link>
                    </List>
                    <List>
                        <Link smooth to={'#about'}>About</Link>
                    </List>
                    <List>
                        <Link smooth to={'#services'}>Services</Link>
                    </List>
                    <List>
                        <Link smooth to={'#portfolio'}>Portfolio</Link>
                    </List>
                    <List>
                        <Link smooth to={'#contact'}>Contact</Link>
                    </List>
                </NavList>
            </NavBar>

            <MenuIcon onClick={menuToggle}>
                {menuIcon}
            </MenuIcon>
        </Header>
    )
}