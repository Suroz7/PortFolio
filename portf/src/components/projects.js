import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { Canvas } from "@react-three/fiber";

import { OrbitControls } from "@react-three/drei";
class Projects extends React.Component {
    render() {
        return (
            <div class='border projects'>
                <p>Projects</p>
                <div class='col one'>
                <Link to='https://urn.fi/URN:NBN:fi:amk-2022121429645'>   <a>Thesis </a></Link>
                
<Link to='https://embrace-wears.myspreadshop.net/'><a> Brand</a></Link>

                </div>
               
               

            </div>
            

        )
    }
}
 export default Projects