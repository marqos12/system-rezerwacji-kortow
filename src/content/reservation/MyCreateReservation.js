import React from 'react';
import './MyCreateReservation.css';


class MyCreateReservation extends React.Component {

    id;
    hour;
    name;
    initialized = false;
    wrong = "";
    warning = "";
    componentWillMount() {
        this.id = this.props.match.params.id;
        this.hour = this.props.match.params.hour

        this.initialized = true;
    }
    componentDidMount() {
        this.nameInput.focus();
    }
    onNameChange = (e) => {
        this.name = e.target.value;
        this.wrong = "";
        this.forceUpdate();

    }

    onAccept = () => {
        if (this.name != "" && this.name != null) {
            fetch('/api/reservation', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ id: this.id, hour: this.hour, name: this.name })
            })
                .then(response => response.json())
                .then((data) => {
                    this.props.history.push('/confirm/' + this.id + "/" + this.hour + "/" + this.name);
                })
                .catch(() => {

                    this.warning = "Termin zarezerwowany!"
                    this.forceUpdate();
                });

        }
        else {
            this.wrong = "wrong";
            this.forceUpdate();
        }

    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-content">
                        <h1 className="title is-1">Zarezerwuj kort</h1>

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
                                <input ref={(input) => { this.nameInput = input; }} className={'input ' + this.wrong} type="text" key="name" onChange={this.onNameChange} placeholder="Podaj Imie" ></input>
                            </div>
                        </div>


                    </div>
                    <footer className="card-footer">
                        <div className="card-footer-item">
                            <p className="warning">{this.warning}</p>
                        </div>
                        <div className="card-footer-item">

                            <a className="button is-info is-outlined" href="/">Wstecz</a>
                            <a className="button is-info" onClick={this.onAccept} >Potwierdź</a>
                        </div>
                    </footer>
                </div>
            </div>
        );
    }
}

export default MyCreateReservation;