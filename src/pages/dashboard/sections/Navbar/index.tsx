import * as React from 'react';
import styled from 'styled-components';
import Container from 'components/Container';
import Row from 'components/Container';
import LinkUser from 'next/link';
import { Form, Input } from 'reactstrap';
import { RiSearchLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";

const Nav = () => (
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
        <FormWrapper>
            <SearchInput/>
            <RiSearchLine size='40px'/>
        </FormWrapper>
    </Row>
  );

const SearchInput = styled(Input)`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 1.5rem;
  color: ${p => p.theme.primary};
`;

const FormWrapper = styled(Form)`
  display: flex;
  align-items: center;
  align-content-center;
  padding-right: 16px;
  width: 100%;
  height: 40px;
`;

export default Nav;