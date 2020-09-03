import React from 'react';
import { Link } from 'react-router-dom';

function PersonRow(props) {

    const { firstName, lastName, age, cars, id } = props.person;
    return (

        <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{age}</td>
            <td>{cars.length}</td>
            <td>
                <Link to={`/add-car/${id}`}>
                    <button className="btn btn-success">Add a Car</button>
                </Link>
                <Link to={`/delete-cars/${id}`}>
                    <button className="btn btn-danger">Delete all Cars</button>
                </Link>
            </td>
        </tr>

    );
}

export default PersonRow;