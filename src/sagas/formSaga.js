import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { setFormURL, showLoader } from "../reducers/actions";
import { SAVE_FORM } from "../reducers/actionTypes";
import { saveForm } from "../services/formServices";

export function* saveFormWorker(action) {
  yield put(showLoader(true));
  const res = yield call(saveForm, action.form);
  yield put(showLoader(false));
  yield put(setFormURL(res.url));
  
}

export function* saveFormWatcher() {
  yield takeLatest(SAVE_FORM, saveFormWorker);
}
