import * as React from 'react';
import styled from 'styled-components';
import { scopeSearchType} from 'pages/dashboard/slice/types';
import Container from 'components/Container';
import Row from 'components/Container';
import Column from 'components/Container';
import { Search } from './search';
import LinkUser from 'next/link';
import { FaUserCircle } from "react-icons/fa";
import { BadgedFilters, ScopeSelected } from './render-filters-search';

const Nav = () => {
  const initialSelectState = scopeSearchType.ALL;
  const [selected, handleUpdateSelected] = React.useState(initialSelectState);
  const [isSelecting, handleUpdateSelecting] = React.useState(false);

  return(
    <Column margin="0 20px">
      <Row flexDirection="row" height="40px" margin="16px 0 0 0">
            <LinkUser
                href="/user">
                <Container 
                  width="auto"
                  padding="0px 20px 0px 20px">
                  <FaUserCircle 
                    size='30px'/>
                </Container>
            </LinkUser>
            <Search/>
        </Row>
        <Row 
        flexDirection="row"
        justifyContent="flex-end">
            {isSelecting ? 
            <BadgedFilters
              stateSelected={selected}
              stateSelecting={isSelecting}
              handleUpdateSelected={handleUpdateSelected}
              updateStateSelecting={handleUpdateSelecting}
            />
            : <ScopeSelected
                stateSelected={selected}
                stateSelecting={isSelecting}
                updateStateSelecting={handleUpdateSelecting}
              />}
        </Row>
    </Column>
  )};

export default Nav;

const SearchScope = styled(Row)`
  overflow-x: hidden;
  overflow-y: hidden;
`;