import React from 'react';
import { StyleSheet, View, Image } from 'react-native';



export function Logo( props ) {
  return(
    <View style={styles.header}>
      <Image style={styles.headerLogo} source={require('../assets/logo.png')} />
      <Image style={styles.headerName} source={require('../assets/appName.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#254E70",
    padding: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
 
  },
  headerLogo:{
    paddingLeft: 10,
    width: 36,
    height: 36,
  },
  headerName:{
    width: 270,
    height: 36,
    
  },

})