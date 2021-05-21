import { memo } from 'react';
import { withRouter } from 'react-router-dom';

import './styles.scss';

const MenuCard = ({ title, imageUrl, linkUrl, size, history }) => (
  <div className={`${size} menu-item display-flex align-items-center justify-content-center`} onClick={() => history.push(linkUrl)}>
    <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className='menu-content'>
      <h1 className='title uppercase'>{title}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);
export default withRouter(memo(MenuCard));
