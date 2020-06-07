import React from 'react'
import { Grid, TextField } from '@material-ui/core'
import PropTypes from 'prop-types'

class EditorTextInput extends React.Component {
	static defaultProps = {
		multiline: false,
		text: '',
		label: 'Displayed Text',
		placeholder: 'Enter Text',
		className: 'mb-4'
	}
	render () {
		return (
			<Grid className={this.props.className} container>
				<Grid item xs={12}>
					<TextField onChange={this.props.handleChange} value={this.props.text} placeholder={this.props.placeholder} label={this.props.label} fullWidth multiline={this.props.multiline} />
				</Grid>
			</Grid>
		)
	}
}

EditorTextInput.propTypes = {
	multiline: PropTypes.bool,
	text: PropTypes.string,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	handleChange: PropTypes.func,
	className: PropTypes.string
}

export default EditorTextInput