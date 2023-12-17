import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import VehiclePartInformation, { VehiclePartInformationProps } from './VehiclePartInformation';

describe('Given VehiclePartInformation', () => {
  const defaultProps: VehiclePartInformationProps = {
    batteryStatus: 'Good',
    engineStatus: 'Good',
  };

  it('Renders the vehicle battery status', () => {
    const { getByTestId } = render(<VehiclePartInformation {...defaultProps} />);

    const bateryStatusContainer = getByTestId('battery-status');
    const [title, subtitle] = bateryStatusContainer.children;

    expect(title).toHaveTextContent('Batter');
    expect(subtitle).toHaveTextContent('Good');
  });

  it('Renders the vehicle engine status', () => {
    const updatedProps: VehiclePartInformationProps = {
      ...defaultProps,
      engineStatus: 'Bad',
    };
    const { getByTestId } = render(<VehiclePartInformation {...updatedProps} />);

    const engineStatusContainer = getByTestId('engine-status');
    const [title, subtitle] = engineStatusContainer.children;

    expect(title).toHaveTextContent('Engine');
    expect(subtitle).toHaveTextContent('Bad');
  });

  it('Renders the vehicle part status icon with the correct background color', () => {
    const updatedProps: VehiclePartInformationProps = {
      ...defaultProps,
      engineStatus: 'Bad',
    };

    const { getByTestId } = render(<VehiclePartInformation {...updatedProps} />);
    const engineIconContainer = getByTestId('engine-icon-container');
    const batteryIconContainer = getByTestId('battery-icon-container');

    const engineIcon = getByTestId('engine-icon');
    const batteryIcon = getByTestId('battery-icon');

    expect(engineIconContainer.className).toContain('bg-red-200');
    expect(engineIcon).toHaveClass('svg-inline--fa fa-car');

    expect(batteryIconContainer.className).toContain('bg-green-200');
    expect(batteryIcon).toHaveClass('svg-inline--fa fa-car-battery');
  });
});
