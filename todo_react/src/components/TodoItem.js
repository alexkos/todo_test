import React, {Component} from 'react'

class TodoItem extends Component {
  render() {
    return(
      <div>
        <label>
          <input
            type="checkbox"
            name="todo_item"
            onChange={() => this.props.handleChange(this.props.item.id)}
            checked={this.props.item.finished}
          />{this.props.item.title}
        </label>
      </div>
    )
  }
}

export default TodoItem