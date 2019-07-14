import React from 'react';
import List from './List';
import Header from './Header';
import { Animal } from '../interface';

interface Props {
  dogs: Animal[];
  cats: Animal[];
}

interface State {
  tab: string;
}

class AnimalContainer extends React.Component<Props, State> {
  constructor(p: Props) {
    super(p);
    this.state = {
      tab: "cats"
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick(e: MouseEvent, tab: string) {
    e.preventDefault();
    this.setState({
      tab: tab
    })
  }

  render() {
    return (
      <div className="AnimalContainer">
        <Header onClick={this.onClick} activeTab={this.state.tab} />
        {
          this.state.tab === "dogs"
            ? <List animals={this.props.dogs} />
            : <List animals={this.props.cats} />
        }
      </div>
    );
  }
}

export default AnimalContainer;