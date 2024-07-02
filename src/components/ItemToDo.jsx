/* For some reason this code had errors but still worked

export function ItemToDo({ completed, id, title, toggleToDo, removeToDo }) {
//   return (
//     <li key={id}>
//       <label htmlFor="item-1">
//         {" "}
//         {title}
//         <input
//           type="checkbox"
//           checked={completed}
//           onChange={(e) => toggleToDo(id, e.target.checked)}
//         />
//       </label>
//       <button
//         type="button"
//         className="btn btn-danger"
//         onClick={() => removeToDo(id)}
//       >
//         Pau
//       </button>
//     </li>
//   );
// }*/
import PropTypes from "prop-types";

export function ItemToDo({ completed, id, title, toggleToDo, removeToDo }) {
  return (
    <li className="to-do-item">
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleToDo(id, e.target.checked)}
        />
        {title}
      </label>
      <button className="pau-button" onClick={() => removeToDo(id)}>
        Pau
      </button>
    </li>
  );
}

ItemToDo.propTypes = {
  completed: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  toggleToDo: PropTypes.func.isRequired,
  removeToDo: PropTypes.func.isRequired,
};
