
import React, {Component} from 'react';
import {Link} from "react-router-dom";


class Header extends React.Component{
    render(){
        return(
            <div>
<header>
    <div class="nav1">
    
    <Link to={"./home"}>Info</Link>

    <Link to={"./qualification"}>Qualification</Link>
    <Link to={"./projects"}>Projects</Link>
 
 
  
    </div>
</header>

            </div>
        )
    }
} export default Header


