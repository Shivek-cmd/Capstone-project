import React, { useState, useEffect } from "react";

function NewsData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async (retryCount = 3) => {
      const url =
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e86ba16fd4464d8ea0dc0d25d4af5c44";

      try {
        const response = await fetch(url);
        if (response.status === 429 && retryCount > 0) {
          // If rate limit error occurs, wait and retry
          setTimeout(() => fetchNews(retryCount - 1), 1000);
          return;
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data || !data.articles || data.articles.length === 0) {
    return <div>No data available</div>;
  }

  const firstItem = data.articles[1];

  return (
    <div
      style={{
        position: "relative",
        height: "100%",
        width: "100%",
        borderRadius: "20px",
        backgroundColor: "white",
      }}
    >
      <img
        src={firstItem.urlToImage}
        width="100%"
        height="60%"
        alt="thumbnail"
        style={{ borderRadius: "5px 5px 0 0" }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 238,
          left: 0,
          width: "100%",
          background: "rgba(0, 0, 0, 0.2)",
          padding: "8px",
          boxSizing: "border-box",
          borderBottomLeftRadius: "5px",
          borderBottomRightRadius: "5px",
        }}
      >
        <p style={{ margin: 0, color: "white", fontWeight: "bold" }}>
          {firstItem.title}
        </p>
      </div>
      <p style={{ color: "black", padding: "10px" }}>{firstItem.description}</p>
    </div>
  );
}

export default NewsData;
