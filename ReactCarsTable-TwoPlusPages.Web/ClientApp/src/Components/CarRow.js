import React from 'react';
import { Link } from 'react-router-dom';

function CarRow(props) {
    const { make, model, year } = props.car;
    return (
        <div>
            <tr>
                <td>{make}</td>
                <td>{model}</td>
                <td>{year}</td>
            </tr>
        </div>
    );
}

export default CarRow;