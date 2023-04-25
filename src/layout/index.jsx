import Footer from '../components/Footer';
import Header from '../components/Header';
import { ContainerStyle, Background } from './style';

import { CssBaseline } from '@mui/material';

const Layout = ({ children }) => {
    return (
        <Background>
            <Header />
            <ContainerStyle maxWidth={false}>
                <CssBaseline />
                {children}
            </ContainerStyle>
            <Footer />
        </Background>
    );
};

export default Layout;
