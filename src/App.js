import './App.scss';
import GetStarted from './pages/GetStarted/GetStarted.js';
import Footer from './components /Footer.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        {/* <Routes>
          <Route path='/' element={<GetStarted />}></Route>
          <Route path= '*' element= {<GetStarted />}></Route>
        </Routes> */}
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;