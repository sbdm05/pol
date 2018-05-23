import React from "react";
import Header from "./header";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
//MuyTheme is a library to make use of the toggle button

export default props => {
  return (
    <MuiThemeProvider>
      <div>
        <Header />
        {props.children}
      </div>
    </MuiThemeProvider>
  );
};
