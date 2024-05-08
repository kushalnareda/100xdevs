import { client } from "..";

interface Todo {
    userId: number; 
    title: string;
    description: string;
    done: boolean;
    id: number;
}

interface UserTodos {
    todos: Todo[];
}
const userTodos: UserTodos = {
    todos :[]
};

export async function createTodo(userId: number, title: string, description: string) : Promise<Todo> {
    const newTodo : Todo = {
        userId,
        title,
        description,
        done: false,
        id: Math.floor(Math.random() *1000)
    }
    userTodos.todos.push(newTodo);
    return newTodo;
}

export async function updateTodo(todoId: number) {
    const existingTodo = userTodos.todos.find(todo => todo.userId === todoId);
    if (!existingTodo) {
        throw new Error(`Todo with ID ${todoId} not found`);
    }
    existingTodo.done = true;
    return existingTodo;
}

export async function getTodos(userId: number): Promise<Todo[]> {
    const getuserTodos = userTodos.todos.filter(todo => todo.userId === userId);
    return getuserTodos;
}