import { useLoaderData } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import ProductComment from "../ProductComment/ProductComment";
import { FaComments } from "react-icons/fa";

const QueryDetail = () => {
  const query = useLoaderData();
  const { user } = useContext(AuthContext);
  const { userEmail, userName, _id, queryTitle, recommendationCount } = query;
  const [currentRecommendationCount, setCurrentRecommendationCount] =
    useState(recommendationCount);
  const [recommendations, setRecommendations] = useState([]);
  //   console.log(query);

  useEffect(() => {
    fetch(`https://product-galaxy.vercel.app/recommendations/${_id}`)
      .then((res) => res.json())
      .then((data) => setRecommendations(data));
  }, [_id]);
  console.log(recommendations);

  const handleSubmitRecommendation = (e) => {
    e.preventDefault();
    const form = e.target;
    const recommendationTitle = form.recommendation_title.value;
    const recommendationName = form.recommendation_name.value;
    const recommendationUrl = form.recommendation_url.value;
    const recommendationReason = form.recommendation_reason.value;

    if (
      !recommendationTitle ||
      !recommendationName ||
      !recommendationUrl ||
      !recommendationReason
    ) {
      toast.error("Please Fill out all the fields");
      return;
    }

    const newRecommendation = {
      recommendationTitle,
      recommendationName,
      recommendationUrl,
      recommendationReason,
      userEmail,
      userName,
      recommenderUserEmail: user.email,
      recommenderUserName: user.displayName,
      query_id: _id,
      queryTitle,
      currentDate: new Date().toLocaleString(),
    };

    fetch("https://product-galaxy.vercel.app/recommendations", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newRecommendation),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Recommendation Successfully Added");
          form.reset();
          setRecommendations((prevRecommendations) => [
            ...prevRecommendations,
            newRecommendation,
          ]);
          fetch(`https://product-galaxy.vercel.app/queries/${_id}`)
            .then((res) => res.json())
            .then((updatedQuery) => {
              setCurrentRecommendationCount(updatedQuery.recommendationCount);
            });
        }
      });
  };

  return (
    <section className="py-6 bg-gray-800 dark:bg-gray-100 text-gray-50 dark:text-gray-900">
      <div className="grid max-w-7xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <article className="max-w-2xl px-6 py-24 mx-auto space-y-12 bg-gray-800 dark:bg-gray-100 text-gray-50 dark:text-gray-900">
          <div className="w-full mx-auto space-y-4 text-center">
            <div className="avatar">
              <div className="w-24 rounded">
                <img src={query.url} />
              </div>
            </div>
            <p className="text-2xl font-semibold tracking-wider uppercase">
              {query.productName}
            </p>
            <p className="text-xs font-semibold tracking-wider uppercase">
              #{query.brand}
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              {query.queryTitle}
            </h1>
            <p className="text-sm text-gray-400 dark:text-gray-600">
              posted on
              <time className="text-blue-500 ml-2 font-bold">
                {query.currentDate}
              </time>
            </p>
          </div>
          <div className="text-gray-100 dark:text-gray-800 text-center">
            <p>{query.boycottReason}</p>
          </div>
          <div className="text-gray-100 dark:text-gray-800 font-bold text-center">
            <p>Total Recommendations: {currentRecommendationCount}</p>
          </div>
          <div className="pt-12 border-t border-gray-700 dark:border-gray-300">
            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="max-w-md p-8 sm:flex sm:space-x-6 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
                <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                  <img
                    src={query.userImage}
                    alt=""
                    className="object-cover object-center w-full h-full rounded bg-gray-500 dark:bg-gray-500"
                  />
                </div>
                <div className="flex flex-col space-y-4">
                  <div>
                    <h2 className="text-xs font-light">Posted user info</h2>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold">{query.userName}</h2>
                  </div>
                  <div className="space-y-1">
                    <span className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        aria-label="Email address"
                        className="w-4 h-4"
                      >
                        <path
                          fill="currentColor"
                          d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                        ></path>
                      </svg>
                      <span className="text-gray-400 dark:text-gray-600">
                        {query.userEmail}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <div className="max-w-3xl px-6 py-24 mx-auto space-y-12 bg-gray-800 dark:bg-gray-100 text-gray-50 dark:text-gray-900">
          <form
            onSubmit={handleSubmitRecommendation}
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
          >
            <label className="block">
              <span className="mb-1">Recommendation Title</span>
              <input
                type="text"
                name="recommendation_title"
                placeholder="Title"
                className="block px-2 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 focus:dark:ring-violet-600 bg-gray-800 dark:bg-gray-100"
              />
            </label>
            <label className="block">
              <span className="mb-1">Recommendation Product Name</span>
              <input
                type="text"
                name="recommendation_name"
                placeholder="Product Name"
                className="block px-2 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 focus:dark:ring-violet-600 bg-gray-800 dark:bg-gray-100"
              />
            </label>
            <label className="block">
              <span className="mb-1">Recommendation Product Image</span>
              <input
                type="text"
                name="recommendation_url"
                placeholder="Product Image"
                className="block px-2 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 focus:dark:ring-violet-600 bg-gray-800 dark:bg-gray-100"
              />
            </label>
            <label className="block">
              <span className="mb-1">Recommendation Reason</span>
              <textarea
                rows="3"
                name="recommendation_reason"
                placeholder="Reason"
                className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 focus:dark:ring-violet-600 bg-gray-800 dark:bg-gray-100 px-2"
              ></textarea>
            </label>
            <button className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 hover:ring-violet-400 hover:dark:ring-violet-600 font-semibold">
              Add Recommendation
            </button>
          </form>
          <div className="flex flex-col justify-center items-center">
            <p className="text-2xl font-bold mb-2">Recommendations</p>
            <FaComments className="text-4xl text-sky-600" />
          </div>
          {recommendations.map((recommendation) => (
            <ProductComment
              key={recommendation._id}
              recommendation={recommendation}
            ></ProductComment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QueryDetail;
