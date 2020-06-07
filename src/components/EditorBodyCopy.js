import React from 'react'
import { Grid } from '@material-ui/core'
import EditorText from './EditorText'
import EditorTextTypeSelect from './EditorTextTypeSelect'

class EditorBodyCopy extends React.Component {
	render () {
		const top = <EditorTextTypeSelect handleChange={this.props.setTextType} textType={this.props.textType} />
		return (
			<Grid container>
				<Grid item xs={12}>
					<EditorText
						size={this.props.size}
						text={this.props.text}
						color={this.props.color}
						alignment={this.props.alignment}
						formatting={this.props.formatting}
						setText={this.props.setText}
						setColor={this.props.setColor}
						setAlignment={this.props.setAlignment}
						setFormatting={this.props.setFormatting}
						setSize={this.props.setSize}
						isHeading={false} 
						top={top}
					/>
				</Grid>
			</Grid>
		)
	}
}

export default EditorBodyCopy