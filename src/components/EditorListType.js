import React from 'react'
import { Grid, Select, MenuItem, InputLabel } from '@material-ui/core'
import PropTypes from 'prop-types'
 
class EditorListType extends React.Component {
	static defaultProps = {
		listType: 'ul'
	}
	render () {
		return (
			<Grid container>
				<Grid item xs={12}>
					<InputLabel shrink id="list-type-select-label">
						List Type
					</InputLabel>
					<Select fullWidth onChange={this.props.handleChange} labelId="list-type-select-label" value={this.props.listType}>
						<MenuItem value="ol">
							Ordered List
						</MenuItem>
						<MenuItem value="ul">
							Unordered List
						</MenuItem>
					</Select>
				</Grid>
			</Grid>
		)
	}
}

EditorListType.propTypes = {
	listType: PropTypes.string,
	handleChange: PropTypes.func
}

export default EditorListType