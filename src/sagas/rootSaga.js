import { all, fork } from "redux-saga/effects";

import { saveFormWatcher } from "./formSaga";

export default function* rootSaga() {
  yield all([fork(saveFormWatcher),]);
}
