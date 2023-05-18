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
  const url =process.env.REACT_APP_BASE;
  return (
    <>
      <Header />
      <div className="brews">
        <h1 className ="brews__title">Prepare Your Coffee</h1>
        <h2 className="brews__subtitle">CHOOSE BREWING METHOS</h2>
      {brews.map((brew) =>
        <div className="brew" key={brew.id}>
          <img className="brew__image" src={url + brew.image} onClick={() => brewClick(brew.id)} alt="brewing type image"
          ></img>
          <div className="brew__technique">
            {brew.brewing_technique}
          </div>
        </div>
      )}
      </div>
      <Footer />
    </>
  )
}

export default Brewings;