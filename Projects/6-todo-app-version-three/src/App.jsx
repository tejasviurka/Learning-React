import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider
    value={{
      todoItems: todoItems,
      addNewItems: addNewItem,
      deleteItem : deleteItem,
    }}
    >
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
    </TodoItemsContext.Provider>
  );
}

export default App;


// CONTEXT API
// let see need of context api, in todo app, suppose we want todo item or todo item ko hume state mai rakhna hai and we replaced state by useref
// still humne kaha tha ki, agar koi state shared hai multiple components mai toh unka jo shared parent hai waha hume state share krne padege
// manytime , it happens that one state is wanted by many component, so wo bubble up hoke root element ke pass pohch jaate hai, so root ke pass bhot sare state jama hote hai, so he has maintain it
// context means common shared storage amoung all component

