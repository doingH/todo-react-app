import { Class } from '@material-ui/icons';
import React from 'react';
import Todo from './todo/Todo';
import { Paper, List, Container } from "@material-ui/core";
import './App.css';
import AddTodo from './todo/AddTodo';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  add = (item) => {
    const thisItems = this.state.items;
    item.id = "ID-" + thisItems.length; // key를 위한 id추가
    item.done = false; // done 초기화
    thisItems.push(item); // 배열에 아이템 추가
    this.setState({ items: thisItems }); // 업데이트는 반드시 this.setState로 해야됨.
    console.log("items : ", this.state.items);
  };

  delete = (item) => {
    const thisItems = this.state.items;
    console.log("Before Update Items : ", this.state.items);
    const newItems = thisItems.filter((e) => e.id !== item.id); // 해당 id 걸러내기
    this.setState({ items: newItems }, () => {
      // 디버깅 콜백
      console.log("Update Items : ", this.state.items);
    });
  };

  render() {
    //es6 map함수 이용해 loop
    var todoItems = this.state.items.length > 0 && (
      <Paper style={{ margine: 16 }}>
        <List>
          {this.state.items.map((item, idx) => (
            <Todo item={item} key={item.id} delete={this.delete} />
          ))}
        </List>
      </Paper>
    );

    return (
      // 컴포넌트 return
      <div className="App">
        <Container maxWidth="md">
          <AddTodo add={this.add} />
          <div className="TodoList">{todoItems}</div>
        </Container>
      </div>
    );

  }
}

export default App;
