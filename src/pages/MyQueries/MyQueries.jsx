import { Link } from "react-router-dom";
import queryImg from "../../assets/add_query.jpg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyQuery from "../MyQuery/MyQuery";
const MyQueries = () => {
  const { user } = useContext(AuthContext);
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/queries?userEmail=${user.email}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setQueries(data);
      });
  }, [user]);

  return (
    <div>
      <div
        className="w-full lg:h-72 bg-gray-500 rounded-xl"
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

      <div>
        <h1 className="text-center font-bold text-2xl mt-8">My Queries</h1>
        <div className="grid grid-cols-3 gap-8 mx-auto container mt-8">
          {queries.length === 0 ? (
            <>
              <div className="font-bold col-span-3 text-3xl flex justify-center items-center">
                No Queries Found. Please Add if you have any!!
              </div>
            </>
          ) : (
            queries.map((query) => (
              <MyQuery
                key={query._id}
                query={query}
                queries={queries}
                setQueries={setQueries}
              ></MyQuery>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MyQueries;
