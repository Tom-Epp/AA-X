export type Status = 'Good' | 'Critical';
export type BatteryStatus = Status;
export type EngineStatus = 'Bad' | Status;
export type VehicleBooking = {
  date: Date;
  title: string;
  description: string;
};
