import React from "react";
import {View,Modal,Image,Text,Button} from 'react-native';

const PlaceDetail=props =>{
  console.log(props.place.value)
  return(
    <Modal>
      <View>              
        <Text>{props.place.value}</Text>
        <View>
          <Button title="DELETE"/>
        </View>
      </View>
    </Modal>
  )
}

export default PlaceDetail;