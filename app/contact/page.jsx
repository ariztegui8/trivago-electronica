"use client"
import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);

  const searchProducts = async () => {
    try {
      const response = await axios.get(`/api/search?query=${query}`);

      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchProducts}>Buscar</button>

      {products.length > 0 && (
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
