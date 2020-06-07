import React from 'react'
import {Grid, Typography, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary} from '@material-ui/core'
import {CirclePicker, ChromePicker} from 'react-color'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types'


class EditorColor extends React.Component {
	static defaultProps = {
		color: '#607d8b',
		colors: ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b"]
	}
	render () {
		return (
			<Grid container>
				<Grid item xs={12}>
					<Grid className="mb-4" container>
						<CirclePicker color={this.props.color} colors={this.props.colors} onChange={this.props.handleChange} width="100%" />
					</Grid>
					<Grid>
						<ExpansionPanel>
							<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
								<Typography>
									Advanced
								</Typography>
							</ExpansionPanelSummary>
							<ExpansionPanelDetails>
								<ChromePicker color={this.props.color} onChange={this.props.handleChange} width="100%" />
							</ExpansionPanelDetails>
						</ExpansionPanel>
					</Grid>
				</Grid>
			</Grid>
		)
	}
}

EditorColor.propTypes = {
	color: PropTypes.string,
	handleChange: PropTypes.func,
	colors: PropTypes.array
}

export default EditorColor