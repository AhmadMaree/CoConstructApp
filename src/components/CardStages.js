
import React,{Component} from'react';
import {
  
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  
  Animated,
  
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import {Container,Header,Body,Checkbox,Title,Card,CardItem,Left,Right,Content,Grid,Col,Text,Button, Thumbnail, Subtitle}from 'native-base';

export default class CardStages extends Component{

  render(){
    return(
      
      <Container style={{backgroundColor:"#fff"}}>
    
              
      <Card >
        <CardItem style={{backgroundColor:"#fff" }}>
          <Left style>
            <Thumbnail
            source={require('../Images/permit.jpg')} style={{width:90,height:70,borderRadius:10,marginRight:5}}/>
            <View style={{alignItems:'flex-start',Top:-10}}> 
              <Title style={{color:"#7BB062"}}>
                  Building
              </Title>
              <Subtitle style={{color:"#000" , paddingLeft : 20}}>
                permit
              </Subtitle>
            </View>
          </Left>
           <Right>
           <Icon.Button
             name="arrow-right"
             backgroundColor="#7BB062"
             >
        Press Here
            </Icon.Button>
           </Right>
           </CardItem>
           </Card> 
           <Card >
        <CardItem style={{backgroundColor:"#fff" }}>
          <Left style>
            <Thumbnail
            source={require('../Images/EngOffice.jpg')} style={{width:90,height:70,borderRadius:10,marginRight:5}}/>
            <View style={{alignItems:'flex-start',Top:-10}}> 
              <Title style={{color:"#7BB062"}}>
                  Engineering
              </Title>
              <Subtitle style={{color:"#000" , paddingLeft : 20}}>
                Office
              </Subtitle>
            </View>
          </Left>
           <Right>
           <Icon.Button
             name="arrow-right"
             backgroundColor="#7BB062"
             >
        Press Here
            </Icon.Button>
           </Right>
           </CardItem>
           </Card>   
          
           </Container>
        
    ); 
  }
}