import { Input, Paper } from '@mui/material'
import styled from 'styled-components'
export const FormHead = styled(Paper)`
	padding: 1rem;
	width: 50%;
	margin: 0 auto;
`

export const FormTitleInput = styled(Input)`
	height: 4rem;
	font-size: 50px !important;
`

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: 1rem;
	button {
		margin: 1rem;
	}
`

export const FormQuestionContainer = styled.div`
	display: flex;
	justify-content: space-between;
	p {
		margin: 1rem 0;
	}
`

export const QuestionInput = styled(Input)`
	height: 4rem;
	font-size: 20px !important;
`
