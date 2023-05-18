
import './App.scss';
import { useState, useEffect} from "react";
import GetStarted from './pages/GetStarted/GetStarted.js';
import Collections from './pages/Collections/Collections.js';
import Brewings from './pages/Brewing/Brewings.js'
import Collection from './components/Collection/Collection.js';
import BrewingType from './components/BrewingType/BrewingType.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';


function App() {
const [collectionsData, setCollectionsData] = useState([]);

useEffect(() => {
  axios.get('http://localhost:8080/collections')
      .then(response => {
        setCollectionsData(response.data);
      })
      .catch(err =>console.log(err));
}, [])

const [brewingData, setBrewingData] = useState([]);

useEffect(() => {
  axios.get('http://localhost:8080/brews')
      .then(response => {
        setBrewingData(response.data);
      })
      .catch(err =>console.log(err));
}, [])
  


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GetStarted />}></Route>
          <Route path='*' element={<GetStarted />}></Route>
          <Route path='/collections' element={<Collections collections={collectionsData} />}></Route>
          <Route path='/collections/:collectionId' element= {<Collection  collectionsData={collectionsData}/>}></Route>
          <Route path= '/prepare' element= {<Brewings brews={brewingData}/>}></Route> 
          <Route path= '/prepare/:brewId' element= {<BrewingType brewingData={brewingData} />}></Route>
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
