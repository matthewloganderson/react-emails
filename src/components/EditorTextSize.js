import React from 'react'
import {Grid, Typography, Slider} from '@material-ui/core'
import PropTypes from 'prop-types'

class EditorTextSize extends React.Component {
	static defaultProps = {
		size: 16
	}
	render () {
		return (
			<Grid className="mt-4" container>
				<Grid item xs={12}>
					<Typography gutterBottom>
						Text Size
					</Typography>
					<Slider onChange={this.props.handleChange} value={this.props.size} min={10} max={72} />
				</Grid>
			</Grid>
		)
	}
}

EditorTextSize.propTypes = {
	size: PropTypes.number,
	handleChange: PropTypes.func
}

export default EditorTextSize