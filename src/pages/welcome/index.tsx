import styled from 'styled-components';
import Container from 'components/Container';
import { Title } from './sections/title';
import { WelcomeIllustration } from './sections/WelcomeIllustration';
import { GoButton } from './sections/GoButton';

export const CustomContainer = styled(Container)`
background: #009FFF;  
background: -webkit-linear-gradient(to top, #ec2F4B, #009FFF); 
background: linear-gradient(to top, #ec2F4B, #009FFF); 
height: 100vh;
justify-content: space-between
`;

const Welcome = ()=>{
    return(
        <CustomContainer
            justifyContent="space-between">
            <Container margin="80px 0px 0px 0px">
                <WelcomeIllustration />
            </Container>
            <Title />
            <GoButton/>
        </CustomContainer>
    )
}

export default Welcome;