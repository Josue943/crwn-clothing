import { memo } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './style.scss';
import MenuItem from '../menuItem';
import { selectDirectoryItems } from '../../store/entities/directory/selectors';

const Directory = ({ sections }) => (
  <div className='directory-menu justify-content-space'>
    {sections.map(({ id, ...rest }) => (
      <MenuItem key={id} {...rest} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectoryItems,
});

export default connect(mapStateToProps)(memo(Directory));
