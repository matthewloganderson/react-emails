import React from 'react'
import PropTypes from 'prop-types'


class EmailMenuItem extends React.Component {
	static defaultProps = {
		className: '',
		href: '',
	}
	render () {
		return (
			<th className={`menu-item ${this.props.className}`}>
				<a href={this.props.href}>
					{this.props.children}
				</a>
			</th>
		)
	}
}

EmailMenuItem.propTypes = {
	className: PropTypes.string,
	href: PropTypes.string
}

export default EmailMenuItem