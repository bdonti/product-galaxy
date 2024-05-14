import { useEffect, useState } from "react";
import Query from "../Query/Query";

const Queries = () => {
  const [queries, setQueries] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/recentQueriesNoLimit")
      .then((res) => res.json())
      .then((data) => setQueries(data));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6">
        {queries.map((query) => (
          <Query key={query._id} query={query}></Query>
        ))}
      </div>
    </div>
  );
};

export default Queries;
