import { useContext } from "react";
import feedbackImg from "../../assets/feedback_banner.jpg";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const PostReview = () => {
  const { user } = useContext(AuthContext);

  const handleSubmitFeedback = (e) => {
    e.preventDefault();
    const form = e.target;
    const feedback = form.feedback.value;

    fetch("https://product-galaxy.vercel.app/feedbacks")
      .then((res) => res.json())
      .then((feedbacks) => {
        const userFeedback = feedbacks.find(
          (fb) => fb.userEmail === user.email
        );
        if (userFeedback) {
          toast.error("You have already provided your feedback");
          return;
        }

        const newFeedBack = {
          userEmail: user.email,
          userName: user.displayName,
          userImage: user.photoURL,
          feedback,
        };

        fetch("https://product-galaxy.vercel.app/feedbacks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newFeedBack),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              toast.success("Feedback Added Successfully");
              form.reset();
            } else {
              toast.error("Failed to add feedback");
            }
          });
      });
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
                  name="feedback"
                  placeholder="Please Write Your Thoughts"
                  className="p-4 rounded-md resize-none dark:text-gray-800 dark:bg-gray-50 w-full"
                ></textarea>
                <div>
                  <button
                    type="submit"
                    className="py-4 my-8 font-semibold rounded-md dark:text-gray-50 dark:bg-violet-600 w-3/4 flex justify-center items-center mx-auto"
                  >
                    Post Feedback
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostReview;
