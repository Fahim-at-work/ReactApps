import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

function GitHubUser({login}){
const [data, setData] = useState(null);
useEffect(() => {
  fetch(`https://api.github.com/users/${login}`)
  .then(res => res.json())
  .then(setData)
  .catch(console.error);
}, []);

if(data){
return (
  <div className="container">
    <table className="center">
      <tr>
        <td>
        <img src={data.avatar_url} width='350'/>
        </td>
        <td>
        <h1>Name: {data.name}</h1>
        <h3>UserName: {data.login}</h3>
        <a href={data.html_url}> GitHub Profile </a>
        </td>
      </tr>
    </table>
  </div>
);
}
return null;
}

function App(){
return <GitHubUser login="Fahim-at-work" />

}



ReactDOM.render( 
  <App />,
    document.getElementById('root')
);