import React from 'react'
import { Grid, TextField, InputAdornment, IconButton } from '@material-ui/core'
import Delete from '@material-ui/icons/Delete';

class EditorListItem extends React.Component {
	render () {
		const endAdornment = (
			<InputAdornment position="end">
				<IconButton color="secondary" onClick={this.props.handleListItemDelete} aria-label="Delete">
					<Delete />
				</IconButton>
			</InputAdornment>
		)
		return (
			<Grid className="mt-4" container>
				<Grid item xs={12}>
					<TextField 
						label="Bullet text" 
						placeholder="Enter text..." 
						fullWidth value={this.props.text} 
						onChange={this.props.handleChange} 
						InputProps={{endAdornment: endAdornment}}
					/>
				</Grid>
			</Grid>
		)
	}
}

export default EditorListItem