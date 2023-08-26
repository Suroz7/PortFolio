import React, { Component } from 'react';
import {Link} from "react-router-dom";
class Qualification extends React.Component {
    render() {
        return (
            <div className="quali_border">
                <p className='quali_title' >Qualification</p>
                <div className='quali'>
                    <div className='education'>
                        <h2>Education</h2>
                       <div className='dropdown-content'>
                        <div className='ddcc'> 
                        <Link to='https://net.centria.fi/'><h3 > 
                        Centria University of Applied Science
                        </h3>
                        <p>
                            Bachelors of Engineering in Information Technology 
                        </p></Link></div>
                        <div className='ddcc'>
                        <Link to='http://sec.goldengateintl.com/'>
                        <h3 > 
                        Golden Gate International College 
                        </h3>
                        <p className='extramargin'>
                         High School
                        </p></Link></div>
                        <div className='ddcc'>
                        <Link to='https://www.nps.edu.np/'>
                        <h3 > 
                        Nepal Police Higher Secondary Boarding School
                        </h3>
                        <p className='extramargin'>Middle School</p></Link></div></div>
                    </div>
                    <div className='programming'>
                    <h2> 
                       Programming 
                        </h2><h2>Languages</h2>
                        <div className='dropdown-content'>
                        <p>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>Java</li>
                        <li>C++</li>
                        <li>C programming</li>
                        </p>
                    </div></div>
                    <div className='design'>
                    <h2> 
                       Design Skills
                        </h2>
                        <div className='dropdown-content'> <p>
                        <li>Adobe Illuslator</li>
                        <li>Adobe Photoshop</li>
                        <li>Blender</li>
                        
                        </p></div>
                    </div>
                    <div className='experience'>
                    <h2> 
                       Experience
                        </h2><div className='dropdown-content'>
                        <p>
                        <li>Dude Project</li>
                        <li>Top Nepal IT solution</li>
                      
                        
                        </p>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
} export default Qualification