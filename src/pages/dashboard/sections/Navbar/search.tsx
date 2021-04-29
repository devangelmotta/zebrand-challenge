import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useGithubSlice } from 'pages/dashboard/slice';
import Container from 'components/Container';
import { Form, Input } from 'reactstrap';
import { RiSearchLine } from "react-icons/ri";
import { useQuery } from '@apollo/client';
import { searchRepositories, searchUsers } from 'GraphQl/queries';
import { motion } from "framer-motion";

export const Search = () => {
    const [textQuery, handleTextSearch] = React.useState('');
    const [animated, handleStartAnimation] = React.useState(false);

    const { actions } = useGithubSlice();
    const dispatch = useDispatch();
  
    const queryRepositories = useQuery(
      searchRepositories,
      {variables: {queryString: textQuery}}
    )
    const queryUsers = useQuery(
      searchUsers,
      {variables: {queryString: textQuery}}
    )

    React.useEffect(()=> {
        let { error, data } = queryRepositories;
        let repos = data ? data.search.edges : [];
        dispatch(actions.listRepositories(repos));
    }, [textQuery])

    React.useEffect(()=> {
      let { error, data } = queryUsers;
      let users = data ? data.search.edges : [];
      dispatch(actions.listUsers(users));
  }, [textQuery])

    return(
      <Container>
        <FormWrapper>
            <motion.div
            animate={animated ? "open" : "closed"}
            variants={variantsList}
            initial={true}
            style={{width: '100%'}}>
              <SearchInput
                placeholder="Search users and repositories" 
                onChange={(evt)=> handleTextSearch(evt.target.value)}
                onFocus={()=> handleStartAnimation(true)}
                onBlur={()=> handleStartAnimation(false)}
              />
            </motion.div>
            <RiSearchLine size='40px'/>
        </FormWrapper>
      </Container>
    )
}

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
  align-content: flex-end;
  justify-content: flex-end;
  padding-right: 16px;
  width: 100%;
  height: 40px;
`;

const variantsList = {
  open: { 
      width: '100%',
       x: 0,
       transition: {
          type: "spring",
          stiffness: 40,
          restDelta: 2
        }},
  closed: { 
      width: '40%', 
      transition: {
          type: "spring",
          stiffness: 20,
          restDelta: 2
        } },
}