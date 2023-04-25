import { useState } from 'react';

import { useRouter } from 'next/router';

import ProgressBar from '../src/components/SignupPage/progress';
import {
    Container,
    Hero,
    Description,
    Button,
    Google,
    Img,
    GoogleContainer,
    ButtonLogOut,
    ButtonRegister,
} from '../src/components/SignupPage/styled';

import LogoutIcon from '@mui/icons-material/Logout';
import SvgIcon from '@mui/material/SvgIcon';

function SingUp() {
    const [step, setStep] = useState({ step: 0 });
    const router = useRouter();
    const { query } = router;
    // let token = localStorage.getItem('token') || query.token || '';
    let token = query.token || '';

    const progress = [
        {
            key: 'Sign Up',
            title: 'Sign Up',
            description: '',
            step: 1,
            isDone: true,
        },
        {
            key: 'Register Success',
            title: 'Register Success',
            description: '',
            step: 2,
            isDone: false,
        },
        {
            key: 'Confirm',
            title: 'Confirm',
            description: '',
            step: 3,
            isDone: false,
        },
    ];

    return (
        <Container>
            <Hero>
                Sign up to join <span>F-Code.</span>
            </Hero>
            <Description>
                To become a member of <span>F-Code,</span> you need to sign up using FPT email.
            </Description>
            <ProgressBar progress={step.step} data={progress} />
            {!token ? (
                <GoogleContainer>
                    <Button type="button">
                        <Img src="/logo/google.png" alt="Google" width="100" height="100" />
                        <Google>Sign up with Google</Google>
                    </Button>
                </GoogleContainer>
            ) : (
                <div style={{ marginTop: '40px' }}>
                    <ButtonRegister style={{ width: '200px', margin: 'auto' }} to="/*">
                        Register
                    </ButtonRegister>
                    <GoogleContainer>
                        <ButtonLogOut
                            type="button"
                            onClick={() => {
                                localStorage.removeItem('token');
                                setStep(0);
                                router.push('/signup');
                            }}
                        >
                            <SvgIcon sx={{ marginRight: '10px' }} component={LogoutIcon}></SvgIcon>
                            Log Out
                        </ButtonLogOut>
                    </GoogleContainer>
                </div>
            )}
        </Container>
    );
}

export default SingUp;
