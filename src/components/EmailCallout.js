import React from 'react'
import PropTypes from 'prop-types'

class EmailCallout extends React.Component {
	static defaultProps = {
		variant: 'white',
		className: ''
	}
	appliedClasses () {
		return `callout-inner ${this.props.variant} ${this.props.className}`
	}
	render () {
		return (
			<table className="callout">
				<tr>
					<th className={this.appliedClasses ()}>
						{this.props.children}
					</th>
					<th className="expander"></th>
				</tr>
			</table>
		)
	}
}

EmailCallout.propTypes = {
	variant: PropTypes.string,
	className: PropTypes.string,
}

export default EmailCallout