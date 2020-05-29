import React from 'react'
import PropTypes from 'prop-types'


class EmailWrapper extends React.Component {
	static defaultProps = {
		outerBackground: '#333',
	}
	bg (color) {
		return {
			background: color
		}
	}
	render () {
		return (
			<table style={this.bg (this.props.outerBackground)} className="wrapper" align="center">
				<tr>
					<td className="wrapper-inner">
						{this.props.children}
					</td>
				</tr>
			</table>
		)
	}
}

EmailWrapper.propTypes = {
	outerBackground: PropTypes.string
}

export default EmailWrapper