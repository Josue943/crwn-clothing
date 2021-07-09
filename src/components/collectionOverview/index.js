import { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchCollections } from '../../store/entities/shop/actions';
import { selectCollections } from '../../store/entities/shop/selectors';

import CollectionPreview from '../collectionPreview';

const CollectionOverview = ({ collections, fetchCollections }) => {
  useEffect(() => {
    fetchCollections();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {collections.map(collection => (
        <CollectionPreview {...collection} key={collection.id} />
      ))}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps, { fetchCollections })(memo(CollectionOverview));
