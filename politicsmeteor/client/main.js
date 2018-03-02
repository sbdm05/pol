// Any JS in here is automatically ran for us

// Import the React library
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './components/app';
import {Laws} from '../imports/collections/laws';
import LawsMain from './components/laws/laws_main';
import LawsList from './components/laws/laws_list';
import VotesMain from './components/votes/votesMain'; 

const routes=(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={LawsList}/>
      <Route path="laws/:lawId" component={LawsMain}/>
      <Route path="votes/:lawId" component={VotesMain}/>
    </Route>
  </Router>
);



//After Meteor loads in the browser, render my app to the DOM.
Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.container'));
});

