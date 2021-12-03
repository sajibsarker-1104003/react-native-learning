import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput, Button } from 'react-native';



export default function App() {
  
  const [inputValue,setInputValue]=useState("");

  const[placeList,setPlaceList]=useState([]);

  const list=placeList.map(item =>{
    return(
      <Text>{item}</Text>
    )
  })

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput 
        style={{
          width:"80%",
          borderBottomWidth:1,
          borderColor:"green",
          padding:7,
        }}
        placeholder="Enter Something..."
        value={inputValue}
        onChangeText={text=>setInputValue(text)}
        />
        <Button
        title="Add"
        //onPress={()=>alert(inputValue)}
        onPress={()=>{
          if(inputValue!==null){
            setPlaceList([...placeList,inputValue])

          }
          
        }}
        
        />

      </View>

      <View style={{
        width:"100%",
      }}>
        {list}

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
    //justifyContent: 'space-between',
    justifyContent: 'flex-start',

    flexDirection:'column',
    //flexDirection:'row',
    //flexDirection:'column-reverse',
  },
  inputView:{
    width:"100%",
    marginTop:50,
    flexDirection:'row',
    justifyContent:'center',
    padding:20,
  }
});
