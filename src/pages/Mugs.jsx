import React from 'react';
import server from '../../server';

function Mugs() {
  const [mugs, setMugs] = React.useState([]);

  React.useEffect(() => {
    fetch(server)
      .then((res) => res.json())
      .then((data) => setMugs(data));
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
