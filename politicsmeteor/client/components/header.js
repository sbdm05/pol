import React, {Component} from 'react';
import Accounts from './accounts';
import {Link, browserHistory} from 'react-router'; 


class Header extends Component{

  onLawClick(event){
    event.preventDefault();
    Meteor.call('laws.insert', (error, lawId)=>{
      //console.log(lawId);
      browserHistory.push(`/laws/${lawId}`)
    });
  }


  render(){
    return(
          <nav className="nav navbar-default">
            <div className="navbar-header">
              <Link to="/" className="navbar-brand">Politics</Link>
            </div>
            <ul className="nav navbar-nav">
              <li>
                <Accounts/>
              </li>
              <li>
                <a href="#" onClick={this.onLawClick.bind(this)}>Créer une loi</a>
              </li>
            </ul>
          </nav>

      );
  }
}

export default Header;
