import React from "react";
import { Button } from 'semantic-ui-react';
import { Link } from '@reach/router';
import { RiPlantLine } from "react-icons/ri";
import './Header.css';
import {GiMonsteraLeaf, GiLindenLeaf} from "react-icons/gi";

const Header = () => {

    return (
        <header>
                <Link to={'/'}>
            <div className="leftHeader">
                <h1>Planthood</h1>
                <h1 className="icon"><RiPlantLine /></h1>
            </div>
                </Link>
            <div className="button">
                <Button className="ui green basic button large"><Link style={{ "color": "green" }} to={"/search"}><GiLindenLeaf/> search plants</Link></Button>
            </div>
        </header>
    )
}

export default Header;