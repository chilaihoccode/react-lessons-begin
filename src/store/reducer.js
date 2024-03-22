import { ADD_TODO, SET_TODO_INPUT,DELETE_TODO } from "./contants"

// initState
const initState = {
    Todos : [],
    Todoinput : ''
}

// reducer
const reducer = (state,action) => {
    switch (action.type) {
        case SET_TODO_INPUT :
            return {
                ...state,
                Todoinput : action.payload
            }
        case ADD_TODO : 
            return {
                ...state,
                Todos : [...state.Todos,action.payload]
            }
        case DELETE_TODO:
            const newState = [...state.Todos];
            newState.splice(action.payload,1)
            console.log(newState)
            return {
                ...state,
                Todos : newState
            }
        default :
            throw new Error('Invalid ...')
    }
}

export {initState}
export default reducer