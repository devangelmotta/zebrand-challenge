import * as React from 'react';
import Link from 'components/Link';
import Button from 'components/Button';
import Text from 'components/Text';
import { SiGithub } from "react-icons/si";
import { useMediaQuery } from 'utils/media-query';
import { isServer } from 'utils/ssr';

const URL_BASE = process.env.NEXT_PUBLIC_URL_GITHUB_CODE;
const CLIENT_ID = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
const AuthScopes = 'user repos notifications';
const URL_AUTH_GITHUB = `${URL_BASE}?client_id=${CLIENT_ID}&scope=${AuthScopes}`;

const requestCodeForLogin = () => {
    if(isServer) return;
    window.location.replace(URL_AUTH_GITHUB);
}
export const GoButton = () => {
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
        <Button 
            onClick={()=> requestCodeForLogin()}
            borderRadius="10px"
            width="98%"
            height="100px"
            margin={`${medium ? '100px':'60px'} 0px 0px 0px`}
            justifyContent="center"
            border="none"
            outline 
            color="white">
            <Text
                fontSize={medium ? '3rem': '2rem'}
                fontWeight="medium"
                color={'#fff'}>
                Login with <SiGithub size={30} color={'#fff'}/>
            </Text>
        </Button>
)}

