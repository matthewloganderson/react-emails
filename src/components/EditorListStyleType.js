import React from 'react'
import { Grid, Select, MenuItem, InputLabel } from '@material-ui/core'
import PropTypes from 'prop-types'


class EditorListStyleType extends React.Component {
	static defaultProps = {
		listStyleType: 'disc'
	}
	render () {
		return (
			<Grid container>
				<Grid xs={12} item>
					<InputLabel id="bullet-type-select-label" shrink>
						Bullet Type
					</InputLabel>
					<Select labelId="bullet-type-select-label" onChange={this.props.handleChange} value={this.props.listStyleType} fullWidth>
						<MenuItem value="none" >
							No Bullets
						</MenuItem>
						<MenuItem value="disc">
							Disc
						</MenuItem>
						<MenuItem value="square" >
							Square
						</MenuItem>
						<MenuItem value="outline" >
							Outlined Disc
						</MenuItem>
					</Select>
				</Grid>
			</Grid>
		)
	}
}

EditorListStyleType.propTypes = {
	listStyleType: PropTypes.string,
	handleChange: PropTypes.func
}

export default EditorListStyleType