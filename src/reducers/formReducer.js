import { v4 as uuidv4 } from 'uuid'
import {
	ADD_QUESTION,
	GET_ALL_FORM,
	SET_FORM_URL,
	SHOW_LOADER,
	UPDATE_FORM,
} from './actionTypes'
import { getNewQuestion, INITIAL_STATE } from './helper'

export const formReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_QUESTION:
			return getNewQuestion(state)
		case UPDATE_FORM:
			return action.form
		case SHOW_LOADER:
			return { ...state, showLoader: action.flag }
		case SET_FORM_URL:
			return { ...state, url: action.url }
		case GET_ALL_FORM:
			return state
		default:
			return state
	}
}
