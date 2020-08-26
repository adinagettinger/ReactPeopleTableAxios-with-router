import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link } from 'react-router-dom';
import PersonRow from './Components/PersonRow';

class PeopleTable extends React.Component {
    state = {
        people: []
        

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
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Cars Owned</th>
                        <th>Options</th>
                    </thead>
                    <tbody>
                        {this.state.people.map((p, i) => <PersonRow person={p} key={i} />)}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default PeopleTable;