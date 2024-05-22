import { useState } from "react";
import "./index.css";
import ListItem from "../ListItem/ListItem";

export default function List() {
  const [itemInput, setItemInput] = useState("");
  const [itemList, setItemList] = useState([]);

  function handleInputChange(newItemInput) {
    setItemInput(newItemInput.target.value);
  }

  function handleAddItemClick() {
    let newItemList = itemList;
    if (itemInput) {
      newItemList.push(itemInput);
    }
    setItemList(newItemList);
    setItemInput("");
  }

  function handleDeleteClick(itemIdx) {
    let newItemList = [...itemList];
    console.log(newItemList.splice(itemIdx, 1));
    console.log(itemIdx);
    console.log(newItemList);
    setItemList(newItemList);
  }

  return (
    <>
      <menu>
        <input
          className="item-input"
          placeholder="Your item here."
          value={itemInput}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleAddItemClick();
            }
          }}
          onChange={(newItemInput) => handleInputChange(newItemInput)}
        ></input>
        <button onClick={handleAddItemClick}>Add Item</button>
      </menu>
      <ol>
        {itemList?.map((text, itemIdx) => (
          <ListItem
            key={itemIdx}
            itemIdx={itemIdx}
            text={text}
            onDeleteClick={() => handleDeleteClick(itemIdx)}
          ></ListItem>
        ))}
      </ol>
    </>
  );
}
