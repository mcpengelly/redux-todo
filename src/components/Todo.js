import React, {PropTypes} from 'react';

const Todo = ({todo}) => {
  return (
    <div>
      {todo.title}, {todo.description}
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.object.isRequired
};

export default Todo;
