import React from 'react';

const api = {
  key: "bec7af83f8342da01e15547465b53bb3",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className='search-box'>
        <input type='text' className='search-bar' placeholder='Search...'></input>
        </div>
      </main>
      

    </div>
  );
}

export default App;
