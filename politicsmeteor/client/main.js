// Any JS in here is automatically ran for us

// Import the React library
import React from "react";
import ReactDOM from "react-dom";
/*import { Router, Route, IndexRoute, browserHistory, history } from "react-router";*/
import {
  BrowserRouter,
  Route,
  Link,
  Router,
  browserHistory,
  History
} from "react-router-dom";
import history from "./components/history";
import App from "./components/app";
import { Laws } from "../imports/collections/laws";
import LawsMain from "./components/laws/laws_main";
import LawsList from "./components/laws/laws_list";
import VotesMain from "./components/votes/votesMain";
import data from "./data.json";

console.log(data);

// const lawlistcomponent = props => {
//   console.log("test");
//   return <LawsList {...props} />;
// };

const routes = (
  <BrowserRouter>
    {/* <Route exact path="/" component={App}> */}
    {/* <Route component={LawsList} />
      <Route path="laws/:lawId" component={LawsMain} />
      <Route path="votes/:lawId" component={VotesMain} /> */}
    {/* </Route> */}
  </BrowserRouter>
);

//After Meteor loads in the browser, render my app to the DOM.
Meteor.startup(() => {
  ReactDOM.render(
    <Router history={history}>
      <App />
    </Router>,
    document.querySelector(".container")
  );
});

//Passing props to Route but does not work
//<IndexRoute render={(props)=><LawsList {...props voted={false}}/>}
