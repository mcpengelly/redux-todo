import * as types from './action-types';

export const addTodo = (todo) => {
	return {
		type: type.ADD_TODO,
		todo
	};
};
