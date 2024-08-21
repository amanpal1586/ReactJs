import { createContext, useContext, useState } from "react"

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "todomsg",
            completed: false
        }
    ],
     addTodo: (todo,id)=>{},
     removeTodo: (id)=>{},
     updateTodo: (todo,id)=>{},
     toogleTodo: (id)=>{}
})

export const useTodo = () => {
  return useContext(TodoContext)
}


export const TodoProvider = TodoContext.Provider
