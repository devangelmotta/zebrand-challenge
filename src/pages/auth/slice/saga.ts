 import { take, call, put, select, takeLatest } from 'redux-saga/effects';
 import { githubAuthActions as actions } from '.';

 function* initRequestLogin() {
 }

export function* githubAuthSaga() {
  yield takeLatest(actions.initRequestAuth.type, initRequestLogin);
}
