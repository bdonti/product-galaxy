import { Link } from "react-router-dom";
import bannerImg from "../../assets/banner.jpg";
const Banner = () => {
  return (
    <div>
      <section className="bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800 mt-5">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-3xl font-bold leading-none sm:text-6xl text-violet-400 dark:text-violet-600">
              Get queries
              <span className="ml-2">about product today</span>
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 font-semibold">
              Welcome to Product Galaxy! We are committed to providing
              comprehensive assistance for product-related inquiries. In case
              you have questions about our products, our group can give you
              range of recommendations to fix your issue.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                to="/queries"
                className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50"
              >
                All Queries
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={bannerImg}
              alt="User Queries"
              className="object-contain h-96 sm:h-80 lg:h-[600px] xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
