import React from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
import './MyStatistic.css';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class MyStatisticComponent extends React.Component {

  statistics;
  all;
  used;
  loaded = false
  constructor() {
    super();
    fetch('/api/statistics')
      .then(response => response.json())
      .then((data) => {
        this.statistics = data;
        this.all = (21 - 6) * 6;
        this.used = 0;
        this.statistics.courts.map(x => {
          this.used += x.value;
        })
        this.loaded = true;
        this.forceUpdate();
      })
  }

  filterStatistic = (id) => {
    if (this.statistics.courts.filter(x => { return x.id == id })[0]) return this.statistics.courts.filter(x => { return x.id == id })[0].value;
    else return 0;
  }

  peopleStatistics = ()=>{
    let tab=[];
    this.statistics.people.map(x=>{
      tab.push({y:x.value,label:x.name})
    })
    return tab
  }

  render() {
    if (this.loaded) {
      const options = {
        exportEnabled: true,
        animationEnabled: true,
        title: {
          text: "Zajętość kortów - ogółem"
        },
        data: [{
          type: "pie",
          startAngle: -90,
          toolTipContent: "<b>{label}</b>: {y}",
          showInLegend: "true",
          legendText: "{label}",
          indexLabelFontSize: 16,
          indexLabel: "{label} - {y}",
          dataPoints: [
            { y: this.filterStatistic(1), label: "Kort 1" },
            { y: this.filterStatistic(2), label: "Kort 2" },
            { y: this.filterStatistic(3), label: "Kort 3" },
            { y: this.filterStatistic(4), label: "Kort 4" },
            { y: this.filterStatistic(5), label: "Kort 5" },
            { y: this.filterStatistic(6), label: "Kort 6" },
            { y: this.all - this.used, label: "Wolne" }
          ]
        }]
      }
      let options2 = [];
      for (let i = 0; i < 6; i++) {
        let option = {
          exportEnabled: true,
          animationEnabled: true,
          title: {
            text: "Zajętość Kortu " + (i*1+1)
          },
          data: [{
            type: "pie",
            startAngle: -90,
            toolTipContent: "<b>{label}</b>: {y}",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}",
            dataPoints: [
              { y: this.filterStatistic(i+1), label: "Zajęte" },
              { y: (21 - 6) - this.filterStatistic(i+1), label: "Wolne" }
            ]
          }]
        }
        options2.push(option);
      }

      const optionsP = {
        animationEnabled: true,
        theme: "light2",
        title:{
          text: "Ilość rezerwacji na osobę"
        },
        axisX: {
          title: "Osoba",
          reversed: true,
        },
        axisY: {
          title: "Liczba rezerwacji",
          labelFormatter: this.addSymbols
        },
        data: [{
          type: "bar",
          dataPoints: this.peopleStatistics()
          
        }]
      }

      return (
        <div>
          <div className="container">
            <CanvasJSChart options={options} />
            <div className="columns">
              <div className="column">
            <CanvasJSChart options={options2[0]} />
    </div>
              <div className="column">
            <CanvasJSChart options={options2[1]} />
    </div>
            </div>
            <div className="columns">
              <div className="column">
            <CanvasJSChart options={options2[2]} />
    </div>
              <div className="column">
            <CanvasJSChart options={options2[3]} />
    </div>
            </div>
            <div className="columns">
              <div className="column">
            <CanvasJSChart options={options2[4]} />
    </div>
              <div className="column">
            <CanvasJSChart options={options2[5]} />
    </div>
            </div>
            <div className="columns">
            <CanvasJSChart options={optionsP} />

            </div>
          </div>
        </div>
      );
    }
    else return (
      <div></div>
    );
  }
}

export default MyStatisticComponent;