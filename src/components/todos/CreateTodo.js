import React, { Component } from 'react'

class CreateTodo extends Component {
  state = {
    text: ""
  }

  handleText = (event) => this.setState({text: event.target.value})

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({type: 'ADD_TODO',
    todo: this.state})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add Todo</label>
          <br></br>
          <input onChange={this.handleText} type="text"></input>
          <br></br>
          <br></br>
          <input type="submit"></input>
        </form>
        {this.props.store.getState().todos}
      </div>
    )
  }
}

export default CreateTodo;
