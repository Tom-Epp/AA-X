import { URLS } from '../utils/constants';

const VehicleView = () => {
  return (
    <div className="my-14 flex items-center justify-center">
      <div className="w-3/4 p-4">
        <img alt="Vehicle Image" src={URLS.LAND_ROVER} />
      </div>
    </div>
  );
};

export default VehicleView;
