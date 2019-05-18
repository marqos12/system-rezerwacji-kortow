import React from 'react';


class MyConfirmComponent extends React.Component {

  id;
  hour;
  name;
  
  componentWillMount() {
      this.id = this.props.match.params.id;
      this.hour = this.props.match.params.hour
      this.name = this.props.match.params.name

  }

  render() {
    return (
      <div>
                <div className="card">
                    <div className="card-content">
                        <h1 className="title is-1">Kort zarezerwowano</h1>
                        
                        <div className="columns MyColumn">
                            <div className="column">
                                <h3 className="title is-3">Kort:</h3>
                            </div>
                            <div className="column MyColR">
                                <h3 className="title is-3">{this.id}</h3>
                            </div>
                        </div>


                        <div className="columns MyColumn">
                            <div className="column">
                                <h3 className="title is-3">Godzina:</h3>
                            </div>
                            <div className="column MyColR">
                                <h3 className="title is-3">{this.hour}:00 - {this.hour * 1 + 1}:00</h3>
                            </div>
                        </div>


                        <div className="columns MyColumn">
                            <div className="column ">
                                <h3 className="title is-3">Imie:</h3>
                            </div>
                            <div className="column MyColR">
                              <h3 className="title is-3">{this.name}</h3>
                            </div>
                        </div>
                        

                    </div>
                    <footer className="card-footer">
                        <div className="card-footer-item">
                            <p className="warning">{this.warning}</p>
                        </div>
                        <div className="card-footer-item">
                            <a className="button is-info" href="/">Wstecz</a>
                        </div>
                    </footer>
                </div>
            </div>
    );
  }
}

export default MyConfirmComponent;