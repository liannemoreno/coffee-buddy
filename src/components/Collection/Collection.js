import { React } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import chevron from '../../assets/logos/images/chevron-left.svg';
import filled from '../../assets/logos/images/filled.svg';
import unfilled from '../../assets/logos/images/unfilled.svg';
import '../Collection/Collection.scss';


function Collection({ collectionsData }) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }

  const { collectionId } = useParams();


  const filteredCollection = collectionsData.find(collection => collection.id == collectionId)
  console.log(filteredCollection);
  
  

  if (!filteredCollection) {
    return <div>loading</div>
  }

  const coffees = filteredCollection.coffees;
  return (
    <>
      <Header />
      <section className="coffees">
        <a className="coffees__return--logo">
          <img className="coffees__return--logo-img" src={chevron} onClick={goBack} alt="chevron to go back"/>
        </a>
        <h4 className="coffees__collection">{filteredCollection.collection_name} Collection</h4>
        <div className="coffees__scrollable">
          {coffees.map(coffee =>
            <div className="coffee" key={coffee.id}>
              <div className="coffee__ratings">
                <img className="coffee__ratings--single" src={filled} alt="coffee bean"></img>
                <img className="coffee__ratings--single" src={filled} alt="coffee bean"></img>
                <img className="coffee__ratings--single" src={filled} alt="coffee bean"></img>
                <img className="coffee__ratings--single" src={unfilled} alt="hallowed coffee bean"></img>
              </div>
              <h3 className="coffee__blend">{coffee.blend_name}</h3>
              <p className="coffee__brand">{coffee.brand_name}</p>
              <div className="coffee__roast">
                <h4 className="coffee__roast--title">ROAST:</h4>
                <p className="coffee__roast--title--name">{coffee.roast_level}</p>
              </div>
              <div className="coffee__country">
                <h4 className="coffee__country--title"> ORIGIN:</h4>
                <li className="coffee__country--name">
                  {coffee.countries && coffee.countries.length > 0 ? coffee.countries.join(", ") : "No Origin"}
                </li>
              </div>
              <div className="coffee__notes">
                <h4 className="coffee__notes--title"> FlAVOR:</h4>
                <li className="coffee__notes--name">
                  {coffee.flavor_notes && coffee.flavor_notes.length > 0 ? coffee.flavor_notes.join(", ") : "No Origin"}
                </li>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  )
}
export default Collection;
