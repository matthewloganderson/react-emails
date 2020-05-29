import React from 'react'

class EmailList extends React.Component {
	static defaultProps = {
		listType: 'ul',
		listItems: []
	}
	render () {
		const ListType = this.props.listType
		const listItems = this.props.listItems.map ((item, index) => 
			<li key={index} className={item.className} style={item.style}>
				{item.text}	
			</li>
		)
		return (
			<ListType>
				{listItems}
			</ListType>
		)
	}
}

export default EmailList