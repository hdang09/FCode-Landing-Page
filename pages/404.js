import { down } from 'styled-breakpoints';
import styled from 'styled-components';

const CommingSoon = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <Heading>Ending Registration</Heading>
            <p style={{ color: '#6B7280', marginBottom: '120px' }}>Thanks for Joining</p>
        </div>
    );
};

export default CommingSoon;

const Heading = styled.h1`
    margin-top: 120px;
    font-size: 40px;
    margin-bottom: 6px;

    ${down('sm')} {
        font-size: 40px;
    }
`;
