// Any JS in here is automatically ran for us

// Import the React library
import React from 'react';
import ReactDOM from 'react-dom';
import DeputyList from './components/deputies_list';


const App =() =>{
  return(
    <div>
      <DeputyList />
    </div>
  );
}



//After Meteor loads in the browser, render my app to the DOM.
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});

