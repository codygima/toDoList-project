/* For some reason this code had errors but still worked
import { ItemToDo } from "./ItemToDo";

export function ItemList({ toDos, toggleToDo, removeToDo }) {
//   return (
//     <ul>
//       {toDos.length === 0 && "Na10 for now"}
//       {toDos.map((toDo) => {
//         return (
//           <ItemToDo
//             completed={toDo.completed}
//             id={toDo.id}
//             title={toDo.title}
//             key={toDo.id}
//             toggleToDo={toggleToDo}
//             removeToDo={removeToDo}
//           />
//         );
//       })}
//     </ul>
//   );
}*/

import PropTypes from "prop-types";
import { ItemToDo } from "./ItemToDo";

export function ItemList({ toDos, toggleToDo, removeToDo }) {
  return (
    <ul className="item-list">
      {toDos.length === 0 && "Add a task!"}
      {toDos.map((toDo) => (
        <ItemToDo
          completed={toDo.completed}
          id={toDo.id}
          title={toDo.title}
          key={toDo.id}
          toggleToDo={toggleToDo}
          removeToDo={removeToDo}
        />
      ))}
    </ul>
  );
}

ItemList.propTypes = {
  toDos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  toggleToDo: PropTypes.func.isRequired,
  removeToDo: PropTypes.func.isRequired,
};
