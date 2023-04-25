import * as Styled from './Telescope.styled';

const IMG_LIST = [
    '/images/telescope/recap.jpg',
    '/images/telescope/poster.jpg',
    '/images/telescope/netcompany.jpg',
];

const Telescope = () => {
    return (
        <Styled.Wrapper>
            <Styled.Container>
                <Styled.Stats>
                    <Styled.LeftImg
                        src={IMG_LIST[0]}
                        width="150"
                        height="150"
                        data-aos="fade-right"
                    />
                    <Styled.TopRightImg
                        src={IMG_LIST[1]}
                        width="150"
                        height="150"
                        data-aos="fade-down"
                    />
                    <Styled.BottomRightImg
                        src={IMG_LIST[2]}
                        width="150"
                        height="150"
                        data-aos="fade-up"
                    />
                </Styled.Stats>

                <div>
                    <Styled.Subheading data-aos="fade-down">Talkshow</Styled.Subheading>
                    <Styled.Heading data-aos="fade-down">Talkshow Telescope</Styled.Heading>
                    <Styled.Description data-aos="fade-up">
                        <Styled.HighLight>F-Code</Styled.HighLight>, established in 2014, is the
                        first academic club of
                        <strong> FPT University</strong> at
                        <strong> Ho Chi Minh City</strong>. With the initial aim of creating a
                        community for Software Engineering major’s students, <strong>F-Code</strong>{' '}
                        allows them to share and improve skills that are neccesary for developers.
                        After 5 years, <strong>F-Code</strong> has offered various activites to
                        students.
                    </Styled.Description>
                </div>
            </Styled.Container>
        </Styled.Wrapper>
    );
};

Telescope.propTypes = {};

export default Telescope;
