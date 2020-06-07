import React from 'react'
import { Grid, Checkbox, FormGroup, FormControlLabel } from '@material-ui/core'
import PropTypes from 'prop-types'

class EditorButtonFormatting extends React.Component {
	static defaultProps = {
		centered: false,
		expanded: false,
	}
	render () {
		return (
			<Grid container>
				<Grid item xs={12}>
					<FormGroup row>
						<FormControlLabel
							control={
								<Checkbox 
									checked={this.props.centered} 
									onChange={this.props.setCentered} 
									name="centered" 
								/>
							}
							label="Centered"
    					/>
						<FormControlLabel
							control={
								<Checkbox 
									checked={this.props.expanded} 
									onChange={this.props.setExpanded} 
									name="expanded" 
								/>
							}
							label="100% Width"
    					/>
					</FormGroup>
				</Grid>
			</Grid>
		)
	}
}

EditorButtonFormatting.propTypes = {
	centered: PropTypes.bool,
	setCentered: PropTypes.func,
	expanded: PropTypes.bool,
	setExpanded: PropTypes.func
}

export default EditorButtonFormatting