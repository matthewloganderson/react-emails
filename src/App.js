import React from 'react';
import EmailContainer from './components/EmailContainer'
import EmailRow from './components/EmailRow'
import EmailColumn from './components/EmailColumn'
import EmailWrapper from './components/EmailWrapper'
import EmailCard from './components/EmailCard'
import EmailButton from './components/EmailButton'
import EmailCallout from './components/EmailCallout'
import EmailMenu from './components/EmailMenu'
import EmailHeroImage from './components/EmailHeroImage'
import EmailSpacer from './components/EmailSpacer'
import EmailHeading from './components/EmailHeading'
import EmailList from './components/EmailList'
import EmailJumbotron from './components/EmailJumbotron'

import './App.css'
function App() {
	return (
		<EmailWrapper outerBackground="blue">
			<EmailContainer>
				<EmailJumbotron />
				<EmailHeroImage />
				<EmailSpacer height="20" />
				<EmailRow>
					<EmailColumn small="12" large="8">
						<EmailCard border background color="blue">
							<EmailRow>
								<EmailColumn>
									This is a column for testing.
								</EmailColumn>
							</EmailRow>
							<EmailRow>
								<EmailColumn first>
									<EmailCallout>
										<EmailHeading element="h6">
											I am an h1
										</EmailHeading>
										<EmailButton rounded variant="alert">
											I am a button
										</EmailButton>
									</EmailCallout>
								</EmailColumn>
							</EmailRow>
						</EmailCard>
					</EmailColumn>
					<EmailColumn last background="white">
						<EmailMenu></EmailMenu>
					</EmailColumn>
				</EmailRow>
				<EmailRow>
					<EmailColumn first last>
						<EmailList></EmailList>
					</EmailColumn>
				</EmailRow>
			</EmailContainer>
		</EmailWrapper>
	);
}

export default App;
