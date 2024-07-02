import { useState, useEffect } from "react";
import { EnterItem } from "./components/EnterItem";
import { ItemList } from "./components/ItemList";
import "./style.css";

export default function App() {
  const [toDos, setToDos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    return localValue ? JSON.parse(localValue) : [];
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(toDos));
  }, [toDos]);

  function addToDo(title) {
    setToDos((currentToDos) => [
      ...currentToDos,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
  }

  function toggleToDo(id, completed) {
    setToDos((currentToDos) =>
      currentToDos.map((toDo) =>
        toDo.id === id ? { ...toDo, completed } : toDo
      )
    );
  }

  function removeToDo(id) {
    setToDos((currentToDos) => currentToDos.filter((toDo) => toDo.id !== id));
  }

  return (
    <div className="app-container">
      <h1 className="todo-header">To-Do List (Using React)</h1>
      <EnterItem onSubmit={addToDo} />
      <ItemList toDos={toDos} toggleToDo={toggleToDo} removeToDo={removeToDo} />
    </div>
  );
}
``;
