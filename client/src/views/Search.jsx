import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import { Button, Form, Grid } from 'semantic-ui-react';
import { BsDot } from "react-icons/bs";
// import SearchBox from '../components/SearchBox';
// import Search from '../components/Search';
import axios from 'axios';
import Header from '../components/Header';
import './Search.css'
// import SearchBox from '../components/SearchBox';

const Search = (props) => {

    const [plants, setPlants] = useState([]);
    const [search, setSearch] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);


    const getPlants = () => {
        axios.get(`https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/species/search?q=${search}&token=wfOfrblXggceP_xcDAcmmxDOO4XmIyJY1KgXKK0_utA`)
            .then(res => {
                if (res.data.data.length > 0) {
                    setPlants(res.data.data);
                    console.log(res.data);
                } else {
                    console.log("error message");
                    setErrorMessage("Please try another keyword.");
                }
            })
            .catch(err => { console.log(err); })
    }

    const searchPlants = (e) => {
        e.preventDefault();
        getPlants();
    };


    return (
        <div className="wrapper">
            <Header />
            <div className="landingDisplay">
                {/* <SearchBox /> */}
                <h2>Got a new plant?</h2>
                <Form className="searchBox">
                    <Form.Group>
                        <Form.Input
                            placeholder='ex) parlor palm'
                            name='name'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <Button onClick={searchPlants} style={{"backgroundColor": "#fff19c"}} content='SEARCH' />
                    </Form.Group> </Form>


                {errorMessage ? <div style={{ "color": "red" }}> {errorMessage} </div> : null}

                <div className="list">
                    <Grid columns={3} divided>
                    {plants.map((value, index) => {
                        return (
                            <div>
                            <Grid.Row>
                            <Grid.Column>
                            <div className="plantList" plant={value} key={index} >
                                {/* <Link to={`/detail/${value.id}`}><img className="plantApiImage" width="150" height="150" src={value.image_url} alt={value.common_name}></img></Link> */}
                                <img className="plantApiImage" width="150" height="150" src={value.image_url} alt={value.common_name}></img>
                                <div className="plantListDetail">
                                    <h3><BsDot/>Common Name: <span>{value.common_name}</span></h3>
                                    <h3><BsDot/>Scientific Name: <span>{value.scientific_name}</span> </h3>
                                    <h3><BsDot/>Family Name: <span>{value.family_common_name}</span> </h3>
                                </div>
                            </div>
                            </Grid.Column>
                            </Grid.Row>
                            </div>                       
                        )
                    })}
                    </Grid>
                </div>

            </div>
        </div>

    )
}

export default Search;