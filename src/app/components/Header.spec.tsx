import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Header from './Header';
import { usePathname } from 'next/navigation';

jest.mock('next/navigation');

describe('Given Header', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const usePathnameMock = usePathname as jest.Mock;

  it('Displays the name of the current page', () => {
    usePathnameMock.mockImplementation(() => '/support');

    const { getByText } = render(<Header />);
    const currentPath = getByText('support');

    expect(currentPath.textContent).toEqual('support');
  });

  it('Displays the dashboard if the path is root', () => {
    usePathnameMock.mockImplementation(() => '/');

    const { getByText } = render(<Header />);
    const currentPath = getByText('Dashboard');

    expect(currentPath.textContent).toEqual('Dashboard');
  });

  it('Renders the user and notification icons', () => {
    const { getAllByTestId } = render(<Header />);
    const [bellIcon, userIcon] = getAllByTestId('header-icon');

    expect(bellIcon).toBeVisible();
    expect(bellIcon).toHaveClass('svg-inline--fa fa-bell');

    expect(userIcon).toBeVisible();
    expect(userIcon).toHaveClass('svg-inline--fa fa-user');
  });
});
