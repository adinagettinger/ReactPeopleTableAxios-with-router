import React from 'react';
import { Link } from 'react-router-dom';
import CarRow from './Components/CarRow';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

class DeleteCars extends React.Component {
    state = {
        cars: [],
        CurrentPerson: ''
    }

    componentDidMount = async () => {
        const response = await axios.get(`api/people/GetAllCarsForPerson?personId=${this.props.match.params.id}`);
        this.setState({ cars: response.data });
        const response2 = await axios.get(`api/people/GetPersonForId?id=${this.props.match.params.id}`);
        this.setState({ CurrentPerson: response2.data });

    }
    onYesDeleteClick = async () => {
        console.log(this.state.CurrentPerson.id);
        await axios.post('api/people/DeleteCars', { ...this.state.CurrentPerson, id: +this.props.match.params.id });
        this.props.history.push('/');
    }

    render() {
        const { firstName, lastName } = this.state.CurrentPerson;
        const { cars } = this.state;
        return (
            <div>
                {cars.length > 0 &&
                    <div>
                        <div className="container well">
                            <h1>Are you sure you would like to delete all of {firstName + ' ' + lastName}'s cars?</h1>
                            <div className="row container">

                                <button onClick={this.onYesDeleteClick} className="btn btn-success btn-block">Yes</button>
                                <Link to={`/`}>
                                    <button className="btn btn-danger btn-block">Cancel</button>
                                </Link>
                            </div>
                        </div>
                        <table className="table table-bordered table-striped col-md-8 col-md-offset-2"
                            style={{ marginTop: 60, textAlign: "center", marginLeft: 100 }}>
                            <thead>
                                <tr>
                                    <th>make</th>
                                    <th>model</th>
                                    <th>year</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.cars.map((c, i) => <CarRow
                                    car={c}
                                    key={i}
                                />)}
                            </tbody>
                        </table>
                    </div>}
                {cars.length === 0 &&
                    <div>
                    <div className="container well" style={{ marginTop: 60 }}>
                            <h1>{firstName + ' ' + lastName} currently has no cars.</h1>
                            <br />
                            <Link to={`/`}>
                                <button className="btn btn-primary btn-block">Return</button>
                            </Link>
                        </div>
                    </div>}
            </div>)
    }

};

export default DeleteCars;