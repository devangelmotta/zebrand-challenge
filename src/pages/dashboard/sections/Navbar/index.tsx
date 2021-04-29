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
import { UserInfo } from '../CurrentUser';

const Nav = () => {
  const initialSelectState = scopeSearchType.ALL;
  const [selected, handleUpdateSelected] = React.useState(initialSelectState);
  const [isSelecting, handleUpdateSelecting] = React.useState(false);

  return(
    <Column margin="0 20px">
      <Row flexDirection="row" height="40px" margin="32px 0 0 0">
            <UserInfo/>
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
