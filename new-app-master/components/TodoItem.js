import React from 'react';
import{ Style, StyleSheet, Text, Button, TouchableOpacity} from 'react-native';

export default class TodoItem extends React.Component {
constructor(props) {
    super(props);
}

render() {
    const todoItem = this.props.todoItem;

    return(
        <TouchableOpacity 
        style = {styles.todoItem}
        
        >
          <Text>
              {todoItem.title}
          </Text>

          <Button
          title = "Remove"
          color = '#000000'
          onPress ={() => this.props.removeTodo()}
          />
        </TouchableOpacity>

    )
}
}

const styles = StyleSheet.create({
todoItem: {
    width: '100%',
    height: 40,
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15
}

})


