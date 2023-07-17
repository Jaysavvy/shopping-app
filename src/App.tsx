import React, {useState} from 'react';
import Greeter from "./components/Greeter"
import ShoppingList from './components/ShoppingList';
import ShoppingListForm from './components/ShoppingListForm';
import Item from "./models/item"
import {v4 as getId} from "uuid"



function App() {
  const [items, setItems] = useState<Item[]>([]);
  const addItem = (product: string, quantity: number) => {
    console.log("MADE TO THE APP COMPONENT")
    setItems([...items, {id: getId(), product, quantity}])
  }
//   const items = [
//     {id: 1 , product: "lemon", quantity: 3},
//     {id: 2, product: "Chicken Breast", quantity: 2 }
// ]
  return (
    <div >
      <ShoppingList items={items}/>
      <ShoppingListForm onAddItem={addItem}/>
    </div>
  );
}

export default App;
