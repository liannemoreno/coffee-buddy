import { React, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import '../Collection/Collection.scss';


function Collection({selectedCollection}) {
  // const { coffees } = selectedCollection;
  const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
    //I HAVE TO USE goBack on an icon that takes me back//
	}

  const {collectionId}=useParams();
  console.log(collectionId);
  // console.log(selectedCollection[0].id);
  const filteredCollection = selectedCollection.filter(collection => collection.id == collectionId) 
  console.log(filteredCollection);
  //its working but its being saved into one array of one objext 
  const coffees = filteredCollection[0].coffees;
  console.log(coffees);
  // useEffect(() => {
  //   console.log('hi');
  //   async function fetchData() {
  //     const response = await fetch('../../collections.json');
  //     // const json = await response.json();
  //     console.log(response);
  //     // setCollectionDetailsData(json);
  //   }
      
  //   fetchData();
  // }, []);

  if (!selectedCollection ){
    return <div>loading</div>
  }
  return (
    <section>
      <p>Collection</p>
      
      {coffees.map(coffee =>
  
            <div className="comment__wrapper" key={coffee.id}>
              <div className="comment__title">
                <h1 className="comment__title--name">{coffee.blend_name}</h1>
                <p className="comment__text">{coffee.roast_level}</p>
                <span>{coffee.origin_countries}
                {/* map them into thier own array */}
                </span>
                <p>{coffee.flavor_notes}
                {/* map into own array "coffe.flavornotes.map" */}
                </p>
              </div>
            </div>
          
        )}

    </section>

  )
}
export default Collection;
