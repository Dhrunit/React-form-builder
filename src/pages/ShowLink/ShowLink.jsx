import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Paper } from '@mui/material'
import { useHistory, useParams } from 'react-router'
import { getAll } from '../../services'

function ShowLink(props) {
	useEffect(() => {
		setLoading(true)
		getAllForms()
	}, [])
	const query = useParams()
	const history = useHistory()
	const [loading, setLoading] = useState(false)
	const [formData, setFormData] = useState([])
	const getAllForms = async () => {
		let res = await getAll()
		const { hash } = window.location
		const message = atob(res[query.id].url)
		// console.log(JSON.parse(message))
		let tempData = []
		// try {
		// 	for (let data in res) {
		// 		tempData.push(res[data])
		// 	}
		// 	setLoading(false)
		// 	setFormData(tempData)
		// } catch (err) {
		// 	setLoading(false)
		// 	setFormData([])
		// }
	}
	return (
		<div>
			<Paper>Link</Paper>
		</div>
	)
}

export default ShowLink
