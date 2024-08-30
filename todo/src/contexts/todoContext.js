import { createContext,useContext } from "react";
export const todoContext = createContext({
    todo:[
        {
            id:1,
            todo:"Todo Msg",
            completed:false,
        }
    ],
    addTodo:(todo) =>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id,todo)=>{},
    toggleComplete:(id) =>{}
})
export const useTodo = () =>{
    return useContext(todoContext)
}
export const TodoProvider = todoContext.Provider