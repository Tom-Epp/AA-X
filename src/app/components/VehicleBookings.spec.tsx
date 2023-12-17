import { getByTestId, render } from '@testing-library/react';
import VehicleBookings, { VehicleBookingProps } from './VehicleBookings';

describe('Given VehicleBookings', () => {
  const defaultProps: VehicleBookingProps = {
    bookings: [
      {
        date: new Date('April 14, 2023'),
        title: 'Booking 1',
        description: 'Description 1',
      },
      {
        date: new Date('December 18, 2023'),
        title: 'Booking 2',
        description: 'Description 2',
      },
      {
        date: new Date('January 2, 2025'),
        title: 'Booking 3',
        description: 'Description 3',
      },
    ],
  };

  it('Renders a list of bookings', () => {
    const { getAllByTestId, getByText } = render(<VehicleBookings {...defaultProps} />);
    const bookings = getAllByTestId('vehicle-booking');
    // const [firstBooking, secondBooking, thirdBooking] = bookings;

    expect(bookings.length).toEqual(defaultProps.bookings.length);
  });
});
