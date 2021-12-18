import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet,View } from 'react-native';
import InputPlace from './Components/InputPlace/InputPlace';
import PlaceList from './Components/PlaceList/PlaceList';



export default function App() {
  
  const [inputValue,setInputValue]=useState("");

  const[placeList,setPlaceList]=useState([]); 
  

  return (
    <View style={styles.container}>
    <InputPlace
    inputValue={inputValue}
    setInputValue={setInputValue}
    placeList={placeList}
    setPlaceList={setPlaceList}
    /> 
    <PlaceList placeList={placeList}
    />

      
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
});
