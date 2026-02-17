import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [habits, setHabits] = useState([]);

  function addHabit() {
    const trimmed = name.trim();
    if (!trimmed) return;
  
    const newHabit = { id: crypto.randomUUID(), name: trimmed };
    setHabits((prev) => [...prev, newHabit]);
    setName("");
  }

  function deleteHabit(id) {
    setHabits((prev) => prev.filter((h) => h.id !== id));
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
        {habits.map((h) => (
          <li key={h.id} style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span>{h.name}</span>
            <button onClick={() => deleteHabit(h.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
