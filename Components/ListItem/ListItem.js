import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const ListItem=props =>{
  return(
    <View>
      <Text>
        {props.placeName}
      </Text>
    </View>)
}

export default ListItem;