import CreateForm from './pages/CreateForm/CreateForm'
import './App.css'
import { Switch, Link, Route } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import HomePage from './pages/HomePage/HomePage'
function App() {
	return (
		<Switch>
			<Route exact path='/' component={HomePage} />
			<Route exact path='/CreateForm' component={CreateForm} />
			<Route exact path='/ViewForm' component={CreateForm} />
			<Route exact path='/Docs' component={CreateForm} />
			<Route component={ErrorPage} />
		</Switch>
	)
}

export default App
