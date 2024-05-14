import PropTypes from "prop-types";
import { FaCircleArrowRight } from "react-icons/fa6";
const ProductComment = ({ recommendation }) => {
  console.log(recommendation);
  return (
    <div>
      <section className="my-8 bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800">
        <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
          <div className="flex justify-center items-center space-x-3">
            <FaCircleArrowRight className="text-blue-500 font-bold" />
            <img
              src={recommendation.recommendationUrl}
              alt="product_recommended"
              className="w-20 h-20 bg-center bg-cover rounded-md bg-gray-500"
            />
            <div className="flex flex-col justify-center">
              <p className="leading-tight text-xs">Recommended Product</p>
              <p className="text-sm leading-tight font-bold">
                {recommendation.recommendationName}
              </p>
            </div>
          </div>
          <p className="px-6 font-semibold text-center sm:font-bold  text-gray-300 dark:text-gray-700">
            {recommendation.recommendationReason}
          </p>
        </div>
      </section>
    </div>
  );
};

ProductComment.propTypes = {
  recommendation: PropTypes.obj,
};

export default ProductComment;
