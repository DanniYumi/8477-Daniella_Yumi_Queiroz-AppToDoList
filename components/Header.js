import * as React  from 'react';
import { useRef, useState, useEffect } from 'react';

import {Text, View, StyleSheet, TextInput, TouchableOpacity,} from 'react-native';



export function Header(props) {
  const inputRef = useRef()
  const [ name, setName ] = useState()

  useEffect( () => {
    // console.log(name)
  })

  const pressHandler = () => {
    inputRef.current.clear()
    props.addHandler( name )
  }

  const inputHandler = (text) => {
    setName( text )
  }
  return (
    <View style={HeaderStyles.header}>
      <Text style={HeaderStyles.headerText}> Insert the task to be completed</Text>
      <View style={HeaderStyles.inputContainer}>
        <TextInput 
          onChangeText={inputHandler} 
          style={HeaderStyles.input} 
          clearButtonMode="always" 
          ref={inputRef}  
        />
        <TouchableOpacity style={HeaderStyles.inputButton} onPress={pressHandler}>
        <Text style={HeaderStyles.inputButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
        <Text style={HeaderStyles.toDoList} >Things to Do:</Text>
    
    </View>
  );
}

const HeaderStyles = StyleSheet.create({
  header: {
    
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headerText: {
    color: "#254E70",
    paddingVertical: 3,
    paddingHorizontal:30,
    paddingBottom:10,
    fontSize:24,

  },
  toDoList:{
    color: "#254E70",
    paddingVertical: 3,
    paddingTop:30,
    paddingBottom:10,
    fontSize:24,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    height:80,
    alignItems:'center',
  },
  input: {
    backgroundColor: "#254E70",
    paddingVertical: 5,
    paddingHorizontal: 8,
    fontSize: 13,
    flex: 1,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    color: '#70C1B3',
    width:400,
  },
  inputButton: {
    width: 200,
    height:30,
    backgroundColor: "#254E70",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:6,
    marginTop:10,
    
  },
  inputButtonText:{
    color: '#70C1B3',
    fontSize:20,
  }
});
