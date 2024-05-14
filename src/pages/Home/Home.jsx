import Banner from "./Banner";
import LatestReviews from "./LatestReviews";
import PostReview from "./PostReview";
import RecentQueries from "./RecentQueries";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <RecentQueries></RecentQueries>
      <Services></Services>
      <PostReview></PostReview>
      <LatestReviews></LatestReviews>
    </div>
  );
};

export default Home;
