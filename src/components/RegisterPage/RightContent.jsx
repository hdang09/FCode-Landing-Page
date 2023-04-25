import Glass from '../Glass';
import * as Styled from './style';

const IMG_LIST = [
    '/FormRegistration/formRegis3.jpg',
    '/FormRegistration/formRegis2.jpg',
    '/FormRegistration/formRegis1.jpg',
];

const RightContent = () => {
    return (
        <Styled.RightContent data-aos="fade-left">
            <Styled.GlassTop>
                <Glass length="100px" />
            </Styled.GlassTop>
            <Styled.GlassLeft style={{ left: '50px' }}>
                <Glass length="60px" />
            </Styled.GlassLeft>
            <Styled.TopImg style={{ width: '320px', height: '320px' }} img={IMG_LIST[2]} />
            <Styled.LeftImg
                style={{ width: '230px', height: '230px', left: '0px' }}
                img={IMG_LIST[1]}
            />
            <Styled.RightImg style={{ width: '270px', height: '270px' }} img={IMG_LIST[0]} />
        </Styled.RightContent>

        // <Styled.GlassRight>
        //     <Glass length="150px" />
        //     // </Styled.GlassRight>
        //     <Styled.GlassCenter>
        //     <Glass length="135px" />
        // </Styled.GlassCenter>
    );
};

export default RightContent;
