import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectGithubAuth,
    isRequestingLogin
  } from './slice/selectors';
  import { useGithubAuthSlice } from './slice';

const GithubAuth = ()=> {
    const { actions } = useGithubAuthSlice();
    const githubToken = useSelector(selectGithubAuth);
    const isLoading = useSelector(isRequestingLogin);
    const dispatch = useDispatch();
    const test = () => {
        dispatch(actions.initRequestAuth(true))
    }
    return(
        <button 
        onClick={()=> test()}
        disabled={isLoading}
        style={{
            width: '100%',
            height: '200px',
            backgroundColor: '#ddd'
        }}>
            {isLoading ?
            "LOADING..." : "LOGIN"}
        </button>
    )
}

export default GithubAuth;