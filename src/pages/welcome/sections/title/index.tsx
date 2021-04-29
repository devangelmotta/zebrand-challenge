import * as React from 'react';
import Text from 'components/Text';
import { useMediaQuery } from 'utils/media-query';
import { isServer } from 'utils/ssr';

export const Title = () => {
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
    return(
        <Text
            margin= {`${medium ? '200px': '50px'} 20px 0 20px`}
            fontSize={`${medium ? '4rem': '2rem'}`}
            fontWeight="medium"
            color={'#ddd'}
        >Everything you need from GitHub at your fingertips
        </Text>
    )
}
