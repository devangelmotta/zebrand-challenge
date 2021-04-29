import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'shared-types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.githubAuth || initialState;

export const selectGithubAuth = createSelector([selectSlice], state => state.github_token);
export const isRequestingLogin = createSelector([selectSlice], state => state.loading);
