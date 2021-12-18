import React from 'react';
import {View,TextInput,Button,StyleSheet} from 'react-native';

const InputPlace=props=>{
  return(
    <View style={styles.inputView}>
        <TextInput 
        style={{
          width:"80%",
          borderBottomWidth:1,
          borderColor:"green",
          padding:7,
        }}
        placeholder="Enter Something..."
        value={props.inputValue}
        onChangeText={text=>props.setInputValue(text)}
        />
        <Button
        title="Add"
        //onPress={()=>alert(inputValue)}
        onPress={()=>{
          if(props.inputValue!==""){
            props.setPlaceList([...props.placeList,{key:Math.random().toString(),value:props.inputValue}])

          }
          
        }}
        
        />

      </View>
  );
}

const styles = StyleSheet.create({
 
  inputView:{
    width:"100%",
    marginTop:50,
    flexDirection:'row',
    justifyContent:'center',
    padding:20,
  },

  
});

export default InputPlace;