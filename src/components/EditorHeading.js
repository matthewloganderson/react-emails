import React from 'react'
import { Grid } from '@material-ui/core'
import EditorHeadingLevel from './EditorHeadingLevel'
import EditorText from './EditorText'
import PropTypes from 'prop-types'
class EditorHeading extends React.Component {
	static defaultProps = {
		level: 3,
	}
	render () {
		return (
			<Grid container>
				<Grid xs={12} item>
					<EditorText 
						text={this.props.text}
						color={this.props.color}
						alignment={this.props.alignment}
						formatting={this.props.formatting}
						setText={this.props.setText}
						setColor={this.props.setColor}
						setAlignment={this.props.setAlignment}
						setFormatting={this.props.setFormatting}
						isHeading={true} 
						top={
							<EditorHeadingLevel 
								level={this.props.level} 
								handleChange={this.props.setLevel}
							/>
						} 
					/>
				</Grid>
			</Grid>
		)
	}
}

EditorHeading.propTypes = {
	isHeading: PropTypes.bool,
	text: PropTypes.string,
	color: PropTypes.string,
	alignment: PropTypes.string,
	formatting: PropTypes.array, 
	setText: PropTypes.func,
	setColor: PropTypes.func,
	setAlignment: PropTypes.func,
	setFormatting: PropTypes.func,
	level: PropTypes.number,
	setLevel: PropTypes.func
}

export default EditorHeading