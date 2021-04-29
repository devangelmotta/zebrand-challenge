import * as React from 'react';
import Row from 'components/Container';
import Img from 'components/Img';
import { useMediaQuery } from 'utils/media-query';
import { isServer } from 'utils/ssr';

interface Props {}

export function WelcomeIllustration(props: Props) {
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

  return (
    <Row
      flexDirection="row"
      justifyContent={medium ? 'flex-end': 'center'}>
        <div>
          <div style={{position: 'absolute', top: -40, right: medium ? 25 : 0, width: '100%', maxWidth: '800px'}}>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#08BDBA" d="M40.6,-75.4C48.7,-65.6,48.8,-46.9,53.4,-32.9C58,-18.8,67.1,-9.4,71,2.2C74.8,13.9,73.5,27.8,65.7,36.3C57.9,44.8,43.8,48.1,31.8,52.1C19.7,56.2,9.9,61.1,-3.2,66.6C-16.2,72,-32.4,78.1,-45.1,74.4C-57.8,70.8,-66.9,57.3,-74.6,43.3C-82.3,29.3,-88.4,14.6,-83.1,3.1C-77.7,-8.5,-60.9,-16.9,-53.2,-31C-45.6,-45.1,-47.2,-64.8,-39.9,-75.1C-32.5,-85.4,-16.3,-86.4,0,-86.3C16.2,-86.3,32.4,-85.3,40.6,-75.4Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>
      <Img
        position="relative"
        src="/illustration-welcome.png" 
        width={medium ? '600%': '300%'} height={medium ? '600%': '300%'}
      />
    </Row>
  );

};
