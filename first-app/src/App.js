import React from 'react';
import './App.css';

const App = ({lakes}) => (
  <ul className="heading">
      {lakes.map(lake =>
          <li key={lake.id}>{lake.name} | Trailhead: {lake.trailhead}</li>
      )}
  </ul>
);

export default App;
