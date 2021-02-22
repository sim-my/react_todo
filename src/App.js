import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todo: {
        input: "",
        completed: false
      },
      todos: [],
    };
  }

  inputHandler = (event) => {
    this.setState({
      todo: {
        input: event.target.value,
      },
    });
  };

  onClickHandler = () => {
    if (this.state.todo.input !== "") {
      this.setState({
        todos: [...this.state.todos, this.state.todo],
        todo: {
          input: "",
        },
      });
    }
  };

  handleDone = (index) => {
    let todos = [...this.state.todos];
    let todo = this.state.todos[index];
    todo.completed = true;
    todos[index] = todo;
    this.setState({
      todos
    });
  }

  handleDelete = (index) => {
    let todos = [...this.state.todos];
    todos.splice(index,1);
    this.setState({
      todos
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>My To Do List</h1>
        </header>
        <form>
          <input
            value={this.state.todo.input}
            onChange={this.inputHandler}
            type="text"
            className="input"
          />
          <button type="button" onClick={this.onClickHandler}>
            Add
          </button>
        </form>
        <div className="list-container">
          <ul className="todo-list">
            {this.state.todos.map((todo,index) => (
              <li key={index} style={{
                textDecoration:this.state.todos[index].completed ? 'line-through' : 'none'
              }}>                
                <p>{todo.input}</p>
                <button onClick={() => this.handleDone(index)} type="button">Done</button>
                <button onClick={() => this.handleDelete(index)} type="button">Remove</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
