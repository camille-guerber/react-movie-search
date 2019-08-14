export const getPages = (filter = {}) => {
    return (dispatch, getState) => {
        const state = getState()
        return state.page
    }
}