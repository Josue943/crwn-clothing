import { memo } from 'react';
import { Route } from 'react-router';

import Collection from '../collection';
import CollectionOverview from '../../components/collectionOverview';

const Shop = ({ match }) => {
  return (
    <>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionName`} component={Collection} />
    </>
  );
};

export default memo(Shop);
