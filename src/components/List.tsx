import * as React from 'react';
import { IAnimal } from '../interface';
import Item from './Item';

interface IProps {
  animals: IAnimal[];
}

const list: React.FC<IProps> = ({ animals }) => {
  return (
    <div className="animal-list">
      {animals.map(animal => (
        <Item
          key={animal._id}
          _id={animal._id}
          imageUrl={animal.imageUrl}
          age={animal.age}
          name={animal.name}
          gender={animal.gender}
        />
      ))}
    </div>
  );
};

export default list;
