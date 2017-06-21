import React, {PropTypes} from 'react';
import Todo from './Todo';

const TodosList = ({todos}) => {
  return (
    <div>
      {todos.map((todo) =>
        <Todo key={todo.description} todo={todo} />
      )}
    </div>
  );
};

TodosList.propTypes = {
  todos: PropTypes.array.isRequired
};

export default TodosList;
