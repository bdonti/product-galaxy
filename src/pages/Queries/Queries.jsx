import { useEffect, useState } from "react";
import Query from "../Query/Query";

const Queries = () => {
  const [queries, setQueries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/recentQueriesNoLimit")
      .then((res) => res.json())
      .then((data) => setQueries(data));
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredQueries = queries.filter((query) =>
    query.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-center items-center">
        <input
          type="text"
          placeholder="Search Product Name For Queries"
          className="input input-bordered input-primary w-full max-w-xs"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6">
        {filteredQueries.map((query) => (
          <Query key={query._id} query={query}></Query>
        ))}
      </div>
    </div>
  );
};

export default Queries;
