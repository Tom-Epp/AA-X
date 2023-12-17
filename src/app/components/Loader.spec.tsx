import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Loader from './Loader';

describe('Given Loader', () => {
  it('Renders the loader with the correct class', () => {
    const { getByTestId } = render(<Loader />);
    const loaderContainer = getByTestId('custom-loader');
    const [innerChild] = loaderContainer.children;

    expect(innerChild).toHaveClass('custom-loader');
  });
});
