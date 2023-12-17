import Vehicle from '@/models/Vehicle';
import vehicles from './vehicles.json';

export default class GetVehicleDataRequest {
  constructor(private readonly id: number) {}

  public getResponse(): Vehicle {
    const vehicle = vehicles.find(vehicle => vehicle.id_ === this.id);
    const { id_, manufacturer, model, year, vin } = vehicle!;

    return new Vehicle(id_, manufacturer, model, year, vin);
  }
}
