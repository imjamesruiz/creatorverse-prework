import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../client";

export default function EditCreator() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: "",
  });
  const [loading, setLoading] = useState(true);

  // Fetch creator to prefill the form
  useEffect(() => {
    async function fetchCreator() {
      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching creator:", error);
      } else if (data) {
        setForm(data);
      }
      setLoading(false);
    }
    fetchCreator();
  }, [id]);

  // Update creator
  async function handleSubmit(e) {
    e.preventDefault();

    const { error } = await supabase
      .from("creators")
      .update({
        name: form.name,
        url: form.url,
        description: form.description,
        imageURL: form.imageURL,
      })
      .eq("id", id);

    if (error) {
      console.error("Error updating creator:", error);
      alert("❌ Failed to update creator");
    } else {
      alert("✅ Creator updated!");
      navigate(`/creator/${id}`);
    }
  }

  if (loading) return <p>Loading creator...</p>;

  return (
    <div>
      <h2 className="page-title">✏️ Edit Creator</h2>
      <form className="creator-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="url"
          placeholder="URL"
          value={form.url}
          onChange={(e) => setForm({ ...form, url: e.target.value })}
          required
        />
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
        />
        <input
          type="url"
          placeholder="Image URL (optional)"
          value={form.imageURL || ""}
          onChange={(e) => setForm({ ...form, imageURL: e.target.value })}
        />

        <div style={{ marginTop: "1rem" }}>
          <button type="submit" className="submit-btn">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
