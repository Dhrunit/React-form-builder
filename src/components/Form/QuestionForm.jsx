import React from 'react'
import {
	FormControl,
	Input,
	IconButton,
	Select,
	MenuItem,
	InputLabel,
	InputAdornment,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import { FormHead, FormQuestionContainer, QuestionInput } from './style'
import DeleteIcon from '@mui/icons-material/Delete'
function QuestionForm({
	error,
	formValue,
	handleChange,
	handleDelete,
	title,
	index,
	handleOptionsChange,
	addNewOptionHandler,
}) {
	return (
		<div key={formValue.id}>
			<FormHead sx={{ marginTop: 2, position: 'relative' }}>
				<FormQuestionContainer>
					<h3>{title}</h3>
					<FormControl sx={{ width: '40%' }}>
						<InputLabel id='demo-simple-select-label'>
							Answer type
						</InputLabel>
						<Select
							onChange={(e) =>
								handleChange(e, 'questionType', index)
							}
							value={formValue.questionType}>
							<MenuItem value={'MultipleChoice'}>
								Multiple Choice
							</MenuItem>
							<MenuItem value={'MultiChoice'}>
								Multi Choice
							</MenuItem>
							<MenuItem value={'Paragraph'}>Paragraph</MenuItem>
						</Select>
					</FormControl>
				</FormQuestionContainer>
				<FormControl fullWidth variant='standard'>
					<QuestionInput
						placeholder='Question Title'
						error={error.includes(`QuestionEmpty${index}`)}
						onChange={(e) =>
							handleChange(e, 'questionTitle', index)
						}
					/>
				</FormControl>
				{formValue.questionType === 'Paragraph' && (
					<FormControl fullWidth variant='standard'>
						<Input
							sx={{ marginTop: 2 }}
							disabled
							placeholder='Paragraph'
							startAdornment={
								<InputAdornment position='start'>
									<ViewHeadlineIcon />
								</InputAdornment>
							}
						/>
					</FormControl>
				)}
				{formValue.questionType === 'MultiChoice' &&
					formValue.options.map((options, optionIndex) => (
						<>
							<FormControl fullWidth variant='standard'>
								<Input
									error={error.includes(
										`optionEmpty${optionIndex}${index}`
									)}
									placeholder={`Option ${optionIndex}`}
									sx={{ marginTop: 2 }}
									onChange={(e) =>
										handleOptionsChange(
											e,
											index,
											optionIndex
										)
									}
									startAdornment={
										<InputAdornment position='start'>
											<CheckBoxOutlineBlankIcon />
										</InputAdornment>
									}
								/>
							</FormControl>
							{optionIndex + 1 === formValue.options.length && (
								<IconButton
									onClick={() =>
										addNewOptionHandler(index, optionIndex)
									}
									sx={{ fontSize: '1rem', marginTop: 1 }}>
									<AddIcon /> Add Option
								</IconButton>
							)}
						</>
					))}
				{formValue.questionType === 'MultipleChoice' &&
					formValue.options.map((options, optionIndex) => (
						<>
							<FormControl fullWidth variant='standard'>
								<Input
									sx={{ marginTop: 2 }}
									error={error.includes(
										`optionEmpty${optionIndex}${index}`
									)}
									placeholder={`Option ${optionIndex}`}
									onChange={(e) =>
										handleOptionsChange(
											e,
											index,
											optionIndex
										)
									}
									startAdornment={
										<InputAdornment position='start'>
											<RadioButtonUncheckedIcon />
										</InputAdornment>
									}
								/>
							</FormControl>
							{optionIndex + 1 === formValue.options.length && (
								<IconButton
									onClick={() =>
										addNewOptionHandler(index, optionIndex)
									}
									sx={{ fontSize: '1rem', marginTop: 1 }}>
									<AddIcon /> Add Option
								</IconButton>
							)}
						</>
					))}
				<IconButton
					onClick={() => handleDelete(formValue.id)}
					sx={{
						position: 'absolute',
						right: -50,
						top: 0,
					}}>
					<DeleteIcon />
				</IconButton>
			</FormHead>
		</div>
	)
}

export default QuestionForm
