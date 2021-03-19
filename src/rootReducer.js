const INITIAL_STATE = { todo: ["Say hello"], memeTop: "Hello", memeBtm: "Goodbye", meme: "https://www.thehappymovie.com/wp-content/media/2020/08/happy.jpg" }

function rootReducer(state=INITIAL_STATE, action){
    switch(action.type){
        case "CHANGE_IMAGE":
            return {...state, [action.meme]: action.value};
        case "ADD_TODO":
            return {...state, todo: [...state.todo, action.value]};
        case "DELETE_TODO":
            const firstArr = state.todo.slice(0, action.id)
            const secondArr = state.todo.slice(action.id + 1)
            const arr = firstArr.concat(secondArr)
            return {...state, todo: arr};
        default:
            return state;
        }

}

export default rootReducer;