'use client';
import { useEffect, useState } from 'react';
import VehiclePartsInformation from './components/VehiclePartInformation';
import GeneralVehicleInformatinon from './components/GeneralVehicleInformatinon';
import VehicleView from './components/VehicleView';
import VehicleBookings from './components/VehicleBookings';
import GetVehicleDataRequest from '@/api/GetVehicleDataRequest';
import Vehicle from '@/models/Vehicle';
import { BatteryStatus, VehicleBooking } from './components/shared.types';
import { getRandomVehicleId, getRandomBatteryStatus } from './utils/utils';

export default function Home() {
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);

  useEffect(() => {
    const vehicle = new GetVehicleDataRequest(getRandomVehicleId()).getResponse();
    setVehicle(vehicle);
  }, []);

  const batteryStatus: BatteryStatus = getRandomBatteryStatus();
  const bookings: Array<VehicleBooking> = [
    {
      date: new Date('April 14, 2023'),
      title: 'MOT Due Date',
      description: "Let's get you booked Into a garage!",
    },
    {
      date: new Date('December 18, 2023'),
      title: 'Full service',
      description: "Let's get you booked Into a garage!",
    },
  ];

  return (
    <main className="container mx-auto min-h-screen text-black">
      <GeneralVehicleInformatinon
        manufacturer={vehicle?.manufacturer}
        model={vehicle?.model}
        year={vehicle?.year}
        batteryStatus={batteryStatus}
      />
      <VehicleView />
      <VehiclePartsInformation batteryStatus={batteryStatus} engineStatus="Good" />
      <VehicleBookings bookings={bookings} />
    </main>
  );
}
