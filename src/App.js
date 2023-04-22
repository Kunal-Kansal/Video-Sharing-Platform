import React from 'react';
import './App.css';
import NavLoginBar from './navigationBar/navLoginBar';
import NavLoginBar2 from './navigationBar/navLoginBar2';
import SignInPage from './SignInPage';
import RegisterPage from './RegisterPage';
import UploadNewVideo from './uploadNewVideo';
import { BrowserRouter, Route, Switch,Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/SignInPage' element={<><Nav/><SignInPage/></>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
