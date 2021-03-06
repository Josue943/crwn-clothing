import { SpinnerContainer, SpinnerOverlay } from './styles';

const WithSpinner = (WrappedComponent, isLoading) => props => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...props} />
  );
};

export default WithSpinner;
