 import React from 'react'
import "./Watch.scss";
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Watch = () => {
    const location=useLocation();
    const movie=location.movie;
    return (
        <div className="watch">
            <div className="back">
                <Link to="/">
                    <ArrowBackOutlinedIcon/>
                </Link>
                
                Home
            </div>
            <video 
            className="video" 
            autoPlay
            progress 
            controls 
            src={movie.video}/>
        </div>
    )
}
export default Watch
