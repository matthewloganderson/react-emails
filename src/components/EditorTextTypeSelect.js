import React from 'react'
import { Grid, Select, MenuItem, InputLabel } from '@material-ui/core'
import PropTypes from 'prop-types'

class EditorTextTypeSelect extends React.Component {
	static defaultProps = {
		textType: 'p',
	}
	render () {
		return (
			<Grid container className="mb-4">
				<Grid item xs={12}>
					<InputLabel shrink id="text-type-label">Text Type</InputLabel>
					<Select
						fullWidth
					    labelId="text-type-label"
						id="text-type-select"
						value={this.props.textType}
						onChange={this.props.handleChange}
		  			>
						<MenuItem value="p">
							Paragraph
						</MenuItem>
						<MenuItem value="span">
							Span
						</MenuItem>
					</Select>	
				</Grid>
			</Grid>
		)
	}
}

EditorTextTypeSelect.propTypes = {
	textType: PropTypes.string,
	handleChange: PropTypes.func
}

export default EditorTextTypeSelect