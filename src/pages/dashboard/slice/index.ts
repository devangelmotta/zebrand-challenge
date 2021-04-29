import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { githubSaga } from './saga';
import { GithubState } from './types';
import { scopeSearchType } from './types';
export const initialState: GithubState = {
  users: [],
  repositories: [],
  profile: {},
  scope_search: scopeSearchType.ALL
};

const slice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    listRepositories(state, action: PayloadAction<any>) {
      state.repositories = action.payload
    },
    listUsers(state, action: PayloadAction<any>) {
      state.users = action.payload
    },
    profileData(state, action: PayloadAction<any>) {
      state.profile = action.payload
    },
    scopeSearchAction(state, action: PayloadAction<any>) {
      state.scope_search = action.payload
    },
  },
});

export const { actions: githubActions } = slice;
export const useGithubSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: githubSaga });
  return { actions: slice.actions };
};
