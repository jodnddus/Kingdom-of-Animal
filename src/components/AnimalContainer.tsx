import * as React from 'react';
import { IAnimal } from '../interface';
import Header from './Header';
import List from './List';

interface IProps {
  dogs: IAnimal[];
  cats: IAnimal[];
}

interface IState {
  tab: string;
}

class AnimalContainer extends React.Component<IProps, IState> {
  constructor(p: IProps) {
    super(p);
    this.state = {
      tab: 'cats',
    };
    this.onClick = this.onClick.bind(this);
  }

  public onClick(e: MouseEvent, tab: string) {
    e.preventDefault();
    document.documentElement.scrollTop = 0;
    this.setState({
      tab,
    });
  }

  public render() {
    return (
      <div className="AnimalContainer">
        <Header onClick={this.onClick} activeTab={this.state.tab} />
        {this.state.tab === 'dogs' ? (
          <List animals={this.props.dogs} />
        ) : (
          <List animals={this.props.cats} />
        )}
      </div>
    );
  }
}

export default AnimalContainer;
