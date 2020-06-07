import React from 'react'
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab'
import { Grid, Typography } from '@material-ui/core'
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import PropTypes from 'prop-types'

class EditorTextAlignment extends React.Component {
	constructor (props) {
		super (props)
		this.checkInputLength = this.checkInputLength.bind (this)
	}
	checkInputLength (event, alignment) {
		if (this.props.handleChange) {
			if (alignment.length) {
				this.props.handleChange (event, alignment)
			}
		}
	}
	static defaultProps = {
		alignment: 'left'
	}
	render () {
		return (
			<Grid container className="mb-4">
				<Grid item xs={12}>
					<Typography gutterBottom>
						Alignment
					</Typography>
					<ToggleButtonGroup 
						value={this.props.alignment}
						exclusive
						onChange={this.checkInputLength}
						aria-label="text alignment"
					>
						<ToggleButton value="left" aria-label="left aligned">
							<FormatAlignLeftIcon />
						</ToggleButton>
						<ToggleButton value="center" aria-label="centered">
							<FormatAlignCenterIcon />
						</ToggleButton>
						<ToggleButton value="right" aria-label="right aligned">
							<FormatAlignRightIcon />
						</ToggleButton>
						<ToggleButton value="justify" aria-label="justified">
							<FormatAlignJustifyIcon />
						</ToggleButton>
					</ToggleButtonGroup>
				</Grid>
			</Grid>
		)
	}
}

EditorTextAlignment.propTypes = {
	alignment: PropTypes.string,
	handleChange: PropTypes.func
}

export default EditorTextAlignment