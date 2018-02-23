import React from 'react';

const DeputyDetail =(props)=> {
  //Now we have access to props.deputy
  console.log(props.deputy)
  return(
    <div className="thumbnail">
      <div className="caption">
        <h3>{props.deputy.depute.nom}</h3>
        <ul className="list-group">
          <li className="list-group-item">Parti: {props.deputy.depute.groupe_sigle}</li>
        </ul>
      </div>
    </div>
    );
};

export default DeputyDetail;
