import React, {Component} from 'react'

class TodoItem extends Component {
  render() {
    return(
      <div>
        <h1>Code there</h1>
        <label>
          <input
            type="checkbox"
            name="todo_item"
            onChange={() => this.props.handleChange(this.props.item.id)}
            checked={this.props.item.completed}
          />{this.props.item.text}
        </label>
      </div>
    )
  }
}

export default TodoItem