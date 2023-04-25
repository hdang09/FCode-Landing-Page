import styledComponent from 'styled-components';

import { styled } from '@mui/material/styles';
import { Container } from '@mui/system';

export const ContainerStyle = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1100px;
    margin-top: 120px;
`;

export const Background = styledComponent.div`
    background-image: url('/background/background.png');
    overflow-x: hidden;
    width: 100%;
    min-height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
`;
