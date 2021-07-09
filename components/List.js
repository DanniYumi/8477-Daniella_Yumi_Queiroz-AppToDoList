import * as React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";



export function List(props) {

  const Renderer = ({item}) => (

      
    <View style={ (item.status === true) ? ListStyle.listItemDone : ListStyle.listItem}>
        
      <View style={ListStyle.buttons}>   
        <TouchableOpacity onPress={ () => props.doneHandler(item.id) }>
        <Text style={ListStyle.buttonText}>Done</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => props.deleteHandler(item.id) }>
        <Text style={ListStyle.buttonText1}>Delete</Text>
        </TouchableOpacity>
        <Text style={ListStyle.listText}>{item.name}</Text>
      </View>
    </View>

  )

  return(
    <View>
      <FlatList 
      data={ props.listItems } 
      renderItem={ Renderer} 
      keyExtractor={ item => item.id.toString() } 
    />
    </View>
  )
}

const ListStyle = StyleSheet.create( {
    toDoContainer:{
        backgroundColor: "#247BA0",
        marginVertical: 6,
    },
  listItem: {
    backgroundColor: "#247BA0",
    marginVertical: 6,
    fontSize: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#F1F9F4',
    color:'#F1F9F4'
  },
  listText:{
    color: '#F1F9F4',
    fontSize: 20,
    alignContent:'center',
    justifyContent:'center',
    paddingRight: 30,
    paddingLeft: 30,
    paddingTop: 5,


  },
  listItemDone: {
    backgroundColor: '#FF1654',
    marginVertical: 4,
    fontSize: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft:10,
    
  },
  buttonText:{
    color: '#FF1654',
    padding: 10,
  },
  buttonText1:{
    color: '#A9DBBE',
    padding: 10,


  }

})