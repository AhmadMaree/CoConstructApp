import React,{Component} from'react';
import {
  
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  StatusBar,
  Animated,
  AsyncStorage,
  
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons';

import {Container,Header,Body,Checkbox,Title,Card,CardItem,Left,Right,Content,Grid,Col,Text,Button, Thumbnail, Subtitle}from 'native-base'

export default class Admin extends Component{



  singout = () => {
    AsyncStorage.clear();
    this.props.navigation.navigate("Login");
  }

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
                <Right>
                <Icon1  onPress={this.singout} name='logout' style={{fontSize: 20, color: '#efefef'}}/>
                </Right>
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

      <Card style={{height:160}} >
        <CardItem style={{backgroundColor:"#efefef",height:160}}>
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
           <View>
           <Icon.Button
             name="arrow-right"
             backgroundColor="#455a64"
             style={{paddingLeft :16 , paddingRight : 10}}
             onPress={()=> this.props.navigation.navigate('Addsurvey')}
             >
            Insert
            </Icon.Button>
            </View>
            <View style={{marginTop :4}}>
            <Icon.Button
             name="arrow-right"
             backgroundColor="#455a64"
             style={{paddingLeft :14 , paddingRight : 5}}
             onPress={()=> this.props.navigation.navigate('Deletesurvey')}
             >
             Modify
            </Icon.Button>
            </View>
           </Right>
           </CardItem>
           </Card>  
           <Card style={{height:160}}>
        <CardItem style={{backgroundColor:"#efefef",height:160}}>
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
            <View>
           <Icon.Button
             name="arrow-right"
             backgroundColor="#455a64"
             style={{paddingLeft :16 , paddingRight : 10}}
             onPress={()=> this.props.navigation.navigate('Officeadd')}
             >
            Insert
            </Icon.Button>
            </View>
           <View style={{marginTop :4}}>
            <Icon.Button
             name="arrow-right"
             backgroundColor="#455a64"
             style={{paddingLeft :14 , paddingRight : 5}}
             onPress={()=> this.props.navigation.navigate('DeleteOffice')}
             >
             Modify
            </Icon.Button>
            </View>
           </Right>
           </CardItem>
           </Card> 
           <Card style={{height:160}}>
        <CardItem style={{backgroundColor:"#efefef",height:160}}>
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
          <View >
           <Icon.Button
             name="arrow-right"
             backgroundColor="#455a64"
             style={{paddingLeft :16 , paddingRight : 10}}
             onPress={()=> this.props.navigation.navigate('AddWorker')}
             >
          Insert
            </Icon.Button>
            </View>
            <View style={{marginTop :4}}>
            <Icon.Button
             name="arrow-right"
             backgroundColor="#455a64"
             style={{paddingLeft :14 , paddingRight : 5}}
             onPress={()=> this.props.navigation.navigate('DeleteWorker')}
             >
           Modify
            </Icon.Button>
            </View>
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
             onPress={()=> this.props.navigation.navigate('AdminFeedBack')}
             >
             Show
            </Icon.Button>
           </Right>
           </CardItem>
           </Card>

         
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