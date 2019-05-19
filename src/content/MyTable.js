import React from 'react';
import './MyTable.css';

import {NavLink}from 'react-router-dom';

class MyTableComponent extends React.Component {

  hours = [];
  courts = ["Kort 1", "Kort 2", "Kort 3", "Kort 4", "Kort 5", "Kort 6"];
  k=0;
  reservations=[];
  constructor() {
    super();
    for (let i = 6; i < 22; i++) {
      this.hours.push(i + ":00-" + (i + 1) + ":00");
    }
    fetch('/api/reservation')
    .then(response => response.json())
    .then((data) =>{
      this.reservations=data;
      this.forceUpdate();

    })
  }

  
  componentWillMount() {
    
  }

  reserv = (cort, hour) => {
    
    this.props.history.push('/reservation/'+cort.split(" ")[1]+"/"+hour.split(":")[0]);
  }

  findReservation = (id,hour)=>{
    let a
      if( a = this.reservations.filter(x=>{
        return x.id==id.split(" ")[1]&&x.hour==hour.split(":")[0]
      })[0]) return a.name
  }

  createTD=(id,hour)=>{
    if(this.findReservation(id,hour))return <h1  className="title is-4">{this.findReservation(id,hour)}</h1>
    else return <a onClick={x=>this.reserv(id, hour)}>{id}<br/>{hour}</a>
  }

  render() {
    return (
      <div>
        <h1 className="title is-1">Rezerwacje</h1>
        <table>
          <thead>
            <tr>
              <th key='godziny'>Godziny</th>
              {this.courts.map(x => {
                return <th key={x}>{x}</th>
              })}
            </tr>
          </thead>
          <tbody>
            {this.hours.map(h => {
              return <tr key={this.k++}><td className="hours">{h}</td>
                {this.courts.map(c => {
                  return <td key={this.k*2+c} className="window">  {this.createTD(c,h)}</td>
                })}
              </tr>
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MyTableComponent;