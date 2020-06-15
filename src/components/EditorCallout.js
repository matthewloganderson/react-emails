import React from 'react'
import { Grid, TextField, Select, Typography } from '@material-ui/core'

class EditorCallout extends React.Component {
	render () {
		return (
			<Grid container>
				<Grid item xs={12}>
					<Typography>
						I am things in this grid.
					</Typography>
				</Grid>
			</Grid>
		)
	}
}

export default EditorCallout