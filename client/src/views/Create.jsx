import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import PlantForm from '../components/PlantForm';
import './Create.css';
import Header from '../components/Header';

// eslint-disable-next-line
export default () => {
    const [plants, setPlants] = useState([]);
    const [errors, setErrors] = useState([]);

    const createPlant = (plant) => {
        axios.post('http://localhost:8050/api/plants/new', plant)
            .then(res => {
                console.log(res)
                navigate("/")
            })
            .catch(err => {
                console.log(err)
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }


    return (
        <div className="wrapper">
            <Header />
            <div className="plantForm">
                <h2>Add a new plant !</h2>
                {/* {errors.map((err, index) => <p style={{"color": "orange"}} key={index}> {err} </p>)} */}
                <PlantForm onSubmitProp={createPlant} errors={errors} />
            </div>
        </div>
    );
}
