import {  View,Text } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { Thumbnail, List, ListItem, Separator } from 'native-base';
import React,{Component} from'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Requrmint extends Component{
render(){
  return (
    <View>
    <Collapse style={{marginTop:25,marginRight:10,marginLeft:10}}>
      <CollapseHeader style={{alignItems:'center',backgroundColor:'#7BB062'}}>
        <View style={{width:'100%',alignItems:'center'}}>
          <Thumbnail square style={{width:'100%',height:260 }} source={{uri: 'https://www.toronto.ca/wp-content/uploads/2017/09/98af-building_permit6016_large-500x502.gif'}} />
        </View>
        <View style={{width:'60%',height:100,marginTop:15}}>
          <Text>Before you can obtain a license, you must visit these places.</Text>
          <Text>Please press here to continue.</Text>
          <Icon size={40} name="angle-down" style={{color:'#455a64',marginLeft:90}}  />

        </View>
      </CollapseHeader>
      <CollapseBody style={{alignItems:'center',justifyContent:'center',flexDirection:'row',backgroundColor:'#EDEDED'}}>
        <Collapse style={{flexDirection:'row'}}>
          <CollapseHeader>
            <Thumbnail source={{uri: 'https://cdn3.iconfinder.com/data/icons/trico-circles-solid/24/Circle-Solid-Phone-512.png'}} />
          </CollapseHeader>
          <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
            <Text>+1 310 346 0018</Text>
          </CollapseBody>
        </Collapse>
        <Collapse style={{flexDirection:'row'}}>
          <CollapseHeader>
            <Thumbnail source={{uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/1674-200.png'}} />
          </CollapseHeader>
          <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
            <Text>sample@sample.ma</Text>
          </CollapseBody>
        </Collapse>
      </CollapseBody>
    </Collapse>
  </View>
   

  );
}
}