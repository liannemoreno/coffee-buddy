
import './App.scss';
import { useState, useEffect} from "react";
import GetStarted from './pages/GetStarted/GetStarted.js';
import Collections from './pages/Collections/Collections.js';
import Brewings from './pages/Brewing/Brewings.js'
import Collection from './components/Collection/Collection.js';
import BrewingType from './components/BrewingType/BrewingType.js';
import collectionsData from './data/collections.json';
import brewingData from './data/brewing.json';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
const [selectedCollection, setCollection] = useState(collectionsData);
const [selectedBrew, setBrew] = useState(brewingData);

  


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GetStarted />}></Route>
          <Route path='*' element={<GetStarted />}></Route>
          <Route path='/collections' element={<Collections collections={collectionsData} />}></Route>
          <Route path='/collections/:collectionId' element= {<Collection  selectedCollection={selectedCollection}/>}></Route>
          <Route path= '/prepare' element= {<Brewings brews={brewingData}/>}></Route> 
          <Route path= '/prepare/:brewId' element= {<BrewingType selectedBrew={selectedBrew} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch('collections.json');
  //     const json = await response.json();
  //     setCollection(json);
  //   }
  //   fetchData();
  // }, []);
