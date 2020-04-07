import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

import About from './AboutComponent';
import Event from './EventComponent';
import LivingGuide from './LivingGuideComponent';
import StudentGroups from './StudentGroupsComponent';
import { Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {

	render() {



        return (
			<div>
				<Header />
				<Switch>
					<Route path='/about' render={() => <About />} />
					<Route path='/event' render={() => <Event />} />
					<Route path='/livingguide' render={() => <LivingGuide />} />
					<Route path='/studentgroup' render={() => <StudentGroups />} />
					<Redirect to="/about" />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default Main;