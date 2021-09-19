import { Button, Paper } from '@mui/material'
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { DocTitle } from './style'

function Docs() {
	const history = useHistory()
	return (
		<div style={{ width: '80%', margin: '2rem auto' }}>
			<Paper sx={{ padding: '2rem' }}>
				<h1 style={{ textAlign: 'center' }}>Docs</h1>
				<DocTitle>Major packages used</DocTitle>
				<ul style={{ marginBottom: '1rem' }}>
					<li>
						React, Redux, redux-saga, react-router-dom, material-ui,
						styled-components
					</li>
				</ul>
				<DocTitle>Features this app provides</DocTitle>
				<ul style={{ marginBottom: '1rem' }}>
					<li>
						On <Link to='/CreateForm'>CreateForm</Link> route user
						can create their dynamic form which gets set in
						localStorage
					</li>
					<li>
						Redux is used to manage the form state and redux-saga is
						used as a middleware which watches the dispatch and
						implements the loading logic
					</li>
					<li>
						Since no backend is created for this application to
						mimic the effect of api I have added dummy promises
						which functions the same
					</li>
					<li>
						On <Link to='/CreateForm'>ViewForm</Link> route user can
						view all the form they have created
					</li>
				</ul>
				<DocTitle>Improvements which can be added</DocTitle>
				<ul>
					<li>
						The overall UI/UX can be improved by properly planning
						the app UI wise
					</li>
					<li>The code written can be made more modular</li>
					<li>
						Also a backend server could be setup which stores the
						responses of the users
					</li>
				</ul>
				<div style={{ textAlign: 'center', marginTop: '3rem' }}>
					<a href='https://github.com/Dhrunit/React-form-builder'>
						Github link
					</a>
					<Button
						variant='contained'
						onClick={() => history.push('/')}>
						Go back
					</Button>
				</div>
			</Paper>
		</div>
	)
}

export default Docs
