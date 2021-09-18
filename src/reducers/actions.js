import {
	ADD_QUESTION,
	SAVE_FORM,
	SET_FORM_URL,
	SHOW_LOADER,
	UPDATE_FORM,
	GET_ALL_FORM,
} from './actionTypes'

export const addQuestion = () => ({ type: ADD_QUESTION })
export const updateForm = (form) => ({ type: UPDATE_FORM, form })
export const showLoader = (flag) => ({ type: SHOW_LOADER, flag })
export const setFormURL = (url) => ({ type: SET_FORM_URL, url })
export const saveFormAction = (form) => ({ type: SAVE_FORM, form })
export const getAllForms = () => ({ type: GET_ALL_FORM })
