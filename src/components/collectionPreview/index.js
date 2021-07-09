import { memo, useMemo } from 'react';
import { withRouter } from 'react-router';
import CollectionItem from '../collectionItem';

import './styles.scss';

const CollectionPreview = ({ title, items = [], history, routeName, match: { path }, main }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onClick = useMemo(() => (!main ? () => history.push(`${path}/${routeName}`) : null), []);
  return (
    <div className='collection'>
      <h3 onClick={onClick}>{title}</h3>
      <div className={`collection-items ${main ? 'collection-items' : ''}`}>
        {items.map(item => (
          <CollectionItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default withRouter(memo(CollectionPreview));
