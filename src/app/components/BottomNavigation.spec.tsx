import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import BottomNavigation from './BottomNavigation';

describe('Given BottomNavigation', () => {
  it('Renders the correct correct page route links', () => {
    const { getAllByRole } = render(<BottomNavigation />);

    const [dashboardLink, driverStatsLink, supportLink] = getAllByRole('link');

    expect(dashboardLink).toHaveAttribute('href', '/');
    expect(driverStatsLink).toHaveAttribute('href', '/driver-stats');
    expect(supportLink).toHaveAttribute('href', '/support');
  });

  it('Renders the bottom navigation icons', () => {
    const { getAllByTestId } = render(<BottomNavigation />);
    const [bellIcon, chartSimpleIcon, headsetIcon] = getAllByTestId('navigation-icon');

    expect(bellIcon).toBeVisible();
    expect(bellIcon).toHaveClass('svg-inline--fa fa-heart');

    expect(chartSimpleIcon).toBeVisible();
    expect(chartSimpleIcon).toHaveClass('svg-inline--fa fa-chart-simple');

    expect(headsetIcon).toBeVisible();
    expect(headsetIcon).toHaveClass('svg-inline--fa fa-headset');
  });
});
