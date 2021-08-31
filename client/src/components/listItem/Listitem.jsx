import React, { useState,useEffect } from 'react';
import "./Listitem.scss";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import axios from 'axios';
import {Link} from 'react-router-dom';
const Listitem = ({item,index}) => {
    
    const [isHover,setIsHover]=useState(false);
    const [movie,setMovie]=useState({});
    useEffect(() => {
        const getMovie=async ()=>{
            try {
                const res=await axios.get('movies/find/'+item,{
                    headers:{
                        token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTJiY2QyYWQ5ZDBlMWQ3YjhkYWQ0NGUiLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjMwMzQ2NTQyLCJleHAiOjE2MzA3Nzg1NDJ9.4tq75Uc_lltu-TiZBc0e2-_E45W-RJWcPRWlC0Ei1fM"
                    }
                });  
                
                setMovie(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getMovie();
    }, [item])    
    
    return (
        <Link to={{pathname:"/watch", movie:movie}}>
        <div className="listitem" 
            style={{left: isHover && index*225-50+index*2.5}}
            onMouseEnter={()=>setIsHover(true)}
            onMouseDown={()=>{setIsHover(false)}}
        > 
            <img src={movie.img}
             alt="" />
             {isHover && (
            <>
            <video src={movie.trailer} autoPlay={true} loop/>
             <div className="iteminfo">
               <div className="icons">
                    <PlayArrowIcon className="icon"/>
                    <AddIcon className="icon"/>
                    <ThumbUpAltOutlinedIcon className="icon"/>
                    <ThumbDownAltOutlinedIcon className="icon"/>
                </div>
                <div className="iteminfoTop">
                    <span>{movie.duration}</span>                
                    <span class="limit">+{movie.limit}</span>
                    <span>{movie.year}</span>
                </div>  
                <div className="desc">
                    {movie.desc}
                </div>
                <div className="genre">{movie.genre}</div>
             </div>  
            </> 
             )}
             
        </div>
        </Link>
    )
}

export default Listitem
