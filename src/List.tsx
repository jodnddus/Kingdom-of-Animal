import React from 'react';
import Item from './Item';
import { Animal } from './interface';

interface Props {
  animals: Animal[];
}

const List: React.FC<Props> = ({ animals }) => {
  return (
    <div className="animal-list">
      {
        animals.map(animal =>
          <Item
            key={animal._id}
            _id={animal._id}
            imageUrl={animal.imageUrl}
            age={animal.age}
            name={animal.name}
            gender={animal.gender}
          />
        )
      }
    </div>
  );
}

export default List;