export class Todo {
    static lastId = 0;

    constructor(action){
        this.id = ++Todo.lastId;
        this.action = action;
        this.completed = false;
    }
};

export class CommunicationLayer {
    todos = new Map();

    constructor(){
        this.addTodos('aaaa');
    }

    fetchTodos = (callback) => {
        callback && callback(Array.from(this.todos.values()));
    };

    addTodos = (action, reload) => {
        let todo = new Todo(action);
        this.todos.set(
            todo.id,
            todo
        );
        reload && reload();
    };

    toggleCompleted = (id, reload) => {
        let filteredTodo = this.todos.get(id)
        filteredTodo.completed 
            ? filteredTodo.completed = false 
            : filteredTodo.completed = true;
        reload && reload();
    };

    deleteTodo = (id, reload) => {
        this.todos.delete(id);
        reload && reload();
    };
}