import React from 'react';

function App() {
  return (
    <div>
      <p>Hello World</p>
      <router>
        <ul>
          <li>
            <link to="/About">About</link>
          </li>
          <li>
            <link to="/Table">Table</link>
          </li>
        </ul>
      </router>
    </div>
  );
}

export default App;
