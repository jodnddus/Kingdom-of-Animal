import React from 'react';
import AnimalContainer from './components/AnimalContainer';
import dogData from './data/q1_dog.json';
import catData from './data/q1_cat.json';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <AnimalContainer dogs={dogData} cats={catData} />
    </div>
  );
}

export default App;
