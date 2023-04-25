import { Form } from 'formik';
import Image from 'next/image';
import { down, up, between } from 'styled-breakpoints';
import styled from 'styled-components';

// import px2vw from '../../utils/px2vw';

export const Section = styled.section`
    background-color: transparent;
    width: 100%;
    min-height: 100vh;
    @media (min-width: 1200px) {
        max-width: 1260px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FormContainer = styled(Form)`
    width: 450px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    ${down('md')} {
        max-width: 450px;
    }
    ${down('sm')} {
        max-width: 300px;
    }
`;

export const ButtonWrapper = styled.div`
    width: 100%;

    ${down('sm')} {
        margin: auto;

        button {
            height: 45px;
            width: inherit;
        }
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 64px 0px;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${up('xl')} {
        width: 1100px;
    }
`;
export const ContentRegister = styled(Content)`
    align-items: flex-start;
`;

export const GlassTop = styled.div`
    z-index: 1;
    position: absolute;
    left: 134px;
    top: 0px;
`;

export const GlassLeft = styled.div`
    z-index: 1;
    position: absolute;
    top: 395px;
    left: 0;
`;

export const GlassRight = styled.div`
    z-index: 3;
    position: absolute;
    right: 0;
    bottom: 16px;
    width: 150px;
    height: 150px;
`;

export const GlassCenter = styled.div`
    z-index: 1;
    position: absolute;
    left: 141px;
    top: 213px;
`;

export const Img = styled.div`
    position: absolute;
    border-radius: 1000px;
    background-image: url(${(props) => props.img});
    background-position: center;
    background-size: cover;
`;

export const TopImg = styled(Image)`
    width: 304px;
    height: 304px;
    left: 141px;
    top: 17px;
`;

export const LeftImg = styled(Image)`
    width: 192px;
    height: 192px;
    left: 31px;
    bottom: 21px;
`;

export const RightImg = styled(Image)`
    width: 304px;
    height: 304px;
    bottom: 0;
    right: 35px;
    z-index: 2;
`;

export const RightContent = styled.div`
    display: flex;
    position: relative;
    min-width: 595px;
    height: 491px;
    box-sizing: border-box;

    ${down('lg')} {
        display: none;
    }

    ${between('lg', 'xl')} {
        min-width: 525px;
    }
`;
