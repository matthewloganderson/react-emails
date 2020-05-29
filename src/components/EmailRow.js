import React from 'react'

class EmailRow extends React.Component {
	render () {
		return (
			<table className="row">
				<tr>
					{this.props.children}
				</tr>
			</table>
		)
	}
}


export default EmailRow