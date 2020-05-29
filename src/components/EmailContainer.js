import React from 'react'
import PropTypes from 'prop-types'

class EmailContainer extends React.Component {
	static defaultProps = {
		background: '#fafafa'
	}
	bg () {
		return {
			background: this.props.background
		}
	}
	render () {
		return (
			<table style={this.bg()} className="container">
				<tr>
					<td>
						{this.props.children}
					</td>
				</tr>
			</table>
		)
	}
}

EmailContainer.propTypes = {
	background: PropTypes.string,
}

export default EmailContainer