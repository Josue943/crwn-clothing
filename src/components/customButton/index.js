import { memo } from 'react';
import CustomButtonContainer from './styles';

const CustomButton = ({ title, color = 'black', ...rest }) => <CustomButtonContainer {...rest}>{title}</CustomButtonContainer>;

export default memo(CustomButton);
