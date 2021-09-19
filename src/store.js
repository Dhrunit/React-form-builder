import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { formReducer } from './reducers/formReducer'
import rootSaga from './sagas/rootSaga'

const reducers = combineReducers({
	form: formReducer,
})
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
	reducers,
	composeWithDevTools(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSaga)

export default store
