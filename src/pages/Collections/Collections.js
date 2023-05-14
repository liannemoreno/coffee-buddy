import React from 'react';
import Footer from '../../components/Footer/Footer.js';


function Collections({ collections }) {
    // const { collection_name, collection_description, user } = collections;

    return (
       <>
       <section className="collections">
            <div>
                {collections.map(collection => (
                    <div key={collection.id}>
                        <h2>{collection.collection_name}</h2>
                        <p>{collection.collection_description}</p>
                        <p>{collection.user}</p>
                        <p>{new Date().toLocaleString("en-US", {dateStyle:'short'})}</p>
                    </div>
                ))}
            </div>
        </section>
        <Footer />
        </>
    );
}


export default Collections