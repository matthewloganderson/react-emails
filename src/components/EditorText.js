import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import EditorTextAlignment from './EditorTextAlignment'
import EditorTextSize from './EditorTextSize'
import EditorColor from './EditorColor'
import EditorTextInput from './EditorTextInput'
import EditorTextFormatting from './EditorTextFormatting'
import PropTypes from 'prop-types'

class EditorText extends React.Component {
	static defaultProps = {
		isHeading: false,
		text: '',
		color: '#333333',
		alignment: '',
		formatting: [], 
		size: 16
	}
	render () {
		return (
			<Grid container>
				<Grid xs={12} item>
					{this.props.top}
					<EditorTextInput multiline={!this.props.isHeading} text={this.props.text} handleChange={this.props.setText} />
					<Grid spacing={3} container>
						<Grid item xs={6}>
							<Grid className="mb-4" container>
								<Grid item xs={12}>
									<Typography gutterBottom>
										Text Color
									</Typography>
									<EditorColor color={this.props.color} handleChange={this.props.setColor} />
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={6}>
							<Grid container>
								<Grid item xs={12} md={6}>
									<EditorTextAlignment multiline={!this.props.isHeading} handleChange={this.props.setAlignment} alignment={this.props.alignment} />
								</Grid>
								<Grid item xs={12} md={6}>
									<EditorTextFormatting handleChange={this.props.setFormatting} formatting={this.props.formatting} />
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					{!this.props.isHeading &&
						<EditorTextSize size={this.props.size} handleChange={this.props.setSize}  />
					}
					{this.props.bottom}
				</Grid>
			</Grid>
		)
	}
}

EditorText.propTypes = {
	isHeading: PropTypes.bool,
	text: PropTypes.string,
	color: PropTypes.string,
	alignment: PropTypes.string,
	formatting: PropTypes.array, 
	size: PropTypes.number,
	setText: PropTypes.func,
	setColor: PropTypes.func,
	setAlignment: PropTypes.func,
	setFormatting: PropTypes.func,
	setSize: PropTypes.func
}

export default EditorText