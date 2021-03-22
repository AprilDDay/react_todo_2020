import React, { Component } from 'react'; //was in video but not her
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
    
  render() { //returns JSX needed
     return this.props.todos.map((todo)=>(
        <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
    ));

  }
}

//prop Todos
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}


export default Todos;

/*

function App() {
  return (
    <div className="App">
      <h1>App</h1>
    </div>
  );
}

export default App;

*/