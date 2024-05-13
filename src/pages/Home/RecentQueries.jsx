import { useEffect, useState } from "react";
import RecentQuery from "./RecentQuery";

const RecentQueries = () => {
  const [queries, setQueries] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/recentQueries")
      .then((res) => res.json())
      .then((data) => setQueries(data));
  }, []);

  return (
    <div>
      <h1 className="font-bold text-center text-2xl my-4">Recent Queries</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {queries.map((query) => (
          <RecentQuery key={query._id} query={query}></RecentQuery>
        ))}
      </div>
    </div>
  );
};

export default RecentQueries;
