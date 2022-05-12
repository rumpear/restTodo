import PropTypes from 'prop-types';
import { Item } from './TodoList.styled';

export const TodoList = ({ list, onDelete, onEdit }) => {
  return (
    <ul>
      {list.map(item => {
        return (
          <Item key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
            <input
              type="checkbox"
              defaultChecked={item.isCompleted}
              onClick={() =>
                onEdit({ ...item, isCompleted: !item.isCompleted })
              }
            />

            <button type="button" onClick={() => onDelete(item.id)}>
              Delete
            </button>
          </Item>
        );
      })}
    </ul>

    // <ul>
    //   {list.map(({ id, isCompleted, text, title }) => {
    //     return (
    //       <Item key={id}>
    //         <h2>{title}</h2>
    //         <p>{text}</p>
    //         <input
    //           type="checkbox"
    //           defaultChecked={isCompleted}
    //           onClick={() => onEdit(id, isCompleted, text, title)}
    //         />

    //         <button type="button" onClick={() => onDelete(id)}>
    //           Delete
    //         </button>
    //       </Item>
    //     );
    //   })}
    // </ul>
  );
};

TodoList.propTypes = {
  list: PropTypes.array.isRequired,
};
