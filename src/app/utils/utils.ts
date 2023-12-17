import vehicles from '../../api/vehicles.json';
import { BatteryStatus, EngineStatus } from '../components/shared.types';

export const getRandomVehicleId = (): number => Math.floor(Math.random() * vehicles.length);

export const getRandomBatteryStatus = (): BatteryStatus =>
  Math.floor(Math.random() * 2) > 0 ? 'Good' : 'Critical';

export const getStatusColor = (status: BatteryStatus | EngineStatus) => {
  switch (status) {
    case 'Good':
      return 'bg-green-200';
    case 'Bad':
      return 'bg-red-200';
    case 'Critical':
      return 'bg-red-300';
  }
};
