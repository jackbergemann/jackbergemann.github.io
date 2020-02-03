import React from 'react';
import Header from '../components/Header';
import Maincontent from '../components/Maincontent';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="App">
        <Maincontent />
        <Cards />
      </div>
    )
}

export default Home;