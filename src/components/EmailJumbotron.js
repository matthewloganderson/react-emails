import React from  'react'
import EmailRow from './EmailRow'
import EmailColumn from './EmailColumn'
import EmailHeading from './EmailHeading'
import EmailHeroImage from './EmailHeroImage'
import EmailSpacer from './EmailSpacer'
import EmailButton from './EmailButton'

class EmailJumbotron extends React.Component {
	render () {
		return (
			<>
			<EmailHeroImage></EmailHeroImage>
			<EmailSpacer height="20" />
			<EmailRow>
				<EmailColumn first last>
					<EmailHeading className="text-center text-bold">
						Heading 
					</EmailHeading>
					<p className="text-center">
						Text
					</p>
					<center>
						<EmailButton>Button</EmailButton>
					</center>
				</EmailColumn>
			</EmailRow>
			<EmailSpacer height="20" />
			</>
		)
	}
}

export default EmailJumbotron