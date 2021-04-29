import * as React from 'react';
import Container from 'components/Container';
import Row from 'components/Container';
import Text from 'components/Text';
import Divider from 'components/Divider';
import { TiArrowMinimiseOutline, TiArrowMaximiseOutline } from "react-icons/ti";
import { scopeSearchType } from 'pages/dashboard/slice/types';
import { useSelector } from 'react-redux';
import { selectRepositories, selectUsers, scopeSearchState } from '../../slice/selectors';
import { parseRepository, parseUser } from './items-utils';
import { isEmpty } from 'lodash';
import { motion } from "framer-motion";
/**
 * Custom components
 */
import { RenderRepository } from './render-repository';
import { RenderUsers } from './render-user';

/** Main function */
export const ListItems = () => { 
    const repositories:any = useSelector(selectRepositories);
    const users = useSelector(selectUsers);
    const scopeSearch = useSelector(scopeSearchState);
    const [openRepositories, handleOpenRepositories] = React.useState(true);
    const [openUsers, handleOpenUsers] = React.useState(true);

    const isRenderUsers = scopeSearch === scopeSearchType.USER 
        || scopeSearch === scopeSearchType.ALL;
    const isRenderRepositories = scopeSearch === scopeSearchType.REPOSITORIES 
        || scopeSearch === scopeSearchType.ALL

    return(
        <Container margin="32px 0 0 0">
            {isRenderUsers &&
            <Container width="95%">
                <RenderHeaderUserScope 
                    handleOpenUsers={handleOpenUsers} 
                    openUsers={openUsers} 
                />
                <AnimatedRenderListUsers 
                    users={users} openUsers={openUsers}
                />
            </Container> }

            {isRenderRepositories &&
            <Container width="95%" margin="16px 0 0 0">
                <RenderHeaderRepoScope 
                    handleOpenRepositories={handleOpenRepositories} 
                    openRepositories={openRepositories}
                />
                <AnimatedRenderListRepos 
                    repositories={repositories} 
                    openRepositories={openRepositories}
                />
            </Container>}
        </Container>
    )
}

const ArrowByOpenStatus = ({state}) => (
    state ? 
    <TiArrowMinimiseOutline size={30} className="mx-2"/>
    : <TiArrowMaximiseOutline size={30} className="mx-2"/>
)
    
const RenderHeaderUserScope = ({handleOpenUsers, openUsers}) =>(
    <Row 
        flexDirection="row" 
        justifyContent="flex-start"
        onClick={()=> handleOpenUsers(!openUsers)}
    >
        <Text fontWeight="regular" fontSize="1.5rem">Users</Text>
        <ArrowByOpenStatus state={openUsers}/>
        <Divider width="100%" margin="0 16px 0 0"/>
    </Row>
)

const RenderHeaderRepoScope = ({handleOpenRepositories, openRepositories}) =>(
    <Row 
        flexDirection="row" 
        justifyContent="flex-start"
        onClick={()=> handleOpenRepositories(!openRepositories)}
    >
        <Text fontWeight="regular" fontSize="1.5rem">Repositories</Text>
        <ArrowByOpenStatus state={openRepositories}/>
        <Divider width="100%" margin="0 16px 0 0"/>
    </Row>
)

const AnimatedRenderListUsers = ({users, openUsers}) =>{
    var showListUsers = !isEmpty(users) && openUsers;
    return(
        showListUsers && users.map((userItem)=>{
        let _users = parseUser(userItem);
        return(
            <motion.div
                animate={showListUsers ? "open" : "closed"}
                variants={variantsList}
                initial={true}
                style={{width: '100%'}}
                > <RenderUsers item={_users}/>
            </motion.div>)
        })
    )
}

const AnimatedRenderListRepos = ({repositories, openRepositories}) =>{
    var showListRepos = !isEmpty(repositories) && openRepositories;

    return(
        showListRepos && repositories.map((repoItem)=>{
            let repo = parseRepository(repoItem);
            return(
                <motion.div
                    animate={showListRepos ? "open" : "closed"}
                    variants={variantsList}
                    initial={true}
                    style={{width: '100%'}}
                > <RenderRepository item={repo}/>
                </motion.div>
            )
        })
            
)}

const variantsList = {
    open: { 
        opacity: 1,
         y: -20,
         x: 0,
         transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
          }},
    closed: { 
        opacity: 0, 
        y: "100%",
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
          } },
  }