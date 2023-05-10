import './App.scss';
import GetStarted from './pages/GetStarted/GetStarted.js.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<GetStarted />}></Route>
          <Route path= '*' element= {<GetStarted />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;