import React, { useReducer, } from 'react';
import axios from 'axios'

export const topicContext = React.createContext();
const INIT_STATE = {
    todos: []
}
const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {

        case "GET_TODOS_DATS": return { ...state, todos: action.payload }

        default: return state
    }
}
const TopicContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getTodosData = async () => {
        let { data } = await axios('http://localhost:8000/todos')
        dispatch({
            type: "GET_TODOS_DATS",
            payload: data
        })
    }

    const addTask = (newLenta) => {
        axios.post('http://localhost:8000/todos', newLenta)

        getTodosData()
    }




    return (
        <topicContext.Provider
            value={{
                todos: state.todos,
                addTask,
                getTodosData
            }}
        >
            {children}
        </topicContext.Provider>
    )
}
export default TopicContextProvider;