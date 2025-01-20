import { useState } from "react";
import data from "./data.js";
import Person from "./Person.jsx";

const App = () => {
  const [people, setPeople] = useState(data);

  const handleClear = () => {
    setPeople([]);
  };

  return (
    <div className="container">
      <h3>{people.length} Birthday Reminder</h3>
      {people.map(person => (
        <Person key={person.id} {...person} />
      ))}

      <button className="btn btn-block" type="submit" onClick={handleClear}>
        Clear List
      </button>
    </div>
  );
};
export default App;
