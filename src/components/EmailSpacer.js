import React from 'react'
import PropTypes from 'prop-types'

class EmailSpacer extends React.Component {
	static defaultProps = {
		height: '16'
	}
	render () {
		const height = this.props.height + 'px'
		const style = {
			fontSize: height,
			lineHeight: height
		}
		return (
			<table className="spacer">
				<tbody>
					<tr>
						<td height={height} style={style}>&#xA0;</td>
					</tr>
				</tbody>
			</table>
		)
	}
}

EmailSpacer.propTypes = {
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default EmailSpacer