import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import TodoData from "./TodoData"
import TodoItem from './components/TodoItem'



class App extends Component {
  constructor() {
    super()
    this.state = {
      todo: TodoData,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todo.map(todo => {
        if (todo.id === id) {
            todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todo: updatedTodos
      }
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
