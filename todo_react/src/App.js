import React, {Component} from 'react'
// import logo from './logo.svg'
import './App.css'
// import TodoData from "./TodoData"
import TodoItem from './components/TodoItem'



class App extends Component {
  constructor() {
    super()
    this.state = {
      todo: [],
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todo.map(todo => {
        if (todo.id === id) {
            todo.finished = !todo.finished
        }
        return todo
      })
      return {
        todo: updatedTodos
      }
    })
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/task-list/1/")
        .then(response => response.json())
        .then(data => {
          this.setState({
            todo: data,
          })
        })
  }

  render() {
    const todoItems = this.state.todo.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
    return(
      <div className="todo-list">
        {todoItems}
      </div>
    )
  }
}

export default App;
