import { Typography } from '@mui/material'
import { Box } from '@mui/system'

export default function ErrorPage() {
	return (
		<Box
			sx={{
				width: '100%',
				height: '300%',
				margin: '2rem auto',
				textAlign: 'center',
			}}>
			<Typography variant='h2' component='div' gutterBottom>
				404 Not found
			</Typography>
		</Box>
	)
}
