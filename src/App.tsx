import React from 'react';
import './App.css';
import LeftBar from "./modules/global/components/Left-bar";
import RightBar from "./modules/global/components/Right-bar";
import Body from "./modules/body";

function App() {
  return (
    <div className="App">
      <LeftBar>
          <Body/>
      </LeftBar>
      <RightBar>
          <div className="txtWrapper">
              Press The 'Add card" button to add the new Card.
              Use the "Sort cards" button to sort the Cards by the increase. Press an X icon on the top right to delete them.
          </div>
      </RightBar>
    </div>
  );
}

export default App;
