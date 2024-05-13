import PropTypes from "prop-types";

const RecentQuery = ({ query }) => {
  const {
    brand,
    url,
    productName,
    queryTitle,
    boycottReason,
    userImage,
    userName,
    currentDate,
  } = query;
  return (
    <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 mb-4">
      <div className="flex items-center space-x-4">
        <img
          alt=""
          src={userImage}
          className="object-cover w-12 h-12 rounded-full shadow bg-gray-500 dark:bg-gray-500"
        />
        <div>
          <p className="text-sm font-semibold">{userName}</p>
          <span className="text-xs text-gray-400 dark:text-gray-600">
            {currentDate}
          </span>
        </div>
      </div>
      <div>
        <img
          src={url}
          alt="product"
          className="rounded-xl object-cover w-full mb-4 h-60 bg-gray-500 dark:bg-gray-500"
        />
        <h2 className="mb-1 text-2xl font-semibold">{queryTitle}</h2>
        <h4 className="mb-1 text-sm font-bold">{productName}</h4>
        <p className="mb-2 font-semibold">Brand Name: {brand}</p>
        <p className="text-sm text-gray-400 dark:text-gray-600">
          {boycottReason}
        </p>
      </div>
    </div>
  );
};

RecentQuery.propTypes = {
  query: PropTypes.object.isRequired,
};

export default RecentQuery;
