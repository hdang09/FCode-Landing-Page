import Accordion from '../src/components/FaqPage/Accordion';
import { Container, Hero } from '../src/components/FaqPage/styled';

// import More from '../src/components/FaqPage/More';

function Qna() {
    return (
        <Container>
            <Hero>Frequently asked questions</Hero>
            <Accordion />
        </Container>
    );
    // <More />
}

export default Qna;
