import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from 'common/Layout';

import Landing from './Landing';
import ThemeProvider from './theme/Provider';
import LocaleProvider from './locale/Provider';

const Root = () => (
	<LocaleProvider>
		<ThemeProvider>
			<Layout>
				<Router>
					<Switch>
						<Route exact path="/" component={Landing} />
					</Switch>
				</Router>
			</Layout>
		</ThemeProvider>
	</LocaleProvider>
);

export default Root;
