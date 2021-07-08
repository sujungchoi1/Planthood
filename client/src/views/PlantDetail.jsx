import React, { useEffect, useState } from "react";
import Header from '../components/Header';
import './PlantDetail.css';
import axios from 'axios';
import './PlantDetail.css';

const PlantDetail = (props) => {

    const [plant, setPlant] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8050/api/plants/${props.id}`)
            .then(res => {
                setPlant(res.data)
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <div className="wrapper">
            <Header />
            {loaded && (
                <div className="plantDetail">
                    <h1>{plant.nickname}</h1>
                    <div className="plantDetailContent">
                        <img src={plant.image} alt="" width="200" />
                        <div className="plantDetailContentRight">
                        <h4>common name: {plant.name}</h4>
                        <h4>scientific name: {plant.scientificName}</h4>
                        <h4>water: {plant.water}</h4>
                        <h4>light: {plant.light}</h4>
                        <h4>desc: {plant.info}</h4>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default PlantDetail;