import React, { Component } from 'react';
import { Route } from 'react-router';
import AddCar from './AddCar';
import DeleteCars from './DeleteCars';
import AddPerson from './AddPerson';
import PeopleTable from './PeopleTable';

const Routes = () => {

    
        return (
            <div>
                <Route exact path='/' component={PeopleTable} />
                <Route path='/add-person' component={AddPerson} />
                <Route path='/add-car/:id' component={AddCar} />
                <Route path='/delete-cars/:id' component={DeleteCars} />
            </div>
        );
    
}

export default Routes;