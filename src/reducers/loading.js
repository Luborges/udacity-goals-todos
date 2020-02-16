export default function loading (state = true, action) {
    const actions = {
        RECEIVE_DATA: () => {
            return false;
        }
    }

    if (actions[action.type]){
        return actions[action.type]();
    }
    return state;
}