import React, { useState } from 'react'
import { Button, FormControl, Input } from '@mui/material'
import { useHistory } from 'react-router-dom'
import { ButtonContainer, FormHead, FormTitleInput } from './style'
import QuestionForm from './QuestionForm'
import { useDispatch, useSelector } from 'react-redux'
import { addQuestion, saveFormAction, updateForm } from '../../reducers/actions'
import { v4 as uuidv4 } from 'uuid'

export default function FormComponent() {
	const [error, setError] = useState([])
	const formState = useSelector((state) => {
		return state.form
	})
	const dispatch = useDispatch()

	const setFormState = (form) => {
		dispatch(updateForm(form))
	}

	const handleChange = (evt, key, questionIndex) => {
		const form = formState
		if (!isNaN(questionIndex)) {
			form.questions[questionIndex][key] = evt.target.value
			setFormState({ ...form })
			return
		}
		form[key] = evt.target.value
		setFormState({ ...form })
	}

	const handleOptionsChange = (evt, questionIndex, optionIndex) => {
		let form = formState
		form.questions[questionIndex].options[optionIndex].label =
			evt.target.value
		setFormState({ ...form })
	}

	const addQuestionHandler = () => {
		dispatch(addQuestion())
	}

	const addNewOptionHandler = (questionIndex) => {
		let form = formState
		form.questions[questionIndex].options.push({ id: uuidv4(), label: '' })
		setFormState({ ...form })
	}

	const handleDelete = (id) => {
		let prevState = formState
		const form = prevState.questions.filter(
			(questions) => questions.id !== id
		)
		prevState.questions = form
		setFormState({ ...prevState })
	}
	const saveForm = () => {
		const error = []
		if (!formState.formTitle.trim()) {
			error.push('TitleEmpty')
		}
		if (!formState.formDescription.trim()) {
			error.push('DescEmpty')
		}
		if (formState.questions.length > 0) {
			formState.questions.forEach((que, idx) => {
				if (que.questionTitle.trim() === '') {
					error.push(`QuestionEmpty${idx}`)
				}
				if (que.questionType !== 'Paragraph') {
					que.options.forEach((option, idxoption) => {
						if (option.label.trim() === '') {
							error.push(`optionEmpty${idxoption}${idx}`)
						}
					})
				}
			})
		} else {
			error.push('QuestionsEmpty')
		}
		if (error.length > 0) {
			setError(error)
		} else {
			setError([])
			dispatch(saveFormAction(formState))
		}
	}
	const history = useHistory()
	const { questions, showLoader } = formState

	return (
		<>
			<FormHead elevation={0} sx={{ marginBottom: '2rem' }}>
				{/* {showLoader && 'Loading'}
				{url} */}
				<FormControl
					sx={{ marginBottom: '1rem' }}
					fullWidth
					variant='standard'>
					<FormTitleInput
						onChange={(e) => handleChange(e, 'formTitle')}
						placeholder='Form Title'
						error={error.includes('TitleEmpty')}
					/>
					<p style={{ color: 'red', marginTop: '0.5rem' }}>
						{error.includes('TitleEmpty') &&
							'Please Enter form Title'}
					</p>
				</FormControl>
				<FormControl fullWidth variant='standard'>
					<Input
						placeholder='Form Descripton'
						error={error.includes('DescEmpty')}
						onChange={(e) => handleChange(e, 'formDescription')}
					/>
					<p style={{ color: 'red', marginTop: '0.5rem' }}>
						{error.includes('DescEmpty') &&
							'Please Enter form description'}{' '}
						{error.includes('QuestionsEmpty') &&
							'Please Add questions'}
					</p>
				</FormControl>
			</FormHead>
			{questions.map((formValue, idx) => (
				<>
					<QuestionForm
						key={formValue.id}
						error={error}
						index={idx}
						addNewOptionHandler={addNewOptionHandler}
						handleOptionsChange={handleOptionsChange}
						formValue={formValue}
						handleChange={handleChange}
						handleDelete={handleDelete}
						title={`Question no ${idx + 1}`}
					/>
				</>
			))}
			<ButtonContainer>
				<Button
					sx={{ marginTop: 3 }}
					variant='contained'
					color='primary'
					onClick={addQuestionHandler}>
					Add Question
				</Button>
				<Button variant='contained' onClick={() => history.push('/')}>
					Go back
				</Button>
				<Button
					variant='contained'
					color='secondary'
					onClick={() => saveForm()}>
					{showLoader ? 'Saving' : 'Save'}
				</Button>
			</ButtonContainer>
		</>
	)
}
