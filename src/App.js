import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from "./components/templates/mainLayout.js"
import Testimonies from './pages/testimonies.jsx';
import FirstWindow from './pages/firstWindow.jsx';
import Subscribers from './pages/subscribers.jsx';
import Song from './pages/songs.jsx';
import Information from './pages/information.jsx';
import Settings from './pages/settings.jsx';
import Posts from './pages/post.jsx';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <div className = "border border-red-100">
        <ToastContainer position="top-right" autoClose={5000} />
  
    <Router>
      <Routes>
    <Route path = "/" element = {<Layout />}>
      <Route index element = {<FirstWindow />} />
      <Route path='testimonies' element = {<Testimonies/>} />
      {/* <Route path='subscribers' element = {<Subscribers/>} /> */}
      <Route path='songs' element = {<Song/>} />
      <Route path='information' element = {<Information/>} />
      <Route path='posts' element = {<Posts/>} />
      {/* <Route path='settings' element = {<Settings/>} /> */}

    {/* <div className="flex flex-1 flex-col md:flex-row overflow-hidden"> */}
      {/* <div className="flex-1 p-4 bg-gray overflow-y-auto"> */}
      {/* </div> */}
    {/* </div>  */}
    </Route>
    </Routes>
  </Router>
  </div>
  );
}

export default App;
