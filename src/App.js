import './App.scss';
import  { useState, useEffect } from "react";
import GetStarted from './pages/GetStarted/GetStarted.js';
import Collections from './pages/Collections/Collections.js';
import collectionsData from './data/collections.json';
import brewingData from './data/brewing.json';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [collections, setCollection] = useState(collectionsData[0]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('collections.json');
      const json = await response.json();
      setCollection(json);
    }
    fetchData();
  }, []);

  // const foundCollection = collectionsData.find(collection => collection.id === collectionId)
  // setCollection(foundCollection);


return (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<GetStarted />}></Route>
        <Route path='*' element={<GetStarted />}></Route>
        <Route path='/collections' element={<Collections collections={collectionsData} />}></Route>
        {/* <Route path= '/collections/idCollect' element= {<Collections />}></Route> */}
        {/* <Route path= '/prepare' element= {<Prepare />}></Route> */}
        {/* <Route path= '/prepare/:idPrep' element= {<Prepare />}></Route> */}
      </Routes>
    </BrowserRouter>
  </div>
);
}

export default App;