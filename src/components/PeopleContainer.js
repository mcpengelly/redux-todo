import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as peopleActions from '../actions/people-actions';
import PeopleList from './PeopleList';
import PersonInput from './PersonInput';
import * as todoActions from '../actions/todo-actions';
import PeopleList from './TodoList';
import PersonInput from './TodoInput';

class PeopleContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
      todos: []
    };
  }

  render() {
    const {people} = this.props;
    const {todos} = this.props;

    return (
      <div>
        <PersonInput addPerson={this.props.actions.addPerson} />
        <PeopleList people={people} />

        <TodoInput addTodo={this.props.actions.addTodo} />
        <TodoList todos={todos} />
      </div>
    );
  }
}

PeopleContainer.propTypes = {
  people: PropTypes.array.isRequired,
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
  return {
    people: state.people,
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators([...peopleActions, ...todoActions], dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer);
