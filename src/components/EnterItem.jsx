/* For some reason this code had errors but still worked
import { useState } from "react";

export function EnterItem({ onSubmit }) {
  //   const [item, setItem] = useState("");
  //   function handleSubmit(e) {
  //     e.preventDefault();
  //     if (item === "") {
  //       return;
  //     }
  //     onSubmit(item);
  //     setItem("");
  //   }
  //   return (
  //     <form onSubmit={handleSubmit} className="enter-item-form">
  //       <div className="item-row">
  //         <label htmlFor="item">Enter Item</label>
  //         <input
  //           value={item}
  //           onChange={(e) => setItem(e.target.value)}
  //           type="text"
  //           id="input-item"
  //         />
  //       </div>
  //       <button className="add-button">Add</button>
  //     </form>
  //   );
}*/
import { useState } from "react";
import PropTypes from "prop-types";

export function EnterItem({ onSubmit }) {
  const [item, setItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (item === "") {
      return;
    }
    onSubmit(item);
    setItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="enter-item-form">
      <div className="item-row">
        <label htmlFor="item">Enter Task</label>
        <input
          value={item}
          onChange={(e) => setItem(e.target.value)}
          type="text"
          id="input-item"
        />
      </div>
      <button className="add-button">Add</button>
    </form>
  );
}

EnterItem.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
