import { useEffect, useState } from "react";
import { supabase } from "../client";
import { Link } from "react-router-dom";
import CreatorCard from "../components/CreatorCard";

export default function ShowCreators() {
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCreators() {
      const { data, error } = await supabase.from("creators").select("*");
      if (error) {
        console.error("Error fetching creators:", error);
      } else {
        setCreators(data);
      }
      setLoading(false);
    }
    fetchCreators();
  }, []);

  return (
    <div>
      <h2 className="page-title">🌟 All Creators</h2>

      {/* Add Creator button */}
      <Link to="/add">
        <button className="add-btn">➕ Add New Creator</button>
      </Link>

      {/* Conditional rendering */}
      {loading ? (
        <p>Loading creators...</p>
      ) : creators.length === 0 ? (
        <p>No creators found. Add one to get started!</p>
      ) : (
        <div className="card-grid">
          {creators.map((c) => (
            <Link
              to={`/creator/${c.id}`}
              key={c.id}
              style={{ textDecoration: "none" }}
            >
              <CreatorCard {...c} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
