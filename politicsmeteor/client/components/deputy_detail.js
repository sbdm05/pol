import React, {Component} from 'react';
import Toggle from 'material-ui/Toggle';
import FlatButton from 'material-ui/FlatButton';


const styles = {
  block: {
    maxWidth: 250,
  },
  toggle: {
    marginBottom: 16,
  },
  thumbOff: {
    backgroundColor: '#ffcccc',
  },
  trackOff: {
    backgroundColor: '#ff9d9d',
  },
  thumbSwitched: {
    backgroundColor: 'red',
  },
  trackSwitched: {
    backgroundColor: '#ff9d9d',
  },
  labelStyle: {
    color: 'red',
  },
};


class DeputyDetail extends Component {
  
  constructor(props){
    super();
  }

  onToggled(){
    //console.log('test from ontoggle')
    console.log(this.props.law, 'from ontoggle') return the lawId
    console.log(this.props.deputy._id)//return the deputy ID
  }

  render(){
    console.log(this.props.law, 'from rebder')
          return(
            <div className="thumbnail">
              <div className="caption">
                <h3>{this.props.deputy.depute.nom}</h3>
                <ul className="list-group">
                  <li className="list-group-item">Parti: {this.props.deputy.depute.groupe_sigle}</li>
                </ul>
              </div>
              <div style={styles.block}>
            <Toggle
              label="Simple"
              style={styles.toggle}
              onToggle={()=>this.onToggled(this.props.law)}//needs to be an arrow function or it will fire automatically
            />
            </div>
            </div>
            );
          };
  };
    

export default DeputyDetail;
