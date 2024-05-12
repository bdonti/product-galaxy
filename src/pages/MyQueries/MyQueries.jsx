import { MdOutlineQueryBuilder } from "react-icons/md";
import { Link } from "react-router-dom";
import queryImg from "../../assets/add_query.jpg";
const MyQueries = () => {
  return (
    <div>
      <div
        className="w-full lg:h-80 bg-gray-500 rounded-xl"
        style={{
          backgroundImage: `url(${queryImg})`,
          backgroundPosition: "center center",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
        }}
      >
        <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
          <h1 className="text-5xl antialiased font-semibold leading-none text-center text-gray-100">
            Add Your Queries Today
          </h1>
          <p className="pt-2 pb-8 text-xl antialiased text-center text-gray-100">
            You can add any issue regarding our products by filling out a form.
            Please Proceed.
          </p>
          <div>
            <Link to="/addQuery" className="flex justify-center">
              <button
                type="button"
                className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-violet-400 text-gray-900"
              >
                Add Query
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyQueries;
