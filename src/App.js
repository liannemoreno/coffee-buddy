import './App.scss';
import {React, useState, useEffect} from "react";
import GetStarted from './pages/GetStarted/GetStarted.js';
import Collections from './pages/Collections/Collections.js';
import Footer from './components /Footer/Footer.js'
import collectionsData from './data/collections.json';
import brewingData from './data/brewing.json';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [collections, setCollection]=useState(collectionsData[0]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('collections.json');
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, []);


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GetStarted />}></Route>
          <Route path= '*' element= {<GetStarted />}></Route>
          <Route path= '/collections' element= {<Collections collections={collections} />}></Route>
          {/* <Route path= '/collections/idCollect' element= {<Collections />}></Route> */}
          {/* <Route path= '/prepare' element= {<Prepare />}></Route> */}
          {/* <Route path= '/prepare/:idPrep' element= {<Prepare />}></Route> */}
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;