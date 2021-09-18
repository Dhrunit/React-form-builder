import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import { getAll } from '../../services/index.js'
import CircularProgress from '@mui/material/CircularProgress'

function ViewForm() {
	useEffect(() => {
		setLoading(true)
		getAllForms()
	}, [])
	const [loading, setLoading] = useState(false)
	const [formData, setFormData] = useState([])
	const getAllForms = async () => {
		let res = await getAll()
		let tempData = []
		for (let data in res) {
			tempData.push(res[data])
		}
		setLoading(false)
		setFormData(tempData)
	}
	return (
		<div>
			{loading && (
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						height: '100vh',
						width: '100vw',
					}}>
					<CircularProgress style={{ color: 'black' }} />
				</Box>
			)}
			{!loading && <div>TEst</div>}
		</div>
	)
}

export default ViewForm
