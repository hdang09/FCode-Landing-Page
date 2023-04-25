import FormRegister from '../src/components/RegisterPage/Form';
import RightContent from '../src/components/RegisterPage/RightContent';
import * as Styled from '../src/components/RegisterPage/style';

const RegistrationForm = () => {
    return (
        <Styled.Container>
            <Styled.ContentRegister>
                <FormRegister />
                <RightContent />
            </Styled.ContentRegister>
        </Styled.Container>
    );
};

export default RegistrationForm;
