import React from 'react';
import { useMenuItems } from './hooks/useMenuItem';
import Sidebar from './components/organisms/sideBar';
import MenuManager from './components/organisms/menuManager';
import FirstWindow from './components/organisms/firstWindow.jsx';

function App() {
  // const { menus, isLoading, error } = useMenuItems();

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  
  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  return (
    <>
    <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
      <Sidebar />
      <div className="flex-1 p-4 bg-gray overflow-y-auto">
        <FirstWindow/>
      </div>
    </div> 
     </>

  );
}

export default App;