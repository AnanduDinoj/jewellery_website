import React from "react";
import { useParams } from "react-router-dom";

// Fake product data (replace images with your own)
const products = {
  Necklaces: [
    { name: "Gold Necklace", image: "/images/necklace1.jpg" },
    
  ],
  Earrings: [
    { name: "Silver Earrings", image: "/images/earrings1.jpg" },
  
  ],
  Bangles: [
    { name: "Gold Bangle", image: "/images/bangle1.jpg" },
    
  ],
  Scrunchies: [
    { name: "Scrunchie", image: "/images/scrunchie1.jpg" },

  ],
};

const CategoryPage = () => {
  const { category } = useParams();
  const categoryProducts = products[category] || [];

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>{category}</h1>
      {categoryProducts.length === 0 ? (
        <p>No products found for this category.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {categoryProducts.map((product, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
              <h2>{product.name}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;



