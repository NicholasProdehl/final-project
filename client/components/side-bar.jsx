import React from 'react';

export default function SideBar(props) {
  return (
    <div className="row">
      <div className="container side-bar span3">
        <a className="home row">
          <i className="fas fa-home"></i>
          <h1>Home</h1>
        </a>
        <a className="new-post">
          <i className="fas fa-plus-circle"></i>
          <h3>New Post</h3>
        </a>
        <a className="people">
          <i className="fas fa-user-friends"></i>
          <h3>People</h3>
        </a>
      </div>
    </div>
  );
}
