import React from 'react';

const api = {
  key: "bec7af83f8342da01e15547465b53bb3",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  //date builder
const dateBuilder = (d) => {
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`
}

  return (
    <div className="app">
      <main>
        <div className='search-box'>
        <input type='text' className='search-bar' placeholder='Search...'></input>
        </div>

        <div className='location-box'>
        <div className='location'>
          New York City, US
        </div>
        <div className='date'>{dateBuilder(new Date())}</div>
        </div>
        <div className='weather-box'>
          <div className='temp'>
            15
          </div>
          <div className='weather'>Sunny</div>
        </div>
      </main>
      

    </div>
  );
}

export default App;