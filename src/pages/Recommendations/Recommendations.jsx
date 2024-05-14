import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Recommendations = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);
  const recommendations = useLoaderData();
  const loadRecommendations = recommendations.filter(
    (recommendation) => recommendation.userEmail === user.email
  );
  console.log(loadRecommendations);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>My Query</th>
              <th>Recommended Product</th>
              <th>Recommended Product Image</th>
              <th>Recommender Mail</th>
            </tr>
          </thead>
          <tbody>
            {loadRecommendations.map((recommendation) => (
              <tr key={recommendation._id}>
                <td>{recommendation.queryTitle}</td>
                <td>{recommendation.recommendationName}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={recommendation.recommendationUrl}
                        alt="Recommended Product"
                      />
                    </div>
                  </div>
                </td>
                <td>{recommendation.recommenderUserEmail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Recommendations;
