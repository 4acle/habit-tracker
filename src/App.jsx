import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [habits, setHabits] = useState([]);

  function addHabit() {
    if (!name.trim()) return;

    setHabits([...habits, name]);
    setName("");
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Habit Tracker</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter habit"
      />

      <button onClick={addHabit}>Add</button>

      <ul>
        {habits.map((habit, index) => (
          <li key={index}>{habit}</li>
        ))}
      </ul>
    </div>
  );
}
