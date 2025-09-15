import { useState } from "react";

const App = () => {
  // Sample list of names
  const names = [
    "Mahesh",
    "Gani",
    "Harini",
    "Sai",
    "Rupesh",
    "Bhanu",
    
  ];

  // State to hold search query
  const [searchTerm, setSearchTerm] = useState("");

  // Filter names based on search term (case-insensitive)
  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Search Filter Example</h1>
      <input
        type="text"
        placeholder="Search names..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "0.5rem",
          fontSize: "1rem",
          width: "100%",
          maxWidth: "300px",
          marginBottom: "1rem",
        }}
      />
      <ul>
        {filteredNames.length > 0 ? (
          filteredNames.map((name, index) => <li key={index}>{name}</li>)
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
};

export default App;
