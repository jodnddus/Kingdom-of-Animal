import React from 'react';
import AnimalContainer from './components/AnimalContainer';
import * as api from './api';
import { Animal } from './interface';
import './App.css';

interface State {
  dog: Animal[];
  cat: Animal[];
}

interface Props {
  // none props
}

class App extends React.Component<Props, State> {
  constructor(p: Props) {
    super(p);
    this.state = {
      dog: [],
      cat: []
    }
    this.getAnimal = this.getAnimal.bind(this);
  }

  getAnimal = async () => {
    try {
      const { dogData, catData } = await api.getAnimal('dog', 'cat');
      console.log(dogData, catData);
      this.setState({
        dog: dogData.data,
        cat: catData.data
      });
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount() {
    this.getAnimal();
  }

  render() {
    return (
      <div className="App">
        <AnimalContainer dogs={this.state.dog} cats={this.state.cat} />
      </div>
    );
  }
}

export default App;
