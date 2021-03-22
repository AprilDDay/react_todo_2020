
//https://www.youtube.com/watch?v=sBws8MSXN7A
import React, { Component } from 'react'; //was in video but not her
//command for importing router into react project npm i react-router-dom
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/Pages/About';
//https://stackoverflow.com/questions/60830848/attempted-import-error-uuid-does-not-contain-a-default-export-imported-as-u
//import {v4 as uuid} from 'uuid'; 
//for testing calls to a backend
//https://jsonplaceholder.typicode.com/
//npm i axios
import axios from 'axios';

//at end npm run build

class App extends Component {

    state = {
    todos: [
      /*
      {
        id: uuid(),
        title: 'Make dinner',
        completed: false
      },
      {
        id: uuid(),
        title: 'Write better code',
        completed: true
      },
      {
        id: uuid(),
        title: 'Build Chat App',
        completed: false
      }
      */
    ]
  }

  componentDidMount () {
    //URL from jsonplaceholdertypicode.com
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }))
  }

  //toggle complete
  markComplete = (id) => {
    
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  //need to connect to a database 
  //this is a UI library
  //del Todo
  delTodo = (id) => {

    axios.delete(`https://jsonplaceholder.typicode.com/todos/$(id)`)
      .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
  }

  addTodo = (title) => {
    /*
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false
    }
    */
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res =>    this.setState({ todos: [...this.state.todos, res.data] }));
  }

  render() { //returns JSX needed
    console.log(this.state.todos)
  return (
    <Router>
    <div className="App">
      <div className="container">
        <Header />
        <Route exact path="/" render={props => (
          <React.Fragment>
            <AddTodo addTodo={this.addTodo}/>
            <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
          </React.Fragment>
        )} />
        <Route path="/about" component={About}/>
      </div>
      
    </div>
    </Router>
  );

  }
}



/*
function App() {

  return (
    <div className="App">
      <Todos />
    </div>
  );
}
*/

export default App;
