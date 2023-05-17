import React from 'react';
import './Brewings.scss';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer.js';
import Header from '../../components/Header/Header.js';

function Brewings({ brews }) {
  const navigate = useNavigate();
  const brewClick = (brewId) => {
    navigate(`/prepare/${brewId}`);
  };
  return (
    <>
      <Header />
      {brews.map((brew) =>
        <div className="brew" key={brew.id}>
          <img src={brew.image} onClick={()=>brewClick(brew.id)}></img>
          <div>
            {brew.brewing_technique}
          </div>
        </div>
      )}
      <Footer />
    </>
  )
}

export default Brewings;