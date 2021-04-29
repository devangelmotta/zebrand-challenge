import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'shared-types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.github || initialState;

export const selectGithub = createSelector([selectSlice], state => state);
export const selectUsers = createSelector([selectSlice], state => state.users);
export const selectRepositories = createSelector([selectSlice], state => state.repositories);
export const selectProfile = createSelector([selectSlice], state => state.profile);
export const scopeSearchState = createSelector([selectSlice], state => state.scope_search);



