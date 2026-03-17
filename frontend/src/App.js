import { useState } from "react";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const res = await axios.post("http://localhost:5000/search", { query });
      setResults(res.data);
    } catch (err) {
      console.error(err);
      alert("Backend not connected!");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🔍 Semantic Search Engine</h1>

      <input
        type="text"
        placeholder="Enter your query..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "10px", width: "300px" }}
      />

      <button onClick={handleSearch} style={{ marginLeft: "10px" }}>
        Search
      </button>

      <div style={{ marginTop: "20px" }}>
        {results.map((item, index) => (
          <div key={index} style={{ marginBottom: "15px" }}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
            <small>Score: {item.score}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;