export default function goals (state = [], action) {
    const actions = {
        ADD_GOAL: () => { return state.concat([action.goal])},
        REMOVE_GOAL: () => { return state.filter((goal) => goal.id !== action.id); },
        TOGGLE_GOAL: () => {
            return state.map((goal) => {
                return goal.id !== action.id ? 
                    goal : 
                    Object.assign({}, goal, { complete: !goal.complete});
            });
        },
        RECEIVE_DATA: () => {
            return action.goals;
        }
    }
    if (actions[action.type]){
        return actions[action.type]();
    }
    return state;
}