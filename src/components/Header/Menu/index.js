import Logo from '../Logo';
import { NavLinkStyle, Button } from '../header.style';
import { StyledMenu, LogoContainer, BtnContainer } from './menu.style';

const Menu = (props) => {
    const { setOpen } = props;
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <StyledMenu open={props.open}>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <BtnContainer>
                <NavLinkStyle onClick={handleClose} href="/">
                    Home
                </NavLinkStyle>
                <NavLinkStyle onClick={handleClose} href="/activities">
                    Activites
                </NavLinkStyle>
                <NavLinkStyle onClick={handleClose} href="/timeline">
                    Timeline
                </NavLinkStyle>
                <NavLinkStyle onClick={handleClose} href="/faq">
                    FAQ
                </NavLinkStyle>
                <Button onClick={handleClose} href="/signUp">
                    Sign Up
                </Button>
            </BtnContainer>
        </StyledMenu>
    );
};

// //{' '}
// <RightNav>
//     // <ul></ul>
//     //{' '}
// </RightNav>
export default Menu;
