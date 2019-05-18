import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  
  Route,

  HashRouter
} from 'react-router-dom';

import Text from './Text';
import MyHeader from './layout/MyHeader'
import MyTable from './content/MyTable'
import MyStatistic from './content/MyStatistic'
import MyCreateReservation from './content/reservation/MyCreateReservation'
import MyConfirmReservation from './content/reservation/MyConfirmReservation'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    /*
    fetch('/api/hello')
      .then(response => response.json())
      .then((data) => {
        this.setState({ message: data.message });
      });
      */
  }

  render() {
    return (
      <HashRouter>
        <div className="App">
          <MyHeader />
          <Route exact path="/" component={MyTable} />
          <Route  path="/statistics" component={MyStatistic} />
          <Route  path="/reservation/:id/:hour" component={MyCreateReservation} />
          <Route  path="/confirm/:id/:hour/:name" component={MyConfirmReservation} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
