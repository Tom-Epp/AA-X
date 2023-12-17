import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import VehicleView from './VehicleView';
import { URLS } from '../utils/constants';

describe('Given VehicleView', () => {
  it('Renders the vehicle image', () => {
    const { getByAltText } = render(<VehicleView />);
    const image = getByAltText('Vehicle Image');

    expect(image).toBeVisible();
    expect(image).toHaveAttribute('src', URLS.LAND_ROVER);
  });
});
