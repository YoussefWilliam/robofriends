import React, { useEffect, useState } from "react";
import { ErrorBoundry, CardList } from "../components";

import Searchbox from "../components/Searchbox";

function App() {
  const [query, setQuery] = useState("");
  const [robotsArray, setRobotsArray] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setRobotsArray(users));
  }, []);

  const onSearchChange = (robots) => {
    return robots.filter((robot) =>
      robot.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <ErrorBoundry>
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <Searchbox setQuery={setQuery} />

        {robotsArray.length === 0 ? (
          <h1>Loading</h1>
        ) : (
          <CardList robots={onSearchChange(robotsArray)} />
        )}
      </div>
    </ErrorBoundry>
  );
}

export default App;
