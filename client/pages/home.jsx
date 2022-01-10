import React from 'react';
import Header from './components/header';
import SideBar from './components/side-bar';
export default function Home(props) {
  return (
      <div className="container">
        <Header/>
        <SideBar/>
      </div>
  );
}
