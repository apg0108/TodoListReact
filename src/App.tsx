import Form from 'components/Form';
import Heading from 'components/Heading';
import ToDoItem from 'components/ToDoItem';
import { useState } from 'react';
import './App.css';

function App() {
  const initialStateToDo: string[] = [];
  const [items, setItems] = useState(initialStateToDo);

  function addTodo(toDoValue: string) {
    if (toDoValue !== '') setItems(prevItems => [...prevItems, toDoValue]);
    else alert('Input empty!');
  }

  function deleteItem(id: number) {
    setItems(prevItem => {
      return prevItem.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="todo-container">
      <Heading />
      <Form onAdd={addTodo} />
      {items.map((item, index) => (
        <ToDoItem key={index} id={index} text={item} onChecked={deleteItem} />
      ))}
    </div>
  );
}

export default App;
