import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'components/Container';
import Row from 'components/Container';
import Text from 'components/Text';
import { Badge } from 'reactstrap';
import { GoRepoForked } from "react-icons/go";
import { RiGitRepositoryCommitsLine } from "react-icons/ri";
import { VscStarFull } from "react-icons/vsc";
import { FaUserFriends } from "react-icons/fa";
import { useMediaQuery } from 'utils/media-query';
import { isServer } from 'utils/ssr';

export const RenderRepository = ({item}) => {
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
        margin="24px 0px"
    >
        <Title item={item} />
        <RepoInfo item={item}/>
        {medium &&
            <RenderStars item={item}/>
        }
        <RepoDescription item={item}/>
    </Container>
)}

const Title = ({item}) =>(
    <Row 
        flexDirection="row"
        justifyContent="flex-start"
        padding="8px 0px 0px 16px">
        <RiGitRepositoryCommitsLine size={25}
    />
        <Text 
            fontWeight="bold"
            fontSize="1.2rem"
            color="#00203FFF"
            margin="0px 8px"
            >{item.name}
        </Text>
        <Badge color="light" pill>
            <Text 
            color="#404040"
            fontSize="1rem"
            padding="4px 4px">
                {item.primaryLanguage ?
                item.primaryLanguage 
                : 'Unknow language'}
            </Text>
        </Badge>
    </Row>
)

const RepoInfo = ({item}) => (
    <Row
        padding="8px 0px 0px 16px"
        flexDirection="row"
        justifyContent="flex-start"
    >
        <GoRepoForked size={20}/>
        <Text padding="0px 0px 0px 2px">{item.forks}</Text>
        <Text margin="0 0 0 8px">
        {item.license ? 
            <Text> 
                License
                <Text 
                fontWeight="regular"
                margin="0 0 0 8px">{item.license}</Text>
            </Text> 
            : 'No public license'} 
        </Text> 
    </Row>
)

const RenderStars = ({item}) => (
    <Row
        padding="8px 0px 0px 16px"
        flexDirection="row"
        justifyContent="flex-start"
    >
        <VscStarFull size={20}/>
        <Text padding="0px 0px 0px 2px">
            {item.commitComments?.length}
        </Text>
    </Row>
)

const RenderComments = ({item}) => (
    <Row
        padding="8px 0px 0px 16px"
        flexDirection="row"
        justifyContent="flex-start"
    >
        <FaUserFriends size={20}/>
        <Text padding="0px 0px 0px 2px">
            {item.starts}
        </Text>
    </Row>
)

const RepoDescription = ({item}) => (
    <Row 
        margin="16px 0 0 0"
        flexDirection="row"
        justifyContent="flex-start"
    >
        <Text
            textAlign="left"
            padding="0 16px 16px"
        >
            {item.description}
        </Text>
    </Row>
)