import { React } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from '../Footer/Footer.js'
import '../Collection/Collection.scss';


function Collection({ selectedCollection }) {

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
    //I HAVE TO USE goBack on an icon that takes me back//
  }

  const { collectionId } = useParams();
  // console.log(collectionId);

  const filteredCollection = selectedCollection.filter(collection => collection.id == collectionId)
  // console.log(filteredCollection);
  //its working but its being saved into one array of one objext 
  const coffees = filteredCollection[0].coffees;


  if (!selectedCollection) {
    return <div>loading</div>
  }
  return (
    <section className="coffees">
      <p>Place holder</p>

      {coffees.map(coffee =>

        <div className="coffee" key={coffee.id}>
            <h3 className="coffee__blend">{coffee.blend_name}</h3>
            <p className="coffee__roast">{coffee.roast_level}</p>
            {coffee.countries.map(country=>(
              <p className="coffeee__country">{country}</p>
            ))}
            {coffee.flavor_notes.map(flavor_note=>(
              <p className="coffee__notes">{flavor_note}</p>
            ))}
        </div>

      )}
      <Footer />
    </section>

  )
}
export default Collection;
