import { memo } from 'react';

import './style.scss';
import MenuItem from '../menuItem';
import sections from './sections';

const Directory = () => (
  <div className='directory-menu justify-content-space'>
    {sections.map(({ id, ...rest }) => (
      <MenuItem key={id} {...rest} />
    ))}
  </div>
);

export default memo(Directory);
