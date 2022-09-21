import React, { Component } from "react";
import './Video.css';

export default class Video extends Component {
    render(){
              
        return (
            <video className="Video">
                <source src="https://www.w3schools.com/tags/movie.mp4"type="video/mp4"/>
            </video>
        );        
    }
}


            


