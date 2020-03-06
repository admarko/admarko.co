import React, { useEffect, useState } from "react";
import butter from "../butter-client";
import NoteSnippet from "./NoteSnippet";
import Footer from "./Footer";
import Header from "./Header";

export default function Notes() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState({ data: [] });

  const fetchPosts = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await butter.post.list({
        page: 1,
        page_size: 10,
        locale: "en"
      });
      setData(response.data);
    } catch (e) {
      console.log(`There was an error: ${e.message}`);
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  function getPosts() {
    return (
      <div>
        {data.data.map((post, i) => (
          <NoteSnippet {...post} key={i} />
        ))}
      </div>
    );
  }

  function getContent() {
    if (loading) return <p>Fetching posts...</p>;
    if (error) return <p>{error}</p>;
    if (!data) return null;
    return getPosts();
  }

  return (
    <div>
      <Header />
      <div>
        <h1>Notes</h1>
        {getContent()}
      </div>
      <Footer />
    </div>
  );
}
