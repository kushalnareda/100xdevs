import { useEffect, useState } from "react";

//real wrapper
function App() {
  const [todos, setTodos] = useState([]);

  useEffect (() => {
    setInterval(()=>{
      fetch("urltohit")
        .then (async function(res){
          const json = await res.json();
          setTodos(json.todos);
        })
    }, 10000)
  }, [])
    

  return <div>
    {todos.map(todo => <Todo title={todo.title} description = {todo.description} />)}
  </div>
}

function Todo(title, description){
  <div>
    <h1>
      {title}
    </h1>
    <h4>
      {description}
    </h4>
  </div>
}

export default App;


//re rendering visualisatiion 
// how to prevent this ?
//two ways
//  1. we push the button ion click and hearder one by pushing a component
//  down in a new function in HeaderWithButton 
/// define it in the lowest common ancestor 
/// you can only push change down the change

//2. react.memo
//memo lets you skip re-rendering a components when the props are unchanged

//Using a <div> as a wrapper can be a good solution in situations 
///where you want to ensure that each 
//component instance is treated separately for memoization purposes.