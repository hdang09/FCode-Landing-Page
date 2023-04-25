import Image from 'next/image';
import Link from 'next/link';

import { StyledLogo, LText } from './logo.style';

const Logo = () => {
    return (
        <Link href="/">
            <StyledLogo>
                <Image src="/images/logo.svg" width={70} height={70} />
                <LText>F-Code</LText>
            </StyledLogo>
        </Link>
    );
};

export default Logo;
