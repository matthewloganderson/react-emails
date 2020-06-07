import React from 'react'
import { TextField, Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

class EditorImage extends React.Component {
	static defaultProps = {
		src: '',
		alt: ''
	}
	render () {
		return (
			<Grid spacing={3} container>
				<Grid item xs={12} md={6}>
					<TextField onChange={this.props.setSrc} value={this.props.src} placeholder="Enter image URL" label="Image URL" fullWidth />
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField onChange={this.props.setAlt} value={this.props.alt} placeholder="Enter alternate text" label="Alt Text" fullWidth />
				</Grid>
			</Grid>
		)
	}
}

EditorImage.propTypes = {
	src: PropTypes.string,
	alt: PropTypes.string,
	setSrc: PropTypes.func,
	setAlt: PropTypes.func
}

export default EditorImage