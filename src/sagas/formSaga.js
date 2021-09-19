import { call, put, takeLatest } from 'redux-saga/effects'
import { setFormURL, showLoader } from '../reducers/actions'
import { SAVE_FORM } from '../reducers/actionTypes'
import { saveForm } from '../services/formServices'

export function* saveFormWorker(action) {
	yield put(showLoader(true))
	const res = yield call(saveForm, action.form)
	yield put(showLoader(false))
	const encrypted = btoa(JSON.stringify(res))
	yield put(setFormURL(encrypted))
}

export function* saveFormWatcher() {
	yield takeLatest(SAVE_FORM, saveFormWorker)
}
