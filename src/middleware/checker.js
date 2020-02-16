import { ADD_TODOS } from '../actions/todos';
import { ADD_GOAL } from '../actions/goals';

const checker = (store) => (next) => (action) => {
    if (action.type === ADD_TODOS && 
        action.todo.name.toLowerCase().includes('bitcoin')) {
        return alert("Nope. That's a bad idea");
    }

    if (action.type === ADD_GOAL && 
        action.goal.name.toLowerCase().includes('bitcoin')) {
        return alert("Nope. That's a bad idea");
    }

    return next(action);
}

export default checker;