import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'components/Container';
import Column from 'components/Container';
import Row from 'components/Container';
import Text from 'components/Text';
import Img from 'components/Img';
import { Badge } from 'reactstrap';
import { RiGitRepositoryCommitsLine } from "react-icons/ri";
import { GiThreeFriends } from "react-icons/gi";
import { FaUserFriends } from "react-icons/fa";
import { useMediaQuery } from 'utils/media-query';
import { isServer } from 'utils/ssr';


export const RenderUsers = ({item}) =>{
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
        <Container
        flexDirection={medium ? "row": "column"}
        shadow="0px 2px 6px 0px #ddd"
        borderRadius="8px"
        margin="8px 0px">
            <Row 
                flexDirection="row"
                justifyContent="flex-start"
                padding="8px 0px 8px 16px">
                <Avatar item={item}/>
                <Column>
                    <HeaderInfo item={item}/>
                    <SecondaryInfo 
                        item={item}
                        medium={medium}
                        large={large}
                    />
                </Column>
            </Row>
            {medium && <Followers item={item}/>}
            {medium && <Following item={item}/>}
        </Container>
    )
}

const Avatar = ({item}) =>(
    <Img src={item.avatarUrl}
        borderRadius="60px"
        width="70px"
        height="70px"
    />
);

const HeaderInfo = ({item})=>(
    <Row
        flexDirection="row"
        justifyContent="flex-start"
    >
        <Text 
            whiteSpace="nowrap"
            fontWeight="bold"
            fontSize="1.2rem"
            margin="0px 8px"
        >
            {item.name || item.login}
        </Text>
        <Badge color="light" pill>
            <Text 
                whiteSpace="nowrap"
                color="#404040"
                fontSize="1rem"
                padding="4px 4px"
            >
                Location:{' '}
                {item.location ?
                item.location 
                : 'Worldwide'}
            </Text>
        </Badge>
        {item.isViewer &&
        <Badge 
            color="primary" 
            pill className="ml-1"
        >
            <Text 
                color="#fff"
                fontSize="1rem"
                padding="4px 4px"
            >
                You
            </Text>
        </Badge>}
    </Row>
);

const Email = ({item}) => (
    <Column
        width="auto"
        padding="0 8px"
        justifyContent="center"
    >
        <Text whiteSpace="nowrap">Email: {item.email ? item.email : 'Private email'}</Text>
    </Column>
)

const Followers = ({item})=>(
    <Column justifyContent="center">
        <Row 
            justifyContent="center"
            flexDirection="row"
        >
            <GiThreeFriends size={20}/>
            <Text 
                whiteSpace="nowrap"
                fontWeight="extra-light"
                padding="0 4px"
            >
                {item.followers ? item.followers : 0}
            </Text>
        </Row>
        <Text>Following</Text>
    </Column>
)

const Following = ({item})=>(
    <Column justifyContent="center">
        <Row 
            justifyContent="center"
            flexDirection="row"
        >
            <FaUserFriends size={20}/>
            <Text 
                fontWeight="extra-light"
                padding="0 4px"
            >
                {item.followers ? item.followers : 0}
            </Text>
        </Row>
        <Text>Followers</Text>
    </Column>
)

const SecondaryInfo = ({item, medium, large})=>(
    <Row
    flexDirection="row"
    width="100%"
    justifyContent="flex-start"
    padding="0 0 0 8px">
        <Row 
        width="auto"
        flexDirection="row"
        justifyContent="flex-start"
        padding="0px 8px 0px 0px">
            <RiGitRepositoryCommitsLine size={18}/>
            <Text whiteSpace="nowrap" padding="0 0 0 4px">{item.repositories}</Text>
        </Row>
        <Text whiteSpace="nowrap" fontSize="1rem">
            {item.company ? item.company : 'Company not found'}
        </Text>
        {medium && <Email item={item}/>}
    </Row>
)