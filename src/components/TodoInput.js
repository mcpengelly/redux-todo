import React, {PropTypes, Component} from 'react';

class TodoInput extends Component {
  constructor(props) {
    super(props);

    this.onAddTodoClick = this.onAddTodoClick.bind(this);
  }

  onAddTodoClick() {
    const title = document.getElementById('title');
    const description = document.getElementById('description');

    this.props.addTodo({
      title: title.value,
      description: description.value
    });

    title.value = "";
    description.value = "";

    title.focus();
  }

  componentDidMount() {
    document.getElementById('title').focus();
  }

  render() {
    return (
      <div>
        <input id="title" type="text" placeholder="title" />
        <input id="description" type="text" placeholder="description" />
        <button onClick={this.onAddTodoClick}>Add Todo</button>
      </div>
    );
  }
}

TodoInput.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default TodoInput;
