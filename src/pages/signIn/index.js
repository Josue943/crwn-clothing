import { memo } from 'react';
import { connect } from 'react-redux';

import { login } from '../../store/entities/auth/actions';

const SignIn = ({ login }) => {
  return (
    <div>
      SignIn
      <button onClick={() => login(true)}>Login</button>
    </div>
  );
};

export default connect(null, { login })(memo(SignIn));
