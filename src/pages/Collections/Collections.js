
import React from 'react';
import '../Collections/Collections.scss'
import { useNavigate } from 'react-router-dom'; 
import Footer from '../../components/Footer/Footer.js';
import pages from '../../assets/logos/nav-bar/pages.svg';
import Header from '../../components/Header/Header.js';


function Collections({ collections }) {
  const navigate = useNavigate();
  const collectionClick = (collectionId) => {
    navigate(`/collections/${collectionId}`);
  };

  const url =process.env.REACT_APP_BASE;

  // {collections.map((collection) => 
  //   (console.log(collection.image))
  //  )};





  return (
    <>
    <Header />
      <section className="collections">
        <div className="collections__wrapper">
          <h2 className="collections__title">Your Collections</h2>
          <div className="collections__sort-by">
            <p className="collections__sort-by--title">Sort By</p>
            <p className="collections__sort-by--name">Name</p>
            <p className="collections__sort-by--date">Date</p>

          </div>
        </div>
        {collections.map((collection) => 
          (
          <div className="collection" key={collection.id}>
    
              <div className="collection__left">
                <img className="collection__left--img" src={url + collection.image} alt="#"></img>
              </div>
              <div className="collection__right">
                <h1
                  className="collection__name"
                  onClick={() => collectionClick(collection.id)}
                >
                  {collection.collection_name}
                </h1>
                <div className="collection__middle">
                  <p className="collection__middle-desc">{collection.collection_description}</p>
                  <p className="collection__middle-user">by {collection.user}</p>
                </div>
                <p className="collection__time">
                  Created On {new Date().toLocaleString('en-US', { dateStyle: 'short' })}
                </p>
              </div>
            </div>
          
        ))}
        <div className="collections__pages">
          <img className="collections__pages--img" src={pages} alt="pages image 123" />
        </div>
        <div className="collections__new">
          <p className="collections__new--header">+Create New Collection</p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Collections;

