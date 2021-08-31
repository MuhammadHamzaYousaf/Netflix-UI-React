import React,{useEffect,useState} from 'react'
import "./Featured.scss";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import axios from 'axios';
const Featured = ({type})=> {
    const [featuremovie, setFeatureMovie] = useState({})
    useEffect(() => {
      const randomMovie=async ()=>{
          try{
            const res=await axios.get(`movies/random?type=${type}`,{
              headers:{
                token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTJiY2QyYWQ5ZDBlMWQ3YjhkYWQ0NGUiLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjMwMzQ2NTQyLCJleHAiOjE2MzA3Nzg1NDJ9.4tq75Uc_lltu-TiZBc0e2-_E45W-RJWcPRWlC0Ei1fM"
              }
            });
            setFeatureMovie(res.data[0]);
          }catch(error){
               console.log(error);          
          }
      }
      randomMovie();
    }, [type]) 
    
    return (
            <div className="featured">
              {type &&(
                  <div className="category">
                      <span>{type==="movie" ? "Movies" : "Series"}</span>
                      <select name="genre" id="genre">
                          <option>Genre</option>
                          <option value="adventure">Adventure</option>
                          <option value="comedy">Comedy</option>
                          <option value="crime">Crime</option>
                          <option value="fantasy">Fantasy</option>
                          <option value="historical">Historical</option>
                          <option value="horror">Horror</option>
                          <option value="romance">Romance</option>
                          <option value="sci-fi">Sci-fi</option>
                          <option value="thriller">Thriller</option>
                          <option value="western">Western</option>
                          <option value="animation">Animation</option>
                          <option value="drama">Drama</option>
                      </select>

                  </div>
              )}
              <img
                src={featuremovie.img}
                alt=""
              />
              <div className="info">
                <img
                  src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
                  alt=""
                />
                <span className="desc">
                  {featuremovie.desc}
                </span>
                <div className="buttons">
                  <button className="play">
                    <PlayArrowIcon />
                    <span>Play</span>
                  </button>
                  <button className="more">
                    <InfoOutlinedIcon />
                    <span>Info</span>
                  </button>
                </div>
              </div>
            </div>
    );
}


export default Featured