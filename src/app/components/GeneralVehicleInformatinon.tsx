import { getStatusColor } from '../utils/utils';
import { BatteryStatus } from './shared.types';

export type GeneralVehicleInformatinonProps = {
  manufacturer?: string;
  model?: string;
  year?: number;
  batteryStatus: BatteryStatus;
};

const GeneralVehicleInformatinon = ({
  manufacturer,
  model,
  year,
  batteryStatus,
}: GeneralVehicleInformatinonProps) => {
  return (
    <div className="flex items-center">
      <div className="w-full p-4">
        <div className="flex flex-row rounded-lg bg-white p-4 shadow-sm">
          <div className="ml-4 flex flex-grow flex-col">
            <div className="text-md font-bold">General car health</div>
            <div className="flex flex-row items-center">
              <div className="text-sm text-gray-500">{batteryStatus}</div>
              <span className={`ml-1 h-2 w-2 rounded-full ${getStatusColor(batteryStatus)}`}></span>
            </div>
          </div>
          <div className="ml-4 flex flex-grow flex-col">
            <div className="text-md font-bold">{manufacturer}</div>
            <div className="text-sm text-gray-500">{`${model}, ${year}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralVehicleInformatinon;
