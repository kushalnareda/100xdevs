import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
function App() {
  return <div>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>4</button>
    <Todo id = {1} />
  </div>
}

function Todo({id}) {
  const [todo,setTodo]= useState([])
  
  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
      .then(res =>{
        setTodo(res.data.todo)
      })
  },[])



  return <div>
    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>
}

export default App;