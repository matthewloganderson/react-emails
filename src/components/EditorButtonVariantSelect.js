import React from 'react'
import { Grid, Select, InputLabel, MenuItem } from '@material-ui/core'
import PropTypes from 'prop-types'

class EditorButtonVariantSelect extends React.Component {
	static defaultProps = {
		variant: 'secondary'
	}
	render () {
		return (
			<Grid container>
				<Grid item xs={12}>
					<InputLabel shrink id="button-variant-select-label">Text Type</InputLabel>
					<Select
						fullWidth
					    labelId="button-variant-select-label"
						id="button-variant-select"
						value={this.props.variant}
						onChange={this.props.handleChange}
		  			>
						<MenuItem value="primary">
							Primary
						</MenuItem>
						<MenuItem value="secondary">
							Secondary
						</MenuItem>
						<MenuItem value="warning">
							Warning
						</MenuItem>
						<MenuItem value="alert">
							Alert
						</MenuItem>
					</Select>	
				</Grid>
			</Grid>
		)
	}
}

EditorButtonVariantSelect.propTypes = {
	variant: PropTypes.string,
	handleChange: PropTypes.func
}

export default EditorButtonVariantSelect