import React from 'react'
import { Switch, Link, Route, BrowserRouter as Router } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import HomePage from './pages/HomePage/HomePage'
import CreateForm from './pages/CreateForm/CreateForm'
import ViewForm from './pages/ViewForm/ViewForm'

function Routes() {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/CreateForm' component={CreateForm} />
				<Route exact path='/ViewForm' component={ViewForm} />
				<Route exact path='/Docs' component={CreateForm} />
				<Route component={ErrorPage} />
			</Switch>
		</Router>
	)
}

export default Routes
