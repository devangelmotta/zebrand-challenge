import * as React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useGithubSlice } from 'pages/dashboard/slice';
import { scopeSearchType} from 'pages/dashboard/slice/types';
import { IoCloseOutline } from "react-icons/io5";
import { Badge } from 'reactstrap';
import Row from 'components/Container';
import Text from 'components/Text';
import { Tween } from 'react-gsap';

export function getStringByTypeScope(key){
    switch (key) {
        case scopeSearchType.ALL:
            return "All"
        case scopeSearchType.REPOSITORIES:
            return "Repositories"
        case scopeSearchType.USER:
            return "Users"
    }
}

export const ScopeSelected = ({updateStateSelecting, stateSelecting, stateSelected}) => (
    <Tween from={{ width: '0%' }} to={{width: '100%'}} duration={8} ease="back.out(1.7)" >
        <Row
        flexDirection="row"
        justifyContent="flex-end"
        onClick={()=> updateStateSelecting(!stateSelecting)}
        margin="8px 50px 0 0">
        <Badge 
            className="mr-1"
            color="info" pill>
            <Text
            color="#fff"
            padding="8px 16px"
            fontWeight="regular"
            fontSize="1.2rem">
                {getStringByTypeScope(stateSelected)}
            </Text>
            <IoCloseOutline size={20}/>
            </Badge>
        </Row>
      </Tween>  
  )

  export const BadgedFilters = ({
      stateSelected, 
      stateSelecting,
      handleUpdateSelected,
      updateStateSelecting
    })=>{
    const { actions } = useGithubSlice();
    const dispatch = useDispatch();
    const initFunctionsSelectScope = (type)=>{
        handleUpdateSelected(type);
        updateStateSelecting(!stateSelecting);
        dispatch(actions.scopeSearchAction(type));
    }

    return(
    <Tween from={{ width: '0%' }} to={{width: '100%'}} duration={3} ease="back.out(1.7)">  
        <SearchScope 
        flexDirection="row" 
        justifyContent="flex-end"
        margin="8px 50px 0 0">
        <Badge 
        className="mr-1"
        onClick={()=>initFunctionsSelectScope(
            scopeSearchType.USER
        )}
        color="light" pill>
            <Text
            color="#000"
            padding="8px 16px"
            fontWeight="regular"
            fontSize="1.2rem">
                {getStringByTypeScope(
                    scopeSearchType.USER
                )}
            </Text>
        </Badge>
        <Badge 
        className="mr-1"
        color="light" pill
        onClick={()=>initFunctionsSelectScope(
            scopeSearchType.REPOSITORIES
        )}>
            <Text
            color="#000"
            padding="8px 16px"
            fontWeight="regular"
            fontSize="1.2rem">
                {getStringByTypeScope(
                    scopeSearchType.REPOSITORIES
                )}
            </Text>
        </Badge>
        <Badge 
        className="mr-1"
        color="light" pill
        onClick={()=>initFunctionsSelectScope(
            scopeSearchType.ALL
        )}>
            <Text
            color="#000"
            padding="8px 16px"
            fontWeight="regular"
            fontSize="1.2rem">
                {getStringByTypeScope(
                    scopeSearchType.ALL
                )}
            </Text>
        </Badge>
        </SearchScope>
    </Tween>
  )}
  
  const SearchScope = styled(Row)`
    overflow-x: hidden;
    overflow-y: hidden;
  `;