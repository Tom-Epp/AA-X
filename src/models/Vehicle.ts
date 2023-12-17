export default class Vehicle {
  constructor(
    private readonly _id: number,
    private readonly _manufacturer: string,
    private readonly _model: string,
    private readonly _year: number,
    private readonly _vin: string,
  ) {}

  get id(): number {
    return this._id;
  }

  get manufacturer(): string {
    return this._manufacturer;
  }

  get model(): string {
    return this._model;
  }

  get year(): number {
    return this._year;
  }

  get vin(): string {
    return this._vin;
  }
}
