import React from "react";
import { Link } from "react-router-dom";

const categories = [
   { name: "Necklaces", image: `${process.env.PUBLIC_URL}/images/necklace1.jpg` },
  { name: "Earrings", image: `${process.env.PUBLIC_URL}/images/earrings1.jpg` },
  { name: "Bangles", image: `${process.env.PUBLIC_URL}/images/bangle1.jpg` },
  { name: "Scrunchies", image: `${process.env.PUBLIC_URL}/images/scrunchie1.jpg` },
];

const CollectionsPage = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Our Collections</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {categories.map((cat) => (
          <Link
            key={cat.name}
            to={`/category/${cat.name}`}
            style={{
              textDecoration: "none",
              color: "black",
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "10px",
              transition: "0.3s",
            }}
          >
            <img
              src={cat.image}
              alt={cat.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <h2>{cat.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CollectionsPage;
