import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/apple")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);
  return (
    <div className="App">
      <h2>
        {data.map((d) => (
          <p key={d.name}>{d.name}</p>
        ))}
      </h2>
    </div>
  );
}

export default App;
