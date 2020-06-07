import React from 'react'
import { Select, InputLabel, Grid, MenuItem } from '@material-ui/core'
import PropTypes from 'prop-types'

class EditorSizeSelect extends React.Component {
	static defaultProps = {
		sizes: [
			{text: 'Normal', value: 'normal'},
			{text: 'Small', value: 'small'},
			{text: 'Large', value: 'large'}
		],
		size: 'normal'
	}
	render () {
		const sizes = this.props.sizes.map (item => <MenuItem value={item.value}>{item.text}</MenuItem>)
		return (
			<Grid container>
				<Grid item xs={12}>
					<InputLabel shrink id="size-select-label">Select Size</InputLabel>
					<Select labelId="size-select-label" onChange={this.props.handleChange} fullWidth value={this.props.size}>
						{sizes}
					</Select>
				</Grid>
			</Grid>
		)
	}
}

EditorSizeSelect.propTypes = {
	handleChange: PropTypes.func,
	sizes: PropTypes.array,
	size: PropTypes.string
}

export default EditorSizeSelect