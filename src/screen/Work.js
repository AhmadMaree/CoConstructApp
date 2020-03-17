import { ListItem } from 'react-native-elements'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  
  Animated,
  Text,
  FlatList,
  Button,
  StatusBar,

} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import {Container,Header,Body,Checkbox,Title,Card,CardItem,Left,Right,Content,Grid,Col, Thumbnail, Subtitle}from 'native-base'


 /*  <Image style={{width:100,height:100,margin:5}}
          source={require('../Images/logo1.png')} />
        <View style={{flex:1,justifyContent:'center'}}> 
          <Text>      Name:   {item.name}</Text>
          <Text>      Field:  {item.field} </Text>
          <Text>      Mobile: {item.adr}</Text>
          <Text>      Address:{item.tel}</Text>
         
          </View>
          <Button title='Contact' style={{width:'20%',height:'20%',justifyContent:'center',alignitem:'center'}}/>*/





export default class Work extends Component {

  constructor() {
    super();
    this.state = {
      dataSource: [],
      item:[],
      len:0,


    }

  }


  renderItem = ({ item }) => {
    return (
      <View >
       <Card style={{height:120}} >
        <CardItem style={{backgroundColor:"#efefef",height:120}}>
          <Left style>
            <Thumbnail
            source={{uri:encodeURI("http://192.168.1.103:8088/load_image1?img=" + item.photoname)}} style={{width:120,height:70,borderRadius:10,marginRight:5}}/>
            <View style={{alignItems:'flex-start',Top:20}}> 
              <Title style={{color:"#000"}}>
              <Text style={{fontFamily :'Bellota-Bold'}}>Name:{item.name}</Text>
              
              </Title>
             
              <Text style={{fontFamily :'Charm-Regular'}}>Field:{item.field} </Text>
              <Text>Mobile:{item.adr}</Text>
              <Text>Address{item.tel}</Text>
             
            </View>
          </Left>
         
           <Right>
           <Button title='Book' style={{marginRight:100}} color ='#7BB062' />
           </Right>
           </CardItem>
           </Card>  

      </View>

    )

  }

  componentDidMount() {

    fetch("http://192.168.1.103:8088/get_all_Worker/").then(results=>results.json())
    .then(results=>this.setState({'item':results.response,'len':results.length}));
   
  }

  render() {



    return (

      <View style={Styles.connt}>

        <FlatList
          data={this.state.item}
          renderItem={this.renderItem}
        />



      </View >



    );
  }


}

const Styles = StyleSheet.create({
  connt: {
    backgroundColor: '#d9d9d9',
    flex: 1,
   
   

  }
});




