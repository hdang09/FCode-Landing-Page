import Hero from '../src/components/ActivitiesPage/Hero';
import RODE from '../src/components/ActivitiesPage/RODE';
import Teambuilding from '../src/components/ActivitiesPage/Teambuilding';
import Telescope from '../src/components/ActivitiesPage/Telescope';
import Hightlight from '../src/components/Highlight';

const Activities = () => {
    return (
        <>
            <Hero />
            <Telescope />
            <Hightlight anniversary />
            <Teambuilding />
            <RODE />
            <h1 style={{ textAlign: 'center' }}>And more activities are waiting for you!!!</h1>
        </>
    );
};

export default Activities;
