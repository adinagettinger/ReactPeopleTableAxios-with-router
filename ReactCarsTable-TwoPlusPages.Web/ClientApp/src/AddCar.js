import React from 'react';
import { Link } from 'react-router-dom';

class AddCar extends React.Component {
    state = {
        NewCar: {
            make: '',
            model: '',
            year: '',
        }
    }
    onAddClick = () => {
        alert(`you have successfully added a car for ${this.props.match.params.id}! `)
    }
    onTextChange = (e) => {
        const copyCar = { ...this.state.NewCar };
        copyCar[e.target.name] = e.target.value;
        this.setState({ NewCar: copyCar });
    }
    render() {
        const { make, model, year } = this.state.NewCar;
        return (


            <div className="container well col-md-6 col-md-offset-3">
                <h2 style={{ textAlign: "center" }}>Add a car for ${this.props.match.params.id}</h2>
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