import React from 'react';
import { Link } from 'react-router-dom';
import CarRow from './Components/CarRow';
import 'bootstrap/dist/css/bootstrap.css';

class DeleteCars extends React.Component {
    state = {
        cars : []
    }
    componentDidMount = {

    }
    onYesDeleteClick = () => {

    }

    render() {
        return (
            <div>
                <div className="container well">
                    <h1>Are you sure you would like to delete all of {this.props.match.params.id}'s cars?</h1>
                    <div className="row container">
                        <Link to={`/`}>
                            <button onClick={this.onYesDeleteClick} className="btn btn-success btn-block">Yes</button>
                            <button className="btn btn-danger btn-block">Cancel</button>
                        </Link>
                    </div>
                </div>
                <table className="table table-bordered table-striped col-md-8 col-md-offset-2"
                    style={{ marginTop: 60, textAlign: "center", marginLeft: 100 }}>
                    <thead>
                        <th>make</th>
                        <th>model</th>
                        <th>year</th>
                    </thead>
                    <tbody>
                        {this.state.cars.map((c, i) => <CarRow
                            car={c}
                            key={i}
                        />)}
                    </tbody>
                </table>
            </div>
        )
    }

};

export default DeleteCars;