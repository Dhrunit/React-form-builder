import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { HomePageContainer, LinkContainer, StyledLink } from './style'

export default function HomePage() {
	return (
		<>
			<LinkContainer>
				<StyledLink to='/asdas'>TEst</StyledLink>
				<StyledLink to='/asdas'>Create Form</StyledLink>
				<StyledLink to='/asdas'>View Form</StyledLink>
				<StyledLink to='/asdas'>Docs</StyledLink>
			</LinkContainer>
			<HomePageContainer>
				<Typography variant='h2'>Form Builder</Typography>
			</HomePageContainer>
		</>
	)
}
