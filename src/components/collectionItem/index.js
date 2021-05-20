import { memo } from 'react';
import { connect } from 'react-redux';

import './styles.scss';
import { addItem } from '../../store/entities/cart/actions';
import CustomButton from '../customButton';

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className='collection-item'>
      <div className='collection-img ' style={{ backgroundImage: `url(${imageUrl})` }}>
        <CustomButton color='white' title='Add To Cart' onClick={() => addItem(item)} />
      </div>
      <div className='collection-footer'>
        <span>{name}</span>
        <span>${price}</span>
      </div>
    </div>
  );
};

export default connect(null, { addItem })(memo(CollectionItem));
