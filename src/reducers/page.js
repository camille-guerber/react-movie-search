const initState = [
    {
        id: "page-about-us",
        title: "About Us",
        body: "",
        elements: [],
    },
    {
        id: "page-contact",
        title: "Contact Us",
        body: "",
        elements: [],
    },
]

export default (state = initState, action) => {
    switch(action.type) {
        default:
            return state
    }
}