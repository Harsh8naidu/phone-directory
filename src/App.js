import React, { Component } from "react";

function App() {
  return (
    <div>
      {/* <div className="header">
        Phone Directory
      </div>
      <button>Add</button>
      <div>
        <span>Name</span>
        <br />
        <span>Phone</span>
      </div> */}
      <label htmlFor="name">Name: </label>
      <input type="text" id="name" placeholder="Type Here" defaultValue="Shilpa"/>
    </div>
  );
}

export default App;
