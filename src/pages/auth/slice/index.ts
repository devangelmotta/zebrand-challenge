import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { githubAuthSaga } from './saga';
import { GithubAuthState } from './types';

export const initialState: GithubAuthState = {
  loading: false,
  github_token: undefined
};

const slice = createSlice({
  name: 'githubAuth',
  initialState,
  reducers: {
    initRequestAuth(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    setToken(state, action: PayloadAction<any>) {
      state.loading = false;
      state.github_token = action.payload;
    },
  },
});

export const { actions: githubAuthActions } = slice;

export const useGithubAuthSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: githubAuthSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useGithubAuthSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
