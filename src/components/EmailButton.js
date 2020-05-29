import React from 'react'
import PropTypes from 'prop-types'

class EmailButton extends React.Component {
	static defaultProps = {
		href: '#',
		variant: 'secondary',
		size: '',
		expanded: false,
		pill: false,
		rounded: false,
		className: ''
	}
	appliedClasses () {
		return `button ${this.props.variant} ${this.props.size} ${this.props.expanded ? 'expanded' : ''} ${this.props.pill ? 'rounded' : ''} ${this.props.rounded ? 'radius' : ''} ${this.props.className}`
	}
	render () {
		return (
			<table className={this.appliedClasses()}>
				<tr>
					<td>
						<table>
							<tr>
								<td>
									<a href={this.props.href}>
										{this.props.children}
									</a>
								</td>
							</tr>
						</table>
					</td>
				</tr>
			</table>
		)
	}
}

EmailButton.propTypes = {
	href: PropTypes.string.isRequired,
	variant: PropTypes.string,
	size: PropTypes.string,
	expanded: PropTypes.bool,
	pill: PropTypes.bool,
	rounded: PropTypes.bool,
	className: PropTypes.string
}

export default EmailButton