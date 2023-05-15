
import './App.scss';
import { useState, useEffect } from "react";
import GetStarted from './pages/GetStarted/GetStarted.js';
import Collections from './pages/Collections/Collections.js';
import collectionsData from './data/collections.json';
import brewingData from './data/brewing.json';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Collection from './components/Collection/Collection.js';

function App() {
const [selectedCollection, setCollection] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('collections.json');
      const json = await response.json();
      setCollection(json);
    }
    fetchData();
  }, []);

  const collectionClick = (collectionId) => {
    const foundCollection = collectionsData.find(collection => collection.id === collectionId)
    setCollection(foundCollection);
  }


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GetStarted />}></Route>
          <Route path='*' element={<GetStarted />}></Route>
          <Route path='/collections' element={<Collections collections={collectionsData}  clickHandler={collectionClick} />}></Route>
          <Route path='/collections/:collectionId' element= {<Collection/>}></Route>
          {/* <Route path= '/prepare' element= {<Prepare />}></Route> */}
          {/* <Route path= '/prepare/:prepId' element= {<Prepare />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;