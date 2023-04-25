import Link from 'next/link';

import Button from '../../Button';
import Glass from '../../Glass';
import * as Styled from './Hero.styled';

const IMG_LIST = [
    '/images/rode/rode1.png',
    '/images/activities-hero/activities-hero-2.jpg',
    '/images/activities-hero/activities-hero-3.jpg',
];

const Hero = () => {
    return (
        <Styled.Container>
            <Styled.Content>
                <Styled.LeftContent>
                    <Styled.Titie data-aos="fade-up">
                        Some <br /> highlight activities of
                        <Styled.HighLight> F-Code.</Styled.HighLight>
                    </Styled.Titie>

                    <Styled.SupportingText data-aos="fade-up">
                        Many interesting activites are waiting for you at
                        <Styled.HighLight> F-Code.</Styled.HighLight> Let’s become a member and
                        participate these activities now.
                    </Styled.SupportingText>
                    <Link href="/signup" style={{ textDecoration: 'none' }}>
                        <Button>Sign Up Now</Button>
                    </Link>
                </Styled.LeftContent>

                <Styled.RightContent data-aos="fade-left">
                    <Styled.GlassTop>
                        <Glass length="100px" />
                    </Styled.GlassTop>
                    <Styled.GlassLeft>
                        <Glass length="50px" />
                    </Styled.GlassLeft>
                    <Styled.GlassCenter>
                        <Glass length="135px" />
                    </Styled.GlassCenter>
                    <Styled.GlassRight>
                        <Glass length="150px" />
                    </Styled.GlassRight>
                    <Styled.TopImg src={IMG_LIST[0]} width="200" height="200" />
                    <Styled.LeftImg src={IMG_LIST[1]} width="200" height="200" />
                    <Styled.RightImg src={IMG_LIST[2]} width="200" height="200" />
                </Styled.RightContent>
            </Styled.Content>
        </Styled.Container>
    );
};

Hero.propTypes = {};

export default Hero;
