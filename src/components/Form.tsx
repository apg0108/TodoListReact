import { useState } from 'react';

function Form(props: any) {
  const [toDoValue, setToDoValue] = useState('');

  function onChangeTodo(event: any) {
    const newToDoValue = event.target.value;
    setToDoValue(newToDoValue);
  }
  return (
    <div className="form">
      <input type="text" onChange={onChangeTodo} value={toDoValue} />
      <button
        onClick={() => {
          props.onAdd(toDoValue);
          setToDoValue('');
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default Form;
