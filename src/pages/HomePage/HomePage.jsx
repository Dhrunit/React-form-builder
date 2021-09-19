import { Typography } from '@mui/material'
import { HomePageContainer, LinkContainer, StyledLink } from './style'

export default function HomePage() {
	return (
		<>
			<LinkContainer>
				<StyledLink to='/CreateForm'>Create Form</StyledLink>
				<StyledLink to='/ViewForm'>View Form</StyledLink>
				<StyledLink to='/Docs'>Docs</StyledLink>
			</LinkContainer>
			<HomePageContainer>
				<Typography variant='h2'>Form Builder</Typography>
			</HomePageContainer>
		</>
	)
}
