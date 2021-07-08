import React, {useState} from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';


const SearchBox = (props) => {

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
    }

    const searchPlants = (e) => {
        e.preventDefault();
        getPlants();
    };
   
    return (
        <div>
            <h2>Wanna learn more about your plants?</h2>
                <Form className="searchBox">
                    <Form.Group>
                        <Form.Input
                            placeholder='ex) parlor palm'
                            name='name'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <Button onClick={searchPlants} className="ui yellow basic button" content='SEARCH' />
                    </Form.Group> </Form>
        </div>
    )

}
export default SearchBox;
