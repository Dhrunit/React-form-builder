import React from 'react'
import { Button, FormControl, Input, IconButton } from '@mui/material'
import { withRouter } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import {
	ButtonContainer,
	FormHead,
	FormQuestionContainer,
	FormTitleInput,
} from './style'
import DeleteIcon from '@mui/icons-material/Delete'

class FormComponent extends React.Component {
	constructor() {
		super()
		this.state = {
			formState: {
				id: uuidv4(),
				formTitle: '',
				formDescription: '',
				questions: [
					{
						id: uuidv4(),
						questionType: '',
						questionTitle: '',
						options: false,
						paragraph: '',
						options: [
							{
								id: uuidv4(),
								label: '',
							},
						],
					},
				],
			},
		}
	}
	handleChange = (evt, key) => {
		const form = this.state.formState
		form[key] = evt.target.value
		this.setState({ formState: form })
	}

	addQuestion = () => {
		const prevState = this.state.formState
		const newQuestion = {
			id: uuidv4(),
			questionType: '',
			questionTitle: '',
			showOptions: false,
			paragraph: '',
			options: [
				{
					id: uuidv4(),
					label: '',
				},
			],
		}
		prevState.questions.push(newQuestion)
		this.setState({
			formState: prevState,
		})
	}

	handleDelete = (id) => {
		let filteredQuestion = this.state.formState.questions.filter(
			(question) => question.id !== id
		)
		let prevState = this.state.formState
		prevState.questions = filteredQuestion
		this.setState({
			formState: prevState,
		})
	}

	render() {
		const { questions } = this.state.formState
		const { history } = this.props
		return (
			<>
				<FormHead elevation={0}>
					<FormControl
						sx={{ marginBottom: '1rem' }}
						fullWidth
						variant='standard'>
						<FormTitleInput
							onChange={(e) => this.handleChange(e, 'formTitle')}
							placeholder='Form Title'
						/>
					</FormControl>
					<FormControl fullWidth variant='standard'>
						<Input
							placeholder='Form Descripton'
							onChange={(e) =>
								this.handleChange(e, 'formDescription')
							}
						/>
					</FormControl>
				</FormHead>
				{questions.map((formValue, idx) => (
					<>
						<FormHead
							key={formValue.id}
							sx={{ marginTop: 2, position: 'relative' }}>
							<FormQuestionContainer>
								<p>Question no {idx + 1}</p>
							</FormQuestionContainer>
							<FormControl fullWidth variant='standard'>
								<Input
									placeholder='Question Title'
									onChange={(e) =>
										this.handleChange(e, 'formDescription')
									}
								/>
							</FormControl>
							<IconButton
								onClick={() => this.handleDelete(formValue.id)}
								sx={{
									position: 'absolute',
									right: -50,
									top: 0,
								}}>
								<DeleteIcon />
							</IconButton>
						</FormHead>
					</>
				))}
				<ButtonContainer>
					<Button
						sx={{ marginTop: 3 }}
						variant='contained'
						color='primary'
						onClick={() => this.addQuestion()}>
						Add Question
					</Button>
					<Button
						variant='contained'
						onClick={() => history.push('/')}>
						Go back
					</Button>
					<Button
						variant='contained'
						color='secondary'
						onClick={() => ''}>
						Save
					</Button>
				</ButtonContainer>
			</>
		)
	}
}

export default withRouter(FormComponent)
