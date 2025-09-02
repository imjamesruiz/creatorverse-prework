import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { supabase } from "../client";
import CreatorCard from "../components/CreatorCard";

export default function ViewCreator() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCreator() {
      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching creator:", error);
      } else {
        setCreator(data);
      }
      setLoading(false);
    }

    fetchCreator();
  }, [id]);

  // Delete function
  async function handleDelete() {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this creator? This cannot be undone."
    );
    if (!confirmDelete) return;

    const { error } = await supabase.from("creators").delete().eq("id", id);

    if (error) {
      console.error("Error deleting creator:", error);
      alert("Failed to delete creator");
    } else {
      alert("Creator deleted");
      navigate("/"); // homepage
    }
  }

  if (loading) return <p>Loading creator...</p>;
  if (!creator) return <p>Creator not found.</p>;

  return (
    <div>
      <h2 className="page-title">Creator Profile</h2>
      <div className="card-grid">
        <CreatorCard {...creator} />
      </div>

      {/* Action buttons */}
      <div style={{ marginTop: "1.5rem", textAlign: "center", display: "flex", justifyContent: "center", gap: "1rem" }}>
        <Link to={`/edit/${creator.id}`}>
          <button className="edit-btn">Edit Creator</button>
        </Link>
        <button onClick={handleDelete} className="delete-btn">Delete Creator</button>
      </div>
    </div>
  );
}
