import PropTypes from "prop-types";
import { FaQuestion } from "react-icons/fa";

const MyQuery = ({ query }) => {
  const { brand, url, productName, queryTitle, currentDate } = query;
  return (
    <div className="w-full overflow-hidden rounded-lg shadow-lg bg-gray-900 text-gray-100">
      <div
        className="flex items-end justify-end h-44 p-4 bg-gray-500 bg-center bg-cover"
        style={{
          backgroundImage: `url(${url})`,
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="px-2 py-2 text-sm tracking-widest text-gray-100 uppercase bg-gray-800 bg-opacity-75 rounded shadow-lg">
            {brand}
          </p>
          <p className="px-2 py-1 text-sm tracking-widest text-gray-100 uppercase bg-gray-800 bg-opacity-75 rounded shadow-lg mb-2">
            Post Date: {currentDate}
          </p>
        </div>
      </div>
      <div className="flex justify-between p-4">
        <div className="flex flex-col flex-1 gap-4">
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <p className="text-2xl font-semibold">{productName}</p>
              <p className="text-lg text-gray-400">{queryTitle}</p>
            </div>
            <FaQuestion className="w-12 h-12 text-red-400 fill-current shrink-0" />
          </div>
        </div>
        <div className="text-sm leading-loose">
          <div className="flex items-center"></div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-8 p-4 border-t text-gray-400 border-gray-700">
        <div className="flex items-center space-x-1">
          <button className="btn btn-info">View Details</button>
        </div>
        <div className="flex items-center space-x-1">
          <button className="btn btn-accent">Update</button>
        </div>
        <div className="flex items-center space-x-1">
          <button className="btn btn-warning">Delete</button>
        </div>
      </div>
    </div>
  );
};

MyQuery.propTypes = {
  query: PropTypes.obj,
};

export default MyQuery;
