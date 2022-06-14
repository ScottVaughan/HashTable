import './App.css';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const ht = new HashTable();
    ht.add("Canada", "300");
    ht.add("Germany", "100");
    ht.add("Italy", "50");
    ht.add("United States", "300");
    ht.add("France", "450");
    ht.add("Mexico", "300");
    ht.add("Brazil", "500");
    ht.add("China", "400");
    ht.add("Japan", "50");
  });

  return (
    <div className="App">
    </div>
  );
}

export default App;
