import logo from './logo.svg';
import './App.css';
import { Class } from '@material-ui/icons';
import React from 'react';
import Todo from './todo/Todo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {id : 0, title: "Hello World 1", done: true } ,
        {id : 1, title: "Hello World 2", done: false}
      ]
    }
  }
  render() {

    //es6 map함수 이용해 loop
    var todoItems = this.state.items.map((item, idx) => (
      <Todo item={item} key={item.id} />
    ));

    return (
      // 컴포넌트 return
      <div className="App">{todoItems}</div>
    );

  }
}

export default App;
