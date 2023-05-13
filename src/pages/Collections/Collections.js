import React from 'react';
import collections from '../../data/collections.json';
import {useState} from "react";

const Collections = () => {
const [selectedCollection, setSelectedCollection] = useState(collections[0])
 return (
        <section className="collections">
            {/* <img className="nav__item-image" src={video.image} alt="up next video" onClick={() => clickHandler(video.id)}/> */}
        </section>
    );
}


export default Collections