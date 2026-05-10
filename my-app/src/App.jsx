import { useState } from "react";

import "./App.css";
import UserCard from "./components/UserCard";
import mahrana from "./assets/Mahrana.webp";
import prithvi from "./assets/prithvi.jpg";
import ashoka from "./assets/ashoka.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <UserCard
        name="ashoka"
        description="description1"
        pic={ashoka}
        style={{ "border-radius": "10px" }}
      />
      <UserCard
        name="Maharana Pratap"
        description="description2"
        pic={mahrana}
        style={{ "border-radius": "10px" }}
      />
      <UserCard
        name="PrithviRaj Chauhan"
        description="description3"
        pic={prithvi}
        style={{ "border-radius": "10px" }}
      />
    </div>
  );
}

export default App;
