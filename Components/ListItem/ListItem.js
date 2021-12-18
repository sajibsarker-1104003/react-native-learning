import React from 'react';
import {View,Text,StyleSheet,TouchableHighlight,TouchableOpacity,TouchableWithoutFeedback,Pressable} from 'react-native';


const ListItem=props =>{
  return(   

<Pressable style={styles.ListItem} onPress={props.onItemPressed}>
<Text>
  {props.placeName}
</Text>
</Pressable>

)
}


const styles=StyleSheet.create({
  ListItem:{
    width:"100%",
    padding:10,
    backgroundColor:"#eee",
    margin:5,

  }
})

export default ListItem;