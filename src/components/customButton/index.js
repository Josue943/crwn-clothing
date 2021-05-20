import { memo } from 'react';
import './styles.scss';

const CustomButton = ({ title, color = 'black', ...rest }) => (
  <button className={`btn ${color}`} {...rest}>
    {title}
  </button>
);

export default memo(CustomButton);
