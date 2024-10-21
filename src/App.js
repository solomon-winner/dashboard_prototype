import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from "./components/templates/mainLayout.js"
import Home from "./pages/home.jsx"
// import { useMenuItems } from './hooks/useMenuItem';
// import Sidebar from './components/organisms/sideBar';
// import MenuManager from './components/organisms/menuManager';
// import FirstWindow from './components/organisms/firstWindow.jsx';
import Testimonies from './pages/testimonies.jsx';

function App() {
  // const { menus, isLoading, error } = useMenuItems();

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  
  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  return (
    <Router>
      <Routes>
    <Route path = "/" element = {<Layout />}>
      <Route index element = {<Home />} />
      <Route path='testimony' element = {<Testimonies/>} />
    {/* <div className="flex flex-1 flex-col md:flex-row overflow-hidden"> */}
      {/* <div className="flex-1 p-4 bg-gray overflow-y-auto"> */}
      {/* </div> */}
    {/* </div>  */}
    </Route>
    </Routes>
  </Router>

  );
}

export default App;