import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab'
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import PropTypes from 'prop-types'

class EditorTextFormatting extends React.Component {
	static propDefaults = {
		formatting: [],
	}
	render () {
		return (
			<Grid container>
				<Grid item xs={12}>
					<Typography gutterBottom>
						Formatting
					</Typography>
					<ToggleButtonGroup 
						value={this.props.formatting}
						onChange={this.props.handleChange}
						aria-label="text formatting"
					>
						<ToggleButton value="bold" aria-label="bold">
							<FormatBoldIcon />
						</ToggleButton>
						<ToggleButton value="italic" aria-label="italic">
							<FormatItalicIcon />
						</ToggleButton>
						<ToggleButton value="underlined" aria-label="underlined">
							<FormatUnderlinedIcon />
						</ToggleButton>
					</ToggleButtonGroup>
				</Grid>
			</Grid>
		)
	}
}

EditorTextFormatting.propTypes = {
	formatting: PropTypes.array,
	handleChange: PropTypes.func
}

export default EditorTextFormatting