const initialState = [
    {
        id: 1520,
        title: "Superman",
    },
    {
        id: 1521,
        title: "Iron Man",
    },

]

export default (state = initialState, action) => {
    switch(action.type) {
        case "ADD_HISTORY":
            console.log("ADD_HISTORY")
            return {
                //history: state.history.push('NEW_ENTRY')
            }
        default:
            return state
    }
}