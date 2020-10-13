import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

class AddPerson extends React.Component {
    state = {
        NewPerson: {
            
        }
    }
    onAddClick = async () => {
        const { firstName, lastName, age } = this.state.NewPerson;
        if (firstName === '' || lastName === '' || age === 0) {
            alert(`The form was not completed.`);
        }
        else {
            await axios.post('api/people/AddPerson', { ...this.state.NewPerson, age: +this.state.NewPerson.age });
            this.props.history.push('/');
        }
    }
    onTextChange = (e) => {

        this.setState({ NewPerson: { ...this.state.NewPerson, [e.target.name]: e.target.value } });
        console.log(this.state.NewPerson);
    }
    render() {
        const { firstName, lastName, age } = this.state.NewPerson;
        return (
            <div className="container well col-md-6 col-md-offset-3">
                <h2 style={{ textAlign: "center" }}>Add a Person</h2>
                <input onChange={this.onTextChange} className="form-control" name="firstName" placeholder="first name" type="text" value={firstName} />
                <br />
                <input onChange={this.onTextChange} className="form-control" name="lastName" placeholder="last name" type="text" value={lastName} />
                <br />
                <input onChange={this.onTextChange} className="form-control" name="age" placeholder="age" type="text" value={age} />
                <br />
                <div className="row container">                    
                    <button onClick={this.onAddClick} className="btn btn-success btn-block">Add</button>   
                    <Link to={`/`}>
                        <button className="btn btn-primary">Return</button>
                    </Link>
                </div>

            </div>
        )
    }
}

export default AddPerson;