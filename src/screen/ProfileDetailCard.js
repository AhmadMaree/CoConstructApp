import React from 'react';

import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  ThinGrayLine,
  ThickGrayLine,
} from './Lines';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#BDC2C9',
    backgroundColor:'#d4d9d9'
  },
});

export default ({ onPress }) => (
  <View style={styles.container}>
    <View style={{ flex: 1 }}>
    <Icon name="home" size={25} color='#7BB062' style={{marginTop:2}} />
      <Text style={{fontFamily:'Bellota-Bold',marginTop:-22,marginLeft:30}}> Palestine-Nablus-Rafedia-Main Street</Text>
      <Icon name="phone-square" size={25} color='#7BB062' style={{marginTop:4}} />
      <Text  style={{fontFamily:'Bellota-Bold',marginTop:-26,marginLeft:30}}> Telefax:+970 9 2330340 </Text>
    </View>

    
  </View>
);