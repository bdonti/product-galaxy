import { useContext } from "react";
import feedbackImg from "../../assets/feedback_banner.jpg";
import { AuthContext } from "../../providers/AuthProvider";

const PostReview = () => {
  const { user } = useContext(AuthContext);
  const handleSubmitFeedback = (e) => {
    e.preventDefault();
  };
  return (
    <div className="my-4">
      <div
        className="w-full rounded-xl bg-gray-500 dark:bg-gray-500"
        style={{
          backgroundImage: `url(${feedbackImg})`,
          backgroundPosition: "center center",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
        }}
      >
        <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
          <h1 className="text-5xl antialiased font-semibold leading-none text-center text-gray-100">
            Feedback
          </h1>
          <p className="pt-2 pb-8 text-xl antialiased text-center text-gray-100">
            Please post your thoughts on how we can improve
          </p>
          <div className="flex flex-row">
            <div className="flex flex-col w-full">
              <form onSubmit={handleSubmitFeedback}>
                <textarea
                  rows="3"
                  placeholder="Please Write Your Thoughts"
                  className="p-4 rounded-md resize-none dark:text-gray-800 dark:bg-gray-50"
                ></textarea>
                <button
                  type="button"
                  className="py-4 my-8 font-semibold rounded-md dark:text-gray-50 dark:bg-violet-600"
                >
                  Post Feedback
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostReview;
