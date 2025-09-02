import { useState } from "react";
import { supabase } from "../client";
import { useNavigate } from "react-router-dom";

export default function AddCreator() {
  const [form, setForm] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: "",
  });
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const { error } = await supabase.from("creators").insert([form]);

    if (error) {
      console.error("Error adding creator:", error);
      alert("Error adding creator!");
    } else {
      alert("Creator added!");
      navigate("/"); // redirect
    }
  }

  return (
    <div>
      <h2 className="page-title">Add a New Creator</h2>
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
          value={form.imageURL}
          onChange={(e) => setForm({ ...form, imageURL: e.target.value })}
        />
        <button type="submit" className="submit-btn">Save</button>
      </form>
    </div>
  );
}
