import React from 'react'
import PropTypes from 'prop-types'

class EmailHeading extends React.Component {
	static defaultProps = {
		element: 'h3',
		className: '',
	}
	render () {
		const Element = this.props.element
		return (
			<Element className={this.props.className}>
				{this.props.children}
			</Element>
		)
	}
}

EmailHeading.propTypes = {
	element: PropTypes.string.isRequired,
	className: PropTypes.string
}

export default EmailHeading