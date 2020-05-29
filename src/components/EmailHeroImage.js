import React from 'react'
import PropTypes from 'prop-types'
import EmailRow from './EmailRow'
import EmailColumn from './EmailColumn'

class EmailHeroImage extends React.Component {
	constructor (props) {
		super (props)
		this.styles = {
			width: '100% !important',
			padding: '0px',
			margin: '0px'
		}
	}
	static defaultProps ={
		src: 'https://placeimg.com/640/480/any',
		alt: '',
		className: '',
	}
	appliedClasses () {
		return this.props.className
	}
	render () {
		return (
			<EmailRow>
				<EmailColumn first last bg="white" small="12" large="12" style={{padding: '0px', margin: '0px'}}>
					<img src={this.props.src} alt={this.props.alt} className={this.appliedClasses()} style={this.styles} />
				</EmailColumn>
			</EmailRow>
		)
	}
}

EmailHeroImage.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	className: PropTypes.string,
}

export default EmailHeroImage