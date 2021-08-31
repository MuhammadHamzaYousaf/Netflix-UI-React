
import React,{useState,useEffect} from 'react'
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import Navbar from '../../components/navbar/Navbar';
import "./Home.scss";
import axios from 'axios';

const Home = ({type}) => {
   const [lists, setLists] = useState([]);
   const [genre, setGenre] = useState(null);
   useEffect(() => {
     const getRandomLists = async ()=>{
       try {
          const res= await axios.get(`lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre: ""}`,{
            headers:{
              token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTJiY2QyYWQ5ZDBlMWQ3YjhkYWQ0NGUiLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjMwMzQ2NTQyLCJleHAiOjE2MzA3Nzg1NDJ9.4tq75Uc_lltu-TiZBc0e2-_E45W-RJWcPRWlC0Ei1fM"
            }
          });
          // console.log(res.data);
          setLists(res.data);
       } catch (error) {
         console.log(error);
       }
     }
     getRandomLists();
   },[type,genre]);
    return (
        <div className="home">
          <Navbar/>
          <Featured type={type}/>
          {lists.map((lists)=>(
            <List list={lists}/>
          ))}
          
          
        </div>
    )
}

export default Home
