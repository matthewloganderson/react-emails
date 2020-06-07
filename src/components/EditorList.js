import React from 'react'
import { Grid, Button } from '@material-ui/core'
import EditorListType from './EditorListType'
import EditorListStyleType from './EditorListStyleType'
import EditorListItem from './EditorListItem'

class EditorList extends React.Component {
	static defaultProps = {
		listItems: [
			{text: 'I am a bullet'}
		]
	}
	render () {
		const listItems = this.props.listItems.map (item => <EditorListItem text={item.text} handleChange={this.props.setBulletText} />)
		return (
			<Grid spacing={3} container>
				<Grid item xs={12}>
					<Grid container spacing={3}>
						<Grid item xs={12} md={6}>
							<EditorListType />
						</Grid>	
						<Grid item xs={12} md={6}>
							<EditorListStyleType />
						</Grid>
					</Grid>
					<Grid container>
						<Grid item xs={12}>
							{listItems}
						</Grid>
					</Grid>
					<Grid className="mt-4" container>
						<Grid item xs={12}>
							<Button onClick={this.props.addListItem} variant="contained" color="primary">
								Add List Item
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		)
	}
}

export default EditorList