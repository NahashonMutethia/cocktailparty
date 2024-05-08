import React, { useState, useEffect } from 'react';

function CocktailList() {
  // State to store the fetched data
  const [cocktails, setCocktails] = useState([]);
  // State to handle loading state
  const [loading, setLoading] = useState(true);

  const API_ENDPOINT = 'http://example.com/api/cocktails'; // Replace this with your actual API endpoint URL

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const response = await fetch(API_ENDPOINT); // Use API_ENDPOINT variable here
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setCocktails(data); // Update the state with fetched data
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false); // Set loading to false in case of error
    }
  };
  

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  return (
    <div className="cocktail-list">
      <h2>Cocktail List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {cocktails.map(cocktail => (
            <li key={cocktail.id}>{cocktail.name}</li>
            //{/* Replace "name" with the property name containing the cocktail's name */}
          ))}
        </ul>
      )}
    </div>
  );
}

export default CocktailList;
