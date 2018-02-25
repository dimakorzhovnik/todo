import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from  './components/header';
import TodoInput from './components/todoInput';
import TodoItem from './components/todoItem';
//import IMAGE from './components/img';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      todoList: [
        {id: 0, text: "gjfjkmgkfm"},
        {id: 1, text: "gkfgfere"},
        {id: 2, text: "kerektmv"}
      ],
      nextId: 3 
    }

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todoText){
    let todoList = this.state.todoList.slice();
    todoList.push({id: this.state.nextId,
                   text: todoText
                  });
    this.setState({
      todoList: todoList,
      nextId: ++this.state.nextId
    });
  }

  removeTodo(id){
    this.setState({
      todoList: this.state.todoList.filter((todo, index) => todo.id !==id)
    })
  }

  render() {
    return (
     
      <div className="App">
      
        <div className = "todo-wrapper">
           <Header />
           <TodoInput todoText="" addTodo={this.addTodo}/>
           <ul>
            {
              this.state.todoList.map((todo) => {
                return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
              })
            }
           </ul>
          
        </div>
       
      </div>
    );
  }
}

export default App;
