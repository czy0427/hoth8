import React from 'react';
import{View, Text, StyleSheet, FlatList } from 'react-native';
import Header from './components/Header';
import InputBar from './components/inputBar';
import Header2 from './components/Header2';
import TodoItem from './components/TodoItem';


export default class App extends React.Component {
constructor(){
  super();

  this.state = {
  todoInput:  '',
  todos: [
    
  ]


  }

}

addNewTodo(){

  console.log(this.state.todoInput);

  let todos = this.state.todos;

  todos.unshift({
    id: todos.length +1,
    title: this.state.todoInput
  });

this.setState({
  todos,
  todoInput: ''
});


}

removeTodo(item) {
  let todos= this.state.todos;

  todos = todos.filter((todo) => todo.id !== item.id);

  this.setState({todos});
}


render(){




       return(
          <View style = {styles.container}>
            <View style ={styles.statusbar}></View>
            <Header title= "Meal Pal!"/>
            <Header2 title = "Food preferences?" />


            <InputBar 
            textChange={todoInput =>this.setState({ todoInput }) }
            addNewTodo= { () => this.addNewTodo() }
            />

            <FlatList
             data={this.state.todos}
             extraData = {this.state}
             keyExtractor={(item, index) => index.toString()}
             renderItem={ ({item, index}) => {
               return(
                 <TodoItem 
                 todoItem = {item}
                 removeTodo = {() => this.removeTodo(item)}
                 />



               )
             }}
             />
            </View>
       );
    }
}

const styles = StyleSheet.create({
container: {
     flex:1,
     backgroundColor: '#FFFFFF',
},
statusbar: {
    backgroundColor: '#00BFFF',
    height: 60
},
});