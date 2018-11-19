import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import StyledToolbar from 'common/StyledToolbar';
import EmptyBlock from 'common/EmptyBlock';
import StyledTitle from 'common/StyledTitle';
import Txt from 'common/Txt';

import LocaleMenu from './locale/Menu';

const Landing = () => (
	<>
		<AppBar position="static">
			<StyledToolbar>
				<EmptyBlock />
				<LocaleMenu />
			</StyledToolbar>
		</AppBar>
		<StyledTitle>
			<Txt id="messages.selectGame" />
		</StyledTitle>
	</>
);

export default Landing;
