import { useEffect, useState } from "react";
import Query from "../Query/Query";
import { TbColumns3, TbColumns2, TbColumns1 } from "react-icons/tb";

const Queries = () => {
  const [queries, setQueries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [layout, setLayout] = useState("three-columns");

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
      <div className="flex justify-center items-center mb-4">
        <input
          type="text"
          placeholder="Search Product Name For Queries"
          className="input input-bordered input-primary w-full max-w-xs mr-4"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button
          className={`btn ${layout === "three-columns" ? "bg-blue-400" : ""}`}
          onClick={() => setLayout("three-columns")}
        >
          <TbColumns3 className="w-8 h-8" />
        </button>
        <button
          className={`btn ${layout === "two-columns" ? "bg-blue-400" : ""}`}
          onClick={() => setLayout("two-columns")}
        >
          <TbColumns2 className="w-8 h-8" />
        </button>
        <button
          className={`btn ${layout === "one-column" ? "bg-blue-400" : ""}`}
          onClick={() => setLayout("one-column")}
        >
          <TbColumns1 className="w-8 h-8" />
        </button>
      </div>
      <div
        className={`grid gap-6 ${
          layout === "one-column"
            ? "grid-cols-1"
            : layout === "two-columns"
            ? "grid-cols-1 md:grid-cols-2"
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {filteredQueries.map((query) => (
          <Query key={query._id} query={query} />
        ))}
      </div>
    </div>
  );
};

export default Queries;
