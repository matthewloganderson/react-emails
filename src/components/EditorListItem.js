import React from 'react'
import { Grid, TextField } from '@material-ui/core'

class EditorListItem extends React.Component {
	render () {
		return (
			<Grid className="mt-4" container>
				<Grid item xs={12}>
					<TextField label="Bullet text" placeholder="Enter text..." fullWidth value={this.props.text} onChange={this.props.handleChange} />
				</Grid>
			</Grid>
		)
	}
}

export default EditorListItem