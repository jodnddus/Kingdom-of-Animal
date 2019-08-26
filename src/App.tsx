import * as React from 'react';
import * as api from './api';
import './App.css';
import AnimalContainer from './components/AnimalContainer';
import { IAnimal } from './interface';

interface IState {
  dog: IAnimal[];
  cat: IAnimal[];
}

// tslint:disable-next-line: no-empty-interface
interface IProps {}

class App extends React.Component<IProps, IState> {
  constructor(p: IProps) {
    super(p);
    this.state = {
      cat: [],
      dog: [],
    };
    this.getAnimal = this.getAnimal.bind(this);
  }

  public async getAnimal() {
    try {
      const { dogData, catData } = await api.getAnimal('dog', 'cat');
      // tslint:disable-next-line: no-console
      console.log(dogData, catData);
      this.setState({
        cat: catData.data,
        dog: dogData.data,
      });
    } catch (e) {
      // tslint:disable-next-line: no-console
      console.log(e);
    }
  }

  public componentDidMount() {
    this.getAnimal();
  }

  public render() {
    return (
      <div className="App">
        <AnimalContainer dogs={this.state.dog} cats={this.state.cat} />
      </div>
    );
  }
}

export default App;
