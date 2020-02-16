export default function todos(state = [], action) {
    const actions = {
        ADD_TODOS: () => { return state.concat([action.todo]); },
        REMOVE_TODO: () => { return state.filter((todo) => todo.id !== action.id); },
        TOGGLE_TODO: () => {
            return state.map((todo) => {
                return todo.id !== action.id ? 
                    todo : 
                    Object.assign({}, todo, { complete: !todo.complete});
            });
        },
        RECEIVE_DATA: () => {
            return action.todos;
        }
    }

    if (actions[action.type]){
        return actions[action.type]();
    }
    return state;
}