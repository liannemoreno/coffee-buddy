import { React, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import '../Collection/Collection.scss';
import collectionDetailData from '../../data/collections.json'


function Collection({}) {
  // const { coffees } = selectedCollection;
  const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
    //I HAVE TO USE goBack on an icon that takes me back//
	}

  const {collectionId}=useParams();
  const [collectionDetailsData, setCollectionDetailsData ]=useState({});
  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('collections.json');
      const json = await response.json();
      setCollectionDetailsData(json);
    }
      
    fetchData();
  }, []);

  return (
    <section>
      <p>Collection</p>
      
      {/* {coffees.map(coffee =>
  
            <div className="comment__wrapper" key={coffee.id}>
              <div className="comment__title">
                <h1 className="comment__title--name">{coffee.blend_name}</h1>
                <p className="comment__text">{coffee.roast_level}</p>
                <span>{coffee.origin_countries}</span>
                <p>{coffee.flavor_notes}</p>
              </div>
            </div>
          
        )} */}

    </section>

  )
}
export default Collection;
