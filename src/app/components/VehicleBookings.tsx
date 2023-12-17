import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { VehicleBooking } from './shared.types';

export type VehicleBookingProps = {
  bookings: Array<VehicleBooking>;
};

const VehicleBookings = ({ bookings }: VehicleBookingProps) => {
  return (
    <>
      <div className="flex items-center">
        <div className="text-md w-full p-4 font-bold">
          <p>Bookings</p>
        </div>
        <div className="text-md flex w-full items-center justify-end space-x-2 p-4">
          <a className="underline underline-offset-2" href="/">
            View history
          </a>
          <FontAwesomeIcon icon={faCalendar} style={{ color: '#000000' }} />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-md w-full p-4">
          {bookings.map(({ title, description, date }, index) => {
            const [weekday, day, month] = new Intl.DateTimeFormat('es-GB', {
              day: 'numeric',
              weekday: 'short',
              month: 'short',
            })
              .format(date)
              .replace(',', '')
              .split(' ');

            return (
              <div
                className="h-1/3flex-row mt-2 flex w-full rounded-lg border-2 border-black bg-white p-4 shadow-sm"
                key={index}
                data-testid={`vehicle-booking`}
              >
                <div className="flex h-14 w-14 flex-col  items-center justify-center rounded bg-black text-xs text-white">
                  <p>{weekday.toUpperCase()}</p>
                  <p className="text-sm font-bold">{day}</p>
                  <p>{month.toUpperCase()}</p>
                </div>
                <div className="ml-4 flex flex-grow flex-col" data-testid="booking-details">
                  <div className="text-lg font-bold">{title}</div>
                  <div className="text-sm text-gray-500">{description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default VehicleBookings;
