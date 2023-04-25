import Hightlight from '../src/components/Highlight';
import AboutUs from '../src/components/HomePage/AboutUs';
import Hero from '../src/components/HomePage/Hero';
import Spirit from '../src/components/HomePage/Spirit';
import Timeline from '../src/components/HomePage/Timeline';

function Home() {
    return (
        <>
            <Hero />
            <AboutUs />
            <Hightlight />
            <Spirit />
            <Timeline />
        </>
    );
}
export default Home;
