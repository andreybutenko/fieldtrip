const conversations = function(state = {}, action) {
    switch (action.type) {
        default:
            return state
    }
}

export default conversations;
/*
Reference:
return [
    ...state,
    {
        text: action.text,
        completed: false
    }
]
*/
