import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getStatusColor } from '../utils/utils';
import { BatteryStatus, EngineStatus } from './shared.types';
import { faCarBattery, faCar } from '@fortawesome/free-solid-svg-icons';

export enum VehicleParts {
  BATTERY = 'Battery',
  ENGINE = 'Engine',
}

export type VehiclePartInformationProps = {
  batteryStatus: BatteryStatus;
  engineStatus: EngineStatus;
};

const VehiclePartInformation = ({ batteryStatus, engineStatus }: VehiclePartInformationProps) => {
  return (
    <div className="flex items-center">
      <div className="w-full p-4">
        <div className="grid grid-cols-2 gap-4">
          {Object.values(VehicleParts).map(part => {
            const partStatus = part === VehicleParts.BATTERY ? batteryStatus : engineStatus;
            return (
              <div className="sm:col-span-1 " key={part}>
                <div className="flex flex-row rounded-lg bg-white p-4 shadow-sm">
                  <div
                    data-testid={`${part.toLocaleLowerCase()}-icon-container`}
                    className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${getStatusColor(
                      partStatus,
                    )}`}
                  >
                    <FontAwesomeIcon
                      icon={part === VehicleParts.BATTERY ? faCarBattery : faCar}
                      style={{ color: '#000000' }}
                      data-testid={`${part.toLocaleLowerCase()}-icon`}
                    />
                  </div>
                  <div
                    className="ml-4 flex flex-grow flex-col"
                    data-testid={`${part.toLocaleLowerCase()}-status`}
                  >
                    <p className="text-lg font-bold">{part}</p>
                    <p className="text-gray-00 text-sm">{partStatus}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VehiclePartInformation;
