import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Link } from 'react-router-dom';
import PersonRow from './Components/PersonRow';
import axios from 'axios';

class PeopleTable extends React.Component {
    state = {
        people: [],
        isLoading: true
    }

    componentDidMount = () => {
        this.GetAllPeople();
    }
    GetAllPeople = async () => {
        const response = await axios.get('api/people/GetAllPeople');
        this.setState({ people: response.data, isLoading: false });

    }

    render() {
        return (
            <div>
                <div className="row col-md-6" style={{ marginLeft: 200, marginTop: 40 }}>
                    <Link to="/add-person">
                        <button className="btn btn-large btn-block btn-success ">Add a Person</button>
                    </Link>
                </div>

                <table className="table table-bordered table-striped col-md-8 col-md-offset-2"
                    style={{ marginTop: 60, textAlign: "center", marginLeft: 100 }}>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Cars Owned</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.isLoading && <tr className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </tr>}
                        {!this.state.isLoading &&
                             this.state.people.map((p, i) => <PersonRow person={p} key={i} />) }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default PeopleTable;