import React from 'react'
import { Container, CssBaseline, Grid, Box } from '@material-ui/core'
import AppHeader from './AppHeader'

class AppWrapper extends React.Component {
	render () {
		return (
			<>
			<CssBaseline />
			<AppHeader />
			<Box p={2}>
				<Container>
					<Grid container>
						<Grid xs={12} item>
							{this.props.children}
						</Grid>
					</Grid>
				</Container>
			</Box>
			</>
		)
	}
}

export default AppWrapper