import React from 'react';
import './App.css';
import NavLoginBar from './navigationBar/navLoginBar';
import NavLoginBar2 from './navigationBar/navLoginBar2';
import SignInPage from './SignInPage';
import RegisterPage from './RegisterPage';
import UploadNewVideo from './uploadNewVideo';
import LandingPage from './landingPage';
import MyVideos from './myVideos';
import SignInedPage from './SignInedPage';
import { BrowserRouter, Route, Switch,Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<><LandingPage/></>}/>
        <Route path='/SignInPage' element={<><SignInPage/></>}/>
        <Route path='/RegisterPage' element={<><RegisterPage/></>}/>
        <Route path='/MyVideosPage' element={<><MyVideos/></>}/>
        <Route path='/UploadWindow' element={<><UploadNewVideo/></>}/> 
        <Route path='/signinedpage' element={<><SignInedPage/></>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
