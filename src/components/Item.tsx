import React from 'react';
import LazyLoad from 'react-lazyload';
import { Animal } from '../interface';

const Item: React.FC<Animal> = ({ _id, imageUrl, age, name, gender }) => {
  return (
    <LazyLoad height={200}>
      <div className="items">
        <div className="info">
          <p><b>{name}</b>&nbsp;({age})</p>
          <p>{gender}</p>
          <p>{_id}</p>
        </div>
        <div className="images">
          <img src={imageUrl} alt="animal" />
        </div>
      </div>
    </LazyLoad>
  );
}

export default Item;