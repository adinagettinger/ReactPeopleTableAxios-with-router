import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AddCar extends React.Component {
    state = {
        NewCar: {
            make: '',
            model: '',
            year: '',
            personId: ''
        },
        CurrentPerson: ''
    }
    componentDidMount = async () => {
        const response = await axios.get(`api/people/GetPersonForId?id=${this.props.match.params.id}`);
        this.setState({ CurrentPerson: response.data });
    }

    onAddClick = async () => {
        const { firstName, lastName } = this.state.CurrentPerson;
        this.setState({ NewCar: { ...this.state.NewCar, personId: this.props.match.params.id } })
        await axios.post('api/people/AddCarForPerson', { car: this.state.NewCar })
        alert(`You have successfully added a car for ${firstName + ' ' + lastName}! `);
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
                <input className="form-control" name="make" placeholder="make" type="text" value={make}/>
                <input className="form-control" name="model" placeholder="model" type="text" value={model} />
                <input className="form-control" name="year" placeholder="year" type="text" value={year}/>
                <div className="row">
                    <button onClick={this.onAddClick} className="btn btn-success btn-block">Add</button>
                    <Link to={`/`}>
                        <button className="btn btn-primary">Return</button>
                    </Link>
                </div>

            </div>
        )
    }
}

export default AddCar;