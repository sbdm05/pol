import React from "react";
import Header from "./header";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { BrowserRouter, Route, Link, Switch, Router } from "react-router-dom";
import LawsList from "./laws/laws_list";
import LawsMain from "./laws/laws_main";
import VotesMain from "./votes/votesMain";
//MuyTheme is a library to make use of the toggle button

export default props => {
  return (
    <MuiThemeProvider>
      <div>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LawsList} />
            <Route path="laws/:lawId" component={LawsMain} />
            <Route path="votes/:lawId" component={VotesMain} />
          </Switch>
        </BrowserRouter>
      </div>
    </MuiThemeProvider>
  );
};
