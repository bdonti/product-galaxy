import PropTypes from "prop-types";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyQuery = ({ query, queries, setQueries }) => {
  const [updatedQuery, setUpdatedQuery] = useState(query);
  const {
    _id,
    brand,
    url,
    productName,
    queryTitle,
    currentDate,
    boycottReason,
  } = updatedQuery;

  const handleUpdateClick = (id) => {
    document.getElementById(`update_modal_${id}`).showModal();
  };

  const handleUpdateQuery = (event) => {
    event.preventDefault();

    const form = event.target;
    const productName = form.name.value;
    const brand = form.brand.value;
    const queryTitle = form.title.value;
    const boycottReason = form.reason.value;

    const updateQuery = {
      ...updatedQuery,
      productName,
      brand,
      queryTitle,
      boycottReason,
    };

    fetch(`https://product-galaxy.vercel.app/queries/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateQuery),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          setUpdatedQuery(updateQuery);
          toast.success("Your Query Updated Successfully");
          form.reset();
        }
      });
  };

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: `Are you sure you want to delete your query`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://product-galaxy.vercel.app/queries/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Query has been deleted.",
                icon: "success",
              });
            }
            const remaining = queries.filter((query) => query._id !== id);
            console.log("Remaining Queries:", remaining);
            setQueries(remaining);
          });
        console.log("Delete Confirmed");
      }
    });
  };

  return (
    <div className="w-full overflow-hidden rounded-lg shadow-lg bg-gray-900 text-gray-100 h-full">
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
          <Link to={`/queryDetail/${_id}`}>
            <button className="btn btn-info">View Details</button>
          </Link>
        </div>
        <div className="flex items-center space-x-1">
          <button
            className="btn btn-accent"
            onClick={() => handleUpdateClick(_id)}
          >
            Update
          </button>
          <dialog id={`update_modal_${_id}`} className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">
                Update your query for {productName}
              </h3>
              <div className="flex flex-col w-full max-w-md p-12 space-y-4 text-center bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
                <div className="flex items-center justify-center text-center dark:bg-gray-50 dark:text-gray-800">
                  <div className="flex items-center justify-center text-center bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
                    <form
                      onSubmit={handleUpdateQuery}
                      className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg text-gray-100 dark:text-gray-800"
                    >
                      <label
                        htmlFor="name"
                        className="self-start text-xs font-semibold"
                      >
                        Product Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        defaultValue={productName}
                        className="flex items-center h-12 px-4 mt-2 rounded text-gray-900 focus:outline-none focus:ring-2 focus:border-violet-400 focus:dark:border-violet-600 focus:ring-violet-400 focus:dark:ring-violet-600"
                      />
                      <label
                        htmlFor="brand"
                        className="self-start text-xs font-semibold"
                      >
                        Product Brand
                      </label>
                      <input
                        id="brand"
                        name="brand"
                        type="text"
                        defaultValue={brand}
                        className="flex items-center h-12 px-4 mt-2 rounded text-gray-900 focus:outline-none focus:ring-2 focus:border-violet-400 focus:dark:border-violet-600 focus:ring-violet-400 focus:dark:ring-violet-600"
                      />
                      <label
                        htmlFor="brand"
                        className="self-start text-xs font-semibold"
                      >
                        Query Title
                      </label>
                      <textarea
                        id="title"
                        name="title"
                        type="text"
                        defaultValue={queryTitle}
                        className="flex items-center h-12 px-4 mt-2 rounded text-gray-900 focus:outline-none focus:ring-2 focus:border-violet-400 focus:dark:border-violet-600 focus:ring-violet-400 focus:dark:ring-violet-600 textarea textarea-bordered textarea-md w-full max-w-xs"
                      />
                      <label
                        htmlFor="brand"
                        className="self-start text-xs font-semibold"
                      >
                        Boycott Reason
                      </label>
                      <textarea
                        id="reason"
                        name="reason"
                        type="text"
                        defaultValue={boycottReason}
                        className="flex items-center h-20 px-4 mt-2 rounded text-gray-900 focus:outline-none focus:ring-2 focus:border-violet-400 focus:dark:border-violet-600 focus:ring-violet-400 focus:dark:ring-violet-600 textarea textarea-bordered textarea-md w-full max-w-xs"
                      />
                      <button
                        type="submit"
                        className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50"
                      >
                        Update
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn btn-secondary">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
        <div className="flex items-center space-x-1">
          <button onClick={() => handleDelete(_id)} className="btn btn-warning">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

MyQuery.propTypes = {
  query: PropTypes.object,
  queries: PropTypes.array,
  setQueries: PropTypes.func,
};

export default MyQuery;
