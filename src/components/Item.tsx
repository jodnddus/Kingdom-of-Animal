import * as React from 'react';
// tslint:disable-next-line: import-name
import Lazyload from 'react-lazyload';
import { IAnimal } from '../interface';

const item: React.FC<IAnimal> = ({ _id, imageUrl, age, name, gender }) => {
  return (
    <Lazyload height={200}>
      <div className="items">
        <div className="info">
          <p>
            <b>{name}</b>&nbsp;({age})
          </p>
          <p>{gender}</p>
          <p>{_id}</p>
        </div>
        <div className="images">
          <img src={imageUrl} alt="animal" />
        </div>
      </div>
    </Lazyload>
  );
};

export default item;
