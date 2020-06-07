import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import EditorTextInput from './EditorTextInput'
import EditorButtonVariantSelect from './EditorButtonVariantSelect'
import EditorSizeSelect from './EditorSizeSelect'
import EditorButtonFormatting from './EditorButtonFormatting'


class EditorButton extends React.Component {
	render () {
		return (
			<>
			<Grid spacing={3} container>
				<Grid item xs={12} md={6}>
					<EditorTextInput label="Button Text" text={this.props.text} handleChange={this.props.setText}  />
				</Grid>
				<Grid item xs={12} md={6}>
					<EditorTextInput placeholder="Button URL" label="Button Destination" text={this.props.url} handleChange={this.props.setUrl}  />
				</Grid>
			</Grid>
			<Grid spacing={3} container>
				<Grid item xs={12} md={6}>
					<EditorButtonVariantSelect />
				</Grid>
				<Grid item xs={12} md={6}>
					<EditorSizeSelect />
				</Grid>
			</Grid>
			<Grid container className="mt-4">
				<Grid item xs={12}>
					<Typography gutterBottom>
						Button Formatting
					</Typography>
					<EditorButtonFormatting />
				</Grid>
			</Grid>
			</>
		)
	}
}

export default EditorButton