import React,{Component} from'react';
import {
  
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  StatusBar,
  Animated
  
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import {Container,Header,Body,Checkbox,Title,Card,CardItem,Left,Right,Content,Grid,Col,Text,Button, Thumbnail, Subtitle}from 'native-base'
export default class Admin extends Component{

  render(){
    return(
      
      <Container style={{backgroundColor:'#efefef'}}>

          
            <Header style={{backgroundColor :"#7BB062" }}>
                <Left>
                    <Icon name='home' style={{fontSize: 20, color: '#efefef'}}/>
                </Left>
                <Body>
                <Title>Co Construct</Title>
                </Body>
                <Right/>
                </Header>
            <StatusBar backgroundColor='#1c313a' barStyle='light-content'>
            </StatusBar>
    
              <Card style={{alignItems:'center',backgroundColor:"#455a64"}} >
                  <CardItem style={{backgroundColor:'#455a64'}}>
                   
                   <View >
                   <Icon name="home" style={{color:'#000', }}/>
                   </View>
                   <Text style={{color:"#7BB062",fontSize:20,}}>   Your address goes here   </Text>
                   <View>
                   <Icon name="heart" style={{color:'red'}}  />
                   
                   </View>
                  </CardItem>
              </Card>

      <Card style={{height:120}} >
        <CardItem style={{backgroundColor:"#efefef",height:120}}>
          <Left style>
            <Thumbnail
            source={require('../Images/surfeng.jpg')} style={{width:120,height:70,borderRadius:10,marginRight:5}}/>
            <View style={{alignItems:'flex-start',Top:-10}}> 
              <Title style={{color:"#000"}}>
              Survey 
              </Title>
              <Subtitle style={{color:"#000"}}>
              Engineer
              </Subtitle>
            </View>
          </Left>
           <Right>
           <Icon.Button 
             name="arrow-right"
             backgroundColor="#455a64"
             
             >
              EDIT
            </Icon.Button>
           </Right>
           </CardItem>
           </Card>  
           <Card style={{height:120}}>
        <CardItem style={{backgroundColor:"#efefef",height:120}}>
          <Left style>
            <Thumbnail
            source={require('../Images/EngOffice.jpg')} style={{width:120,height:70,borderRadius:10,marginRight:5}}/>
            <View style={{alignItems:'flex-start',Top:-10}}> 
              <Title style={{color:"#000"}}>
                  Engineering
              </Title>
              <Subtitle style={{color:"#000"}}>
                office
              </Subtitle>
            </View>
          </Left>
           <Right>
           <Icon.Button
             name="arrow-right"
             backgroundColor="#455a64"
             >
           EDIT
            </Icon.Button>
           </Right>
           </CardItem>
           </Card> 
           <Card style={{height:120}}>
        <CardItem style={{backgroundColor:"#efefef",height:120}}>
          <Left style>
            <Thumbnail
            source={require('../Images/worker.jpg')} style={{width:120,height:70,borderRadius:10,marginRight:5}}/>
            <View style={{alignItems:'flex-start',Top:-10}}> 
              <Title style={{color:"#000"}}>
                  Workers
              </Title>
              <Subtitle style={{color:"#000"}}>
                
              </Subtitle>
            </View>
          </Left>
           <Right>
           <Icon.Button
             name="arrow-right"
             backgroundColor="#455a64"
             >
          EDIT
            </Icon.Button>
           </Right>
           </CardItem>
           </Card> 
           <Card style={{height:120}}>
        <CardItem style={{backgroundColor:"#efefef",height:120}}>
          <Left style>
            <Thumbnail
            source={require('../Images/feedback.jpg')} style={{width:120,height:70,borderRadius:10,marginRight:5}}/>
            <View style={{alignItems:'flex-start',Top:-10}}> 
              <Title style={{color:"#000"}}>
                  FeedBack
              </Title>
              <Subtitle style={{color:"#000"}}>
                
              </Subtitle>
            </View>
          </Left>
           <Right>
           <Icon.Button
             name="arrow-right"
             backgroundColor="#455a64"
             >
             Show
            </Icon.Button>
           </Right>
           </CardItem>
           </Card>

           <TouchableOpacity style={formStyles.buttonlogin} onPress={() => this.props.navigation.navigate('Login')}>
                 <Text style={formStyles.buttnTextlogin}>Let's Start</Text>
             </TouchableOpacity>
         
           </Container> 
    ); 
  }
}
const formStyles = StyleSheet.create({
    
    buttonlogin : {
        width : 300,
        backgroundColor : '#7BB062',
        borderRadius : 25 , 
        marginVertical : 16,
        paddingVertical : 16,
        alignContent : 'center',
        marginLeft : 40 
    } ,
    buttnTextlogin : {
        fontSize :16 ,
        fontWeight : '500',
        color : '#ffffff' , 
        textAlign : 'center'


    }

});   