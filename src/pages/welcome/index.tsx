import * as React from 'react';
import styled from 'styled-components';
import Container from 'components/Container';
import { Title } from './sections/title';
import { WelcomeIllustration } from './sections/WelcomeIllustration';
import { GoButton } from './sections/GoButton';
import { useMediaQuery } from 'utils/media-query';
import { isServer } from 'utils/ssr';

const Welcome = ()=>{
  const [medium, updateMedium] = React.useState(false);
  const [large, updateLarge] = React.useState(false);
  function updateScreenSizes(){
    updateMedium(
        useMediaQuery("small")
    );
    updateLarge(
        useMediaQuery("medium")
    );
  }
  React.useEffect(()=>{
    if(!isServer) {
        updateScreenSizes()
            window.addEventListener("resize", () => {
                updateScreenSizes()
        });
    }
  })

  const CustomContainer = styled(Container)`
    background: ${medium ? '#0f0c29': '#009FFF'};  
    background: ${medium ? 
        '-webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29)' :
        '-webkit-linear-gradient(to top, #ec2F4B, #009FFF)'} ;  /* Chrome 10-25, Safari 5.1-6 */
    background: ${medium ? 
        'linear-gradient(to right, #24243e, #302b63, #0f0c29)' 
        : 'linear-gradient(to top, #ec2F4B, #009FFF)'} ; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    height: 100vh;
    overflow: hidden;
    justify-content: space-between
    `;
    return(
        <CustomContainer
            flexDirection={medium ? "row-reverse" : "column"}
            justifyContent="space-between"
        >
            <Container 
                justifyContent="center"
                height="100%"
                margin={medium ? "0px" : "80px 0px 0px 0px"}>
                <WelcomeIllustration />
            </Container>
            <Container 
                height="100%"
                justifyContent="flex-start">
                <Title />
                <GoButton/> 
            </Container>
              
        </CustomContainer>
    )
}

export default Welcome;