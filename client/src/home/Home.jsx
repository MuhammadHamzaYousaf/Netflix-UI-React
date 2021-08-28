
import React from 'react'
import Featured from '../components/featured/Featured';
import List from '../components/list/List';
import Navbar from '../components/navbar/Navbar';
import "./Home.scss";

const Home = () => {
    return (
        <div className="home">
          <Navbar/>
          <Featured type="series"/>
          <List/>
          <List/>
        </div>
    )
}

export default Home
