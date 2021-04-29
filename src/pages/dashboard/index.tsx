import * as React from 'react';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from 'GraphQl/setup.client';
import cookies from 'next-cookies';
import Container from 'components/Container';
import Row from 'components/Container';
import Navbar from './sections/Navbar';
import { ListItems } from './sections/ListSearchResults';
import { useMediaQuery } from 'utils/media-query';
import { isServer } from 'utils/ssr';
import Divider from 'components/Divider';
const Dashboard = ({github_token}) => {
    const [medium, updateMedium] = React.useState(false);
    const [large, updateLarge] = React.useState(false);
    const apolloClient = useApollo(github_token)
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
        <ApolloProvider client={apolloClient}>
            <Container 
            minHeight={'100%'}
            justifyContent="center"
            flexDirection="row">
                <Divider height="100%" color="#000" width="2px"/>
                <Container maxWidth={medium ? '1600px' : 'none'} >
                    <Row flexDirection="row">
                        <Navbar/>
                    </Row>
                    <ListItems/>
                </Container>
                <Divider height="100%"/>
            </Container>
        </ApolloProvider>
    )
}

Dashboard.getInitialProps =  (ctx) => {
    const { github_token } = cookies(ctx);
    return { github_token }
  }

export default Dashboard;