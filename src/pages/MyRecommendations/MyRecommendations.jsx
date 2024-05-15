import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyRecommendations = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);
  const recommendations = useLoaderData();
  const loggedUserRecommendations = recommendations.filter(
    (recommendation) => recommendation.recommenderUserEmail === user.email
  );
  const [remainingRecommendations, setRemainingRecommendations] = useState(
    loggedUserRecommendations
  );
  console.log(loggedUserRecommendations);

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: `Are you sure you want to delete`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://product-galaxy.vercel.app/recommendations/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Recommendation Data has been deleted.",
                icon: "success",
              });
            }
            const remaining = loggedUserRecommendations.filter(
              (recommendation) => recommendation._id !== id
            );
            console.log("Remaining recommendations:", remaining);
            setRemainingRecommendations(remaining);
          });
        console.log("Delete Confirmed");
      }
    });
  };

  return (
    <div>
      <div className="container p-2 mx-auto sm:p-4 text-gray-100 dark:text-gray-800 text-gray-100 dark:text-gray-800">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">
          My Recommendations
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup>
            <thead className="bg-gray-700 dark:bg-gray-300 bg-gray-700 dark:bg-gray-300">
              <tr className="text-left">
                <th className="p-3">Recommendation #</th>
                <th className="p-3">Product Recommended Image</th>
                <th className="p-3">Recommended Product Name</th>
                <th className="p-3">Recommended Date</th>
                <th className="p-3">Delete</th>
              </tr>
            </thead>
            <tbody>
              {remainingRecommendations.map((recommendation) => (
                <tr key={recommendation._id}>
                  <td className="p-3">
                    <p>{recommendation._id}</p>
                  </td>
                  <td className="p-3">
                    <img
                      alt=""
                      className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-violet-600 dark:ring-offset-gray-100"
                      src={recommendation.recommendationUrl}
                    />
                  </td>
                  <td className="p-3">
                    <p className="dark:text-gray-600">
                      {recommendation.recommendationName}
                    </p>
                  </td>
                  <td className="p-3">
                    <p className="dark:text-gray-600">
                      {recommendation.currentDate}
                    </p>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(recommendation._id)}
                      className="btn btn-secondary w-20 h-6 px-4"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyRecommendations;
