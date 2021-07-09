import { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './styles.scss';
import CollectionPreview from '../../components/collectionPreview';
import { fetchCollection } from '../../store/entities/shop/actions';
import { selectCollection } from '../../store/entities/shop/selectors';

const Collection = ({ collection, fetchCollection, match }) => {
  useEffect(() => {
    fetchCollection(match.params.collectionName);
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='collection-page'>
      <CollectionPreview {...collection} main />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collection: selectCollection,
});

export default connect(mapStateToProps, { fetchCollection })(memo(Collection));
