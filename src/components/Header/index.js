import { useRef, useState, useEffect } from 'react';

import Link from 'next/link';

import Burger from './Burger';
import FillGround from './FillGround';
import useScrollListener from './Hook/Hook';
import Logo from './Logo';
import Menu from './Menu';
import {
    NavContainer,
    RightNav,
    NavLinkStyle,
    ButtonHeader,
    StyledHeader,
    Container,
} from './header.style';
import { useOnClickOutside } from './hooks';

const Header = () => {
    let [open, setOpen] = useState(false);
    const [navClassList, setNavClassList] = useState([]);
    const scroll = useScrollListener();

    // update classList of nav on scroll
    useEffect(() => {
        const _classList = [];

        if (scroll.y > 150 && scroll.y - scroll.lastY > 0) _classList.push('nav-bar--hidden');

        setNavClassList(_classList);
    }, [scroll.y, scroll.lastY]);
    const menu = useRef();

    useOnClickOutside(menu, () => setOpen(false));

    return (
        <Container>
            <StyledHeader ref={menu} className={navClassList.join(' ')}>
                <NavContainer>
                    <Logo />

                    <RightNav>
                        <ul>
                            <NavLinkStyle href="/" end>
                                Home
                            </NavLinkStyle>
                            <NavLinkStyle href="/activities">Activites</NavLinkStyle>
                            <NavLinkStyle href="/timeline">Timeline</NavLinkStyle>
                            <NavLinkStyle href="/faq">FAQ</NavLinkStyle>
                            <ButtonHeader href="/signup">Sign Up</ButtonHeader>
                        </ul>
                    </RightNav>
                </NavContainer>
                <Burger open={open} setOpen={setOpen}></Burger>
                <Menu open={open} setOpen={setOpen}></Menu>
            </StyledHeader>
            <FillGround open={open} setOpen={setOpen}></FillGround>
        </Container>
    );
};

export default Header;
