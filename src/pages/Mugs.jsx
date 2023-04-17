import React from 'react';
import axios from 'axios';
import server from '../../server';

function Mugs() {
  const [mugs, setMugs] = React.useState([]);

  React.useEffect(() => {
    axios.get(server + '/mugs', {
      headers: {
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
      }
    })
      .then((res) => setMugs(res.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Mugs</h1>
      {mugs.map((mug) => (
        <div key={mug.name}>
          <h3>{mug.name}</h3>
          <p>Price: {mug.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Mugs;
