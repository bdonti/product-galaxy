import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Query = ({ query }) => {
  const {
    _id,
    productName,
    brand,
    url,
    queryTitle,
    boycottReason,
    userImage,
    userName,
    currentDate,
  } = query;
  return (
    <div className="card w-full shadow-xl relative">
      <figure className="relative">
        <img src={url} alt="Shoes" />
        <div className="absolute bottom-2 right-4 bg-white bg-opacity-75 p-2">
          <p className="text-xs font-bold">{productName}</p>
          <p className="text-xs">Brand: {brand}</p>
        </div>
      </figure>
      <div className="card-actions justify-end gap-6 mt-4">
        <div className="avatar tooltip" data-tip={userName}>
          <div className="w-6 h-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={userImage} />
          </div>
        </div>
        <div className="badge badge-outline font-bold">{currentDate}</div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{queryTitle}</h2>
        <p>{boycottReason}</p>
        <div className="flex justify-center mt-5">
          <Link to={`/queryDetail/${_id}`}>
            <button className="btn btn-outline btn-primary">Recommend</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Query.propTypes = {
  query: PropTypes.object,
};

export default Query;
