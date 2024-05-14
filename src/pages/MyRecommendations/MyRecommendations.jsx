import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";

const MyRecommendations = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);
  const recommendations = useLoaderData();
  const loggedUserRecommendations = recommendations.filter(
    (recommendation) => recommendation.recommenderUserEmail === user.email
  );
  console.log(loggedUserRecommendations);
  return (
    <div>
      <div className="container p-2 mx-auto sm:p-4 text-gray-100 dark:text-gray-800 text-gray-100 dark:text-gray-800">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
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
              {loggedUserRecommendations.map((recommendation) => (
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
                    <button className="btn btn-secondary w-20 h-6 px-4">
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
