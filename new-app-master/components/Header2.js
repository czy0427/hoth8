import React from 'react';
import{View, Text, StyleSheet } from 'react-native';


const Header2 =(props) => {
return (
<View style = {styles.header}>
    <Text style ={styles.title}>{props.title}</Text>
</View>

)
}



const styles = StyleSheet.create({
header: {
    backgroundColor: '#ADD8E6',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center'
},
title: {
    color: '#000000',
    fontSize: 19,
    fontWeight: '700',
    textTransform: 'lowercase'
}
});

export default Header2;


