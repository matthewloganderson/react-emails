import React from 'react'
import {AppBar, Toolbar, IconButton, Typography, Button, Grid, Box} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

class AppHeader extends React.Component {
	render () {
		return (
			<AppBar position="sticky">
				<Toolbar>
					<Grid spacing={3} alignItems="center" container>
						<Grid item xs="auto">
							<IconButton>
								<MenuIcon></MenuIcon>
							</IconButton>
						</Grid>
						<Grid item xs={5}>
							<Typography variant="h5">React Emails</Typography>
						</Grid>
						<Grid item xs={6}>
							<Box align="right">
								<Button>
									Export Email
								</Button>
							</Box>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		)
	}
}

export default AppHeader