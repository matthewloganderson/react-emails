import React from 'react'
import EmailMenuItem from './EmailMenuItem'
import PropTypes from 'prop-types'

class EmailMenu extends React.Component {
	static defaultProps = {
		className: '',
		menuItems: [
			{
				title: 'Menu Item',
				href: '#',
				className: ''
			},
			{
				title: 'Menu Item 2',
				href: '#',
				className: ''
			},
			{
				title: 'Menu Item 3',
				href: '#',
				className: ''
			},
		],
		verticalLg: false,
		verticalSm: true,
	}
	appliedClasses () {
		return `menu ${this.props.verticalLg ? 'vertical' : ''} ${this.props.verticalSm ? 'small-vertical' : ''} ${this.props.className}`
	}
	render () {
		const menuItems = this.props.menuItems.map ((item) => (
			<EmailMenuItem key={item.title} className={item.className} href={item.href}>
				{ item.title }
			</EmailMenuItem>
		))
		return (
			<table className={this.appliedClasses()}>
				<tr>
					<td>
						<table>
							<tr>
								{ menuItems }
							</tr>
						</table>
					</td>
				</tr>
			</table>
		)
	}
}

EmailMenu.propTypes = {
	className: PropTypes.string,
	menuItems: PropTypes.array.isRequired,
	verticalLg: PropTypes.bool,
	verticalSm: PropTypes.bool,
}

export default EmailMenu