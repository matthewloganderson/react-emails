import React from 'react'
import { Grid, Button, Paper, Typography } from '@material-ui/core'
import EditorListType from './EditorListType'
import EditorListStyleType from './EditorListStyleType'
import EditorListItem from './EditorListItem'

class EditorList extends React.Component {
	constructor (props) {
		super (props)
		this.state = {
			listItems: [{text: 'I am text'}, {text: 'I am a different bullet'}]
		}
		this.addListItem = this.addListItem.bind (this)
		this.setBulletText = this.setBulletText.bind (this)
		this.handleLiDelete = this.handleLiDelete.bind (this)
	}
	handleLiDelete (index) {
		const newArr = [...this.state.listItems]
		newArr.splice (index, 1)
		this.setState ({listItems: newArr})
	}
	addListItem () {
		this.setState ((state) => ({
			listItems: [...state.listItems, {text: ''}]
		}))
	}
	setBulletText (index, event) {
		const newArr = [...this.state.listItems]
		newArr[index].text = event.target.value
		this.setState ({listItems: newArr})
	}
	render () {
		const listItems = this.state.listItems.map (
			(item, index) => <EditorListItem handleListItemDelete={this.handleLiDelete.bind (this, index)} key={index} text={item.text} handleChange={this.setBulletText.bind (this, index)} />
		)
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
							<Paper className="p-4 mt-4">
								<Typography>
									List Items
								</Typography>
								{listItems}
								<Grid className="mt-4" container>
									<Grid item xs={12}>
										<Button onClick={this.addListItem} variant="contained" color="primary">
											Add List Item
										</Button>
									</Grid>
								</Grid>
							</Paper>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		)
	}
}

export default EditorList