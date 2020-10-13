import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AddCar extends React.Component {
    state = {
        NewCar: {
            make: '',
            model: '',
            year: 0,
            personId: 0
        },
        CurrentPerson: ''
    }
    componentDidMount = async () => {
        const response = await axios.get(`api/people/GetPersonForId?id=${this.props.match.params.id}`);
        this.setState({ CurrentPerson: response.data });
    }

    onAddClick = async () => {
        const { firstName, lastName } = this.state.CurrentPerson;
        const { year, make, model } = this.state.NewCar;  
        if (make === '' || model === '' || year === 0) {
            alert(`The form was not completed.`);
        }
        else {
            await axios.post('api/people/AddCarForPerson', { ...this.state.NewCar, year: +year, personId: +this.props.match.params.id });
            alert(`You have successfully added a car for ${firstName + ' ' + lastName}! `);
        }
    }
    onTextChange = (e) => {
        const copyCar = { ...this.state.NewCar };
        copyCar[e.target.name] = e.target.value;
        this.setState({ NewCar: copyCar });
    }
    render() {
        const { make, model, year } = this.state.NewCar;
        const { firstName, lastName } = this.state.CurrentPerson;
        return (


            <div className="container well col-md-6 col-md-offset-3">
                <h2 style={{ textAlign: "center" }}>Add a car for {firstName + ' ' + lastName}</h2>
                <input onChange={this.onTextChange} className="form-control" name="make" placeholder="make" type="text" value={make} />
                <br />
                <input onChange={this.onTextChange} className="form-control" name="model" placeholder="model" type="text" value={model} />
                <br />
                <input onChange={this.onTextChange} className="form-control" name="year" placeholder="year" type="text" value={year} />
                <br />
                <div className="row">
                    <button onClick={this.onAddClick} className="btn btn-success btn-block">Add</button>
                    <br />
                    <Link to={`/`}>
                        <button className="btn btn-primary btn-block">Return</button>
                    </Link>
                </div>

            </div>
        )
    }
}

export default AddCar;