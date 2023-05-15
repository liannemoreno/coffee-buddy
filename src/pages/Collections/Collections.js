
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import navigate instead of useNavigate
import Footer from '../../components/Footer/Footer.js';
import pages from '../../assets/logos/nav-bar/pages.svg';

function Collections({ collections }) {
  const navigate = useNavigate();
  const collectionClick = (collectionId) => {
    navigate(`/collections/${collectionId}`); 
  };

  return (
    <>
      <section className="collections_page">
        <h1 className="collections__title">Collections</h1>
        <div className="collections__sort-by">
          <p className="collections__sorty-by--title">Sort By</p>
          <p className="collections__sorty-by--name">Name</p>
        </div>
        <div className="collections">
          {collections.map((collection) => (
            <div className="collection" key={collection.id}>
              <h2
                className="collection_name"
                onClick={() => collectionClick(collection.id)}
              >
                {collection.collection_name}
              </h2>
              <p className="collection__desc">{collection.collection_description}</p>
              <p className="collection__user">By {collection.user}</p>
              <p className="collection__time">
                {new Date().toLocaleString('en-US', {dateStyle: 'short'})}
              </p>
            </div>
          ))}
        </div>
        <div className="collections__pages">
          <img src={pages} alt="pages image 123" />
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

