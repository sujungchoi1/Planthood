import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import { Button, Form, Grid } from 'semantic-ui-react';
import { BsDot } from "react-icons/bs";
// import SearchBox from '../components/SearchBox';
// import Search from '../components/Search';
import axios from 'axios';
import Header from '../components/Header';
import './Main.css'
// import SearchBox from '../components/SearchBox';

const Main = (props) => {

    const [myPlants, setMyPlants] = useState([]);


    useEffect(()=>{
        axios.get("http://localhost:8050/api/plants")
            .then(res=>{
                setMyPlants(res.data)
            })  
            .catch(err=>console.log("Error: ", err))     
    }, [])



    return (
        <div className="wrapper">
            <Header />
            <div className="landingDisplay">
                {/* <SearchBox /> */}
                <h2>Got a new plant?</h2>
                <Link to="/new"><Button className="yellow large" content='Add them to your plant log!' /></Link>

                <div className="divider"></div>

                <div className="list">
                    <h2>Plants added so far:</h2>

                    <Grid columns={3} divided>
                    {myPlants.map((value, index) => {
                        return (
                            <div>
                            <Grid.Row>
                            <Grid.Column>
                            <div className="plantList" plant={value} key={index} >
                                <Link to={`/detail/${value._id}`}><img className="plantApiImage" width="150" height="150" src={value.image} alt={value.common_name}></img></Link>
                                {/* <img className="plantApiImage" width="190" height="190" src={value.image} alt={value.common_name}></img> */}
                                <div className="plantListDetail">
                                    <h3><BsDot/>Nickname: <span>{value.nickname}</span></h3>
                                    <h3><BsDot/>Common Name: <span>{value.name}</span> </h3>
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
            <footer>Photo by <a href="https://unsplash.com/@renran?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ren Ran</a> on <a href="https://unsplash.com/s/photos/leaf?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </footer>
        </div>

    )
}

export default Main;