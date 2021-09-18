import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HomePageContainer = styled.div`
	height: 80vh;
	display: flex;
	justify-content: center;
	align-items: center;
	h2 {
		text-align: center;
	}
`

export const StyledLink = styled(Link)`
	color: black;
	text-decoration: none;
`
export const LinkContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin: 1rem;
`
