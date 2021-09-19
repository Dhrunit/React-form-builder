import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import { getAll } from '../../services/index.js'
import CircularProgress from '@mui/material/CircularProgress'
import { Link, useHistory } from 'react-router-dom'
import { Button, Paper } from '@mui/material'

function ViewForm() {
	useEffect(() => {
		setLoading(true)
		getAllForms()
	}, [])
	const history = useHistory()
	const [loading, setLoading] = useState(false)
	const [formData, setFormData] = useState([])
	const getAllForms = async () => {
		let res = await getAll()
		let tempData = []
		try {
			for (let data in res) {
				tempData.push(res[data])
			}
			setLoading(false)
			setFormData(tempData)
		} catch (err) {
			setLoading(false)
			setFormData([])
		}
	}
	return (
		<div>
			<h1 style={{ textAlign: 'center', marginTop: '1rem' }}>
				The Forms you add appear here
			</h1>
			{loading && (
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						height: '90vh',
						width: '98vw',
					}}>
					<CircularProgress style={{ color: 'black' }} />
				</Box>
			)}
			{!loading &&
				formData.length > 0 &&
				formData.map((forms) => (
					<Link key={forms.id} to={`/ShowLink/${forms.id}`}>
						<Paper
							sx={{
								textDecoration: 'none',
								height: '100px',
								width: '50%',
								margin: '1rem auto',
								padding: 1,
								textAlign: 'center',
							}}>
							<h2>Title: {forms.formTitle}</h2>
							<p>Description: {forms.formDescription}</p>
						</Paper>
					</Link>
				))}
			{!loading && formData.length === 0 && (
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						height: '90vh',
						width: '98vw',
						flexDirection: 'column',
					}}>
					<h1>No data found</h1>
					<Link
						to='CreateForm'
						style={{
							margin: '1rem',
							color: 'black',
						}}>
						Create a form
					</Link>
				</div>
			)}
			<div style={{ textAlign: 'center', marginTop: '3rem' }}>
				<Button variant='contained' onClick={() => history.push('/')}>
					Go back
				</Button>
			</div>
		</div>
	)
}

export default ViewForm
