import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import './PlantForm.css';
// import ImageUploader from 'react-images-upload';
import ImageUploading from "react-images-uploading";
import { MdAddAPhoto } from "react-icons/md";

// eslint-disable-next-line
export default (props) => {
    const { onSubmitProp, errors } = props;
    //keep track of what is being typed via useState hook
    const [name, setName] = useState("");
    const [scientificName, setScientificName] = useState("");
    const [nickname, setNickname] = useState("");
    const [dateAdopted, setDateAdopted] = useState("");
    const [light, setLight] = useState("");
    const [water, setWater] = useState("");
    const [info, setInfo] = useState("");
    const [image, setImage] = useState("");
    const [images, setImages] = useState([]);
    const maxNumber = 69;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    // const [errors, setErrors] = useState([]);
    //handler when the form is submitted

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({ name, nickname, scientificName, dateAdopted, images, light, water, info, image });
    }



    return (
        <div className="contentForm">
            <Form onSubmit={onSubmitHandler}>
                {errors.map((err, index) => <h3 style={{ "color": "orange" }} key={index}> {err} </h3>)}
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Nickname (*required)' type="text" onChange={(e) => setNickname(e.target.value)} value={nickname} />
                    <Form.Input fluid label='Name' type="text" onChange={(e) => setName(e.target.value)} value={name} />
                    <Form.Input fluid label='Scientific Name' type="text" onChange={(e) => setScientificName(e.target.value)} value={scientificName} />
                </Form.Group>
                <Form.Field className="dateForm">
                    <label>Date Adopted:</label>
                    <input type="date" onChange={(e) => setDateAdopted(e.target.value)} value={dateAdopted} />
                </Form.Field>
                <Form.Field className="dropdownForm">
                <label>Light:</label>
                <select onChange={(e)=>setLight(e.target.value)} name="select" value={light} >
                    <option value="default" >Please select</option>
                    <option value="low" >low</option>
                    <option value="medium" >medium</option>
                    <option value="high">high</option>
                </select>
                </Form.Field >
                <Form.Field className="dropdownForm">
                <label>Water:</label>
                <select onChange={(e)=>setWater(e.target.value)} name="select" value={water} >
                    <option value="default" >Please select</option>
                    <option value="low" >low</option>
                    <option value="medium" >medium</option>
                    <option value="high">high</option>
                </select>
                </Form.Field>
                {/* DOESN:T WORK (react image upload)
                <div className="imageUploader">
                <ImageUploader
                type="file"
                withIcon={true}
                buttonText='Choose images'
                onChange={(e) => setPicture(e.target.value[0])} value={picture}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                /> </div> */}

                <ImageUploading
                    multiple
                    value={images}
                    onChange={onChange}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                >
                    {({
                        imageList,
                        onImageUpload,
                        isDragging,
                        dragProps
                    }) => (
                        // write your building UI
                        <div className="upload__image-wrapper">
                            {/* <label>Click here to upload a picture of your plant</label> */}
                            <Button className="ui blue basic button"
                                style={isDragging ? { color: "red" } : null}
                                onClick={onImageUpload}
                                // onChange={(e) => setImages(e.target.value)} value={images}
                                {...dragProps}
                            >
                                <MdAddAPhoto style={{"fontSize": "25px"}}/>
                                <span className="imageButton">Click here to uplad your plant photo </span>
            </Button>
            &nbsp;
                            {imageList.map((image, index) => (
                                <div key={index} className="image-item">
                                    <img src={image.data_url} alt="" width="100" />
                                    <div className="image-item__btn-wrapper">
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </ImageUploading>
                <Form.Field className="imageUrl">
                    <label>image url:</label>
                    <input type="text" onChange={(e) => setImage(e.target.value)} value={image} />
                </Form.Field>
                <Form.Field className="imageUrl">
                    <label>IMAGES?</label>
                    <input type="file" onChange={(e) => setImage(e.target.value)} value={image} />
                </Form.Field>
                <Form.TextArea className="textArea" label='About' placeholder='Anything else you want to add?' onChange={(e) => setInfo(e.target.value)} value={info} />
                <Button className="yellow large" style={{ "marginTop": "10px" }}>Submit</Button>
            </Form>

        </div>
    )
}
