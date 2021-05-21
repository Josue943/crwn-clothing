import { memo, useState } from 'react';

import './styles.scss';
import CollectionItem from '../../components/collectionItem';
import data from './data';

const Shop = () => {
  const [collections] = useState(data);
  return (
    <div className='shop-page'>
      <h1>Collections</h1>
      {collections.map(({ id, items, routeName, title }) => (
        <div className='collection' key={id}>
          <h3>{title}</h3>
          <div className='collection-items'>
            {items.slice(0, 4).map((item, index) => (
              <CollectionItem item={item} key={index} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(Shop);
