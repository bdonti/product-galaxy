import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const AddQuery = () => {
  const { user } = useContext(AuthContext);

  const handleAddQueries = (event) => {
    event.preventDefault();
    const form = event.target;
    const url = form.url.value;
    const productName = form.name.value;
    const brand = form.brand.value;
    const queryTitle = form.title.value;
    const boycottReason = form.reason.value;

    const newQuery = {
      url,
      productName,
      brand,
      queryTitle,
      boycottReason,
      userEmail: user.email,
      userName: user.displayName,
      userImage: user.photoURL,
      currentDate: new Date().toDateString(),
      recommendationCount: 0,
    };

    fetch("http://localhost:5000/queries", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newQuery),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Query Successfully Added");
          form.reset();
        }
      });
  };

  return (
    <div>
      <section className="p-6 bg-slate-400 text-gray-50 rounded-xl mt-5">
        <form
          onSubmit={handleAddQueries}
          className="container flex flex-col mx-auto space-y-12 rounded-xl"
        >
          <fieldset className="text-center text-2xl font-bold text-gray-600">
            Add Your Query
          </fieldset>
          <fieldset className="p-6 rounded-md shadow-sm bg-sky-800">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="name" className="text-sm">
                  Product Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Product name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 px-2"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="brand" className="text-sm">
                  Product Brand
                </label>
                <input
                  id="brand"
                  name="brand"
                  type="text"
                  placeholder="Product brand"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 px-2"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="url" className="text-sm">
                  Product Image URL
                </label>
                <input
                  id="url"
                  name="url"
                  type="text"
                  placeholder="Enter Image Url"
                  className="w-full px-2 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="query-title" className="text-sm">
                  Query Title
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  placeholder="Query Title"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>

              <div className="col-span-full">
                <label htmlFor="reason" className="text-sm">
                  Boycotting Reason Details
                </label>
                <input
                  id="reason"
                  name="reason"
                  type="text"
                  placeholder="Please Enter Your Details"
                  className="w-full h-24 px-4 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>
            </div>
          </fieldset>
          <div className="w-full flex justify-center">
            <button className="w-full bg-violet-800 rounded-lg font-bold px-4 py-4">
              Add Query
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddQuery;
