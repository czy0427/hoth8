import React from 'react';
import{View, Text, StyleSheet } from 'react-native';


const Header =(props) => {
return (
<View style = {styles.header}>
    <Text style ={styles.title}>{props.title}</Text>
</View>

)
}



const styles = StyleSheet.create({
header: {
    backgroundColor: '#FFFACD',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
},
title: {
    color: '#000000',
    fontSize: 28,
    fontWeight: '900',
    textTransform: 'uppercase'
}
});

export default Header;


