import React from 'react'
import { Grid, Slider, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

class EditorHeadingLevel extends React.Component {
	static defaultProps = {
		id: null,
		inputClass: '',
		label: 'Heading Level',
		labelClass: '',
		containerClass: '',
		level: 3,
	}
	render () {
		return (
			<Grid container className={this.props.containerClass}>
				<Grid item xs={12}>	
					<Typography className={this.props.labelClass} id={`heading_level_setter__${this.props.id}`} gutterBottom>
						{this.props.label}
					</Typography>
					<Slider
						className={this.props.inputClass}
						onChange={this.props.handleChange}
						aria-labelledby={`heading_level_setter__${this.props.id}`} 
						color={this.props.color}
						marks 
						min={1} 
						max={6} 
						value={this.props.level}
					/>
				</Grid>
			</Grid>
		)
	}
}

EditorHeadingLevel.propTypes = {
	id: PropTypes.string,
	inputClass: PropTypes.string,
	label: PropTypes.string,
	labelClass: PropTypes.string,
	containerClass: PropTypes.string,
	handleChange: PropTypes.func,
	level: PropTypes.number
}


export default EditorHeadingLevel