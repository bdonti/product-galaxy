import Banner from "./Banner";
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
    </div>
  );
};

export default Home;
