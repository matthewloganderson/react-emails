import React from 'react'
import PropTypes from 'prop-types'

class EmailCard extends React.Component {
	static defaultProps = {
		colorBg: null,
		colorBorder: null,
		border: false,	
		className: '',
		background: false,
	}
	appliedStyles () {
		const border = () => {
			if (this.props.border) {
				return this.props.colorBorder ? `solid thin ${this.props.colorBorder}` : 'solid thin #ccc'
			} else {
				return false
			}
		}
		const background = () => {
			if (this.props.background) {
				return this.props.colorBg ? this.props.colorBg : 'white'
			} else {
				return false
			}
		}
		return {
			background: background(),
			border: border()
		}
	}
	appliedClasses () {
		return `${this.props.className} card`
	}
	render () {
		return (
			<table>
				<tr>
					<td style={this.appliedStyles()} className={this.appliedClasses()}>
						{this.props.children}
					</td>
				</tr>
			</table>
		)
	}
}

EmailCard.propTypes = {
	colorBg: PropTypes.string,
	colorBorder: PropTypes.string,
	border: PropTypes.bool,
	className: PropTypes.string,
	background: PropTypes.bool
}

export default EmailCard