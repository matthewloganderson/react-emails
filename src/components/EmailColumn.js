import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'

class EmailColumn extends React.Component {
	static defaultProps = {
		small: 1,
		large: 12,
		background: null,
		first: false,
		last: false,
		style: {}
	}
	columnClasses () {
		const classes = []
		_.forEach (this.props, (value, key) => {
			if (value && key !== 'children' && key !== 'background' && key !== 'style') {
				if (value === true) {
					classes.push (key)
				} else {
					classes.push (`${key}-${value}`)
				}
			}
		})
		const str = classes.join (' ')
		return str + ' columns'
	}
	appliedStyles () {
		if (this.props.background) {
			const bg = {
				background: this.props.background
			}
			Object.assign (bg, this.props.style)
			return bg
		} else {
			return this.props.style
		}
	}
	render () {
		return (
			<th style={this.appliedStyles()} className={this.columnClasses()}>
				<table>
					<tr>
						<th>
							{this.props.children}
						</th>
						<th className="expander"></th>
					</tr>
				</table>
			</th>
		)
	}
}

EmailColumn.propTypes = {
	small: PropTypes.oneOfType ([PropTypes.string, PropTypes.number]),
	large: PropTypes.oneOfType ([PropTypes.string, PropTypes.number]),
	background: PropTypes.string,
	first: PropTypes.bool,
	last: PropTypes.bool,
}

export default EmailColumn