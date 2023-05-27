const initalState = {
  entities: [
    { id: 1, title: "Design UI", completed: false, color: "Yellow" },
    { id: 2, title: "Design UX", completed: false, color: "red" },
    { id: 3, title: "discover actions", completed: true, color: "green" },
    { id: 4, title: "patterns", completed: true, color: "red" },
    { id: 5, title: "states", completed: false, color: "green" },
  ],
};

const todosReducer = (state = initalState, action) => {
  switch (action.type) {
    case "todos/addTodo":
      const newTodo = action.payload;
      return {
        ...state,
        entities: [
          ...state.entities,
          newTodo,
        ],
      };
    case "todos/toggleTodo":
      const toggleTodoId = action.payload;
      return {
        ...state,
        entities: state.entities.map((todo) => {
          if (todo.id === toggleTodoId) {
            return {
              ...todo,
              completed: !todo.completed,
            };
        }
        return todo;
        }),
      };
      case "todos/deleteTodo":
        const deleteTodoId = action.payload;
        return{
            ...state,
            entities:state.entities.filter(todo=>todo.id !== deleteTodoId)
        }
        default:
            return state

  
  
  
    }
};
 export default todosReducer

 export const addToDo =(text) =>{
  return{
    type:'todos/addTodo',
    payload:{id:7,text:text,completed:false}
  }
 }