import Link from 'next/link';

import logo from '../../assets/logo/logo.svg';
import { Nav, LeftNav, RightNav, Button } from './style';

const Navbar = () => {
    return (
        <Nav>
            <LeftNav>
                <img src={logo} alt="" />
                <h2>F-Code</h2>
            </LeftNav>
            <RightNav>
                <ul>
                    <Link href="/">Home</Link>
                    <Link href="/activities">Activites</Link>
                    <Link href="/timeline">Timeline</Link>
                    <Link href="/faq">FAQ</Link>
                    <Button>
                        <Link href="/signup">Sign Up</Link>
                    </Button>
                </ul>
            </RightNav>
        </Nav>
    );
};

export default Navbar;
