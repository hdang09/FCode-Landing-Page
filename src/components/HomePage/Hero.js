import Image from 'next/image';
import Link from 'next/link';
import Typed from 'react-typed';

import {
    Container,
    Highlight,
    LeftHero,
    ButtonContainer,
    Button,
    V2Button,
    RightHero,
} from './styled';

function Hero() {
    return (
        <Container data-aos="fade-down">
            <LeftHero>
                <h1>
                    Code the <br />
                    <Typed
                        strings={['future', 'dream', 'journey']}
                        typeSpeed={200}
                        backSpeed={100}
                        loop={true}
                    />{' '}
                    <br />
                    with <span>F-Code.</span>
                </h1>
                <p>
                    <Highlight>F-Code</Highlight> is a club, a community, a family where all members
                    share the same passion for coding. What are you waiting for? Join us now.
                </p>
                <ButtonContainer>
                    <Button>
                        <Link href="/signup">Sign Up Now</Link>
                    </Button>
                    <V2Button>
                        <Link href="/timeline">Timeline</Link>
                    </V2Button>
                </ButtonContainer>
            </LeftHero>
            <RightHero suppressHydrationWarning>
                <Image src="/images/computer.svg" width="300" height="300" alt="Computer" />
            </RightHero>
        </Container>
    );
}

export default Hero;
