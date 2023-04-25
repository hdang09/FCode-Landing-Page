import { VericalContainer } from '../HomePage/styled';
import Slide from './Slide';

import 'react-multi-carousel/lib/styles.css';

function Highlight({ anniversary }) {
    return (
        <VericalContainer>
            <Slide anniversary={anniversary} />
        </VericalContainer>
    );
}

export default Highlight;
