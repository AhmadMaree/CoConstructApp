import { ListItem } from 'react-native-elements'
import React, { Component } from 'react';
import { Table, Row, Rows } from 'react-native-table-component';
import AsyncStorage from '@react-native-community/async-storage';

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
  ToastAndroid,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Container,Header,Body,Checkbox,Title,Card,CardItem,Left,Right,Content,Grid,Col, Thumbnail, Subtitle}from 'native-base'
import Ip from './Ip';
import Icon3 from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons';

export default class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
      item:[],
      len:0,
      nam:'',
      ide:'',
      mob:'',
      addr:'',
      ch:'',
      flag : false ,
      flag1 : true,
      tableData :[],
      tableHead :[],
      buttons :[],
      buttons1 :[],

     


    }

  }

 

  renderItem = ({ item ,index}) => {

      this.state.nam=item.name;
      this.state.ide= item.idd;
      this.state.mob= item.tel;
      this.state.addr= item.addd;
      this.state.ch= item.checked1;
      if(this.state.ch === '1'){
            this.state.ch= "Yes"
      }else{
            this.state.ch = "No"
      }
       const state=this.state
       this.state.buttons=[<Button onPress={()=>this.toggle(item.idd)} title ={'Accept'} color="#47d147"  />],
       this.state.buttons1=[<Button onPress={()=>this.toggle1(item.idd)}  title ={'Reject'} color="#ff1a1a" />],
       
       this.state.tableHead =[<Text style={{marginLeft :100}}> Details {this.state.nam}</Text>],
       this.state.tableData = [
       ['name',<Text>{this.state.nam}</Text>],
        ['Identity Number',<Text>{this.state.ide}</Text>],
        ['Mobile Number',<Text>{this.state.mob}</Text>],
        ['Address',<Text>{this.state.addr}</Text>],
        ['Have Title Deed',<Text>{this.state.ch}</Text>]
        
         
      
        ]
       
    
        console.log(this.state.nam)
    return (
      
        <View style={styles.container}>

         
        <Table style={{marginVertical:80}} borderStyle={{borderWidth: 1, borderColor: '#000'}}>
          <Row  data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows  style={{height:70}} data={state.tableData} textStyle={styles.text1}/>
          <Row style={styles.head} textStyle={styles.text} data={state.buttons}/>
          <Row style={styles.head} textStyle={styles.text} data={state.buttons1}/>
        </Table>
        
        
      </View>

    )
    

  }

  componentDidMount() {

    fetch('http://'+Ip.ip+':8088/get_show/').then(results=>results.json())
    .then(results=>this.setState({'item':results.response,'len':results.length}));
   
  }

  render() {

   

    return (

      <View style={styles.connt}>
        <Header style={{backgroundColor :"#7BB062" }}>
                            <Left>
                                <Icon name='home' style={{fontSize: 20, color: '#efefef'}}/>
                            </Left>
                            <Body>
                            <Title>Officer</Title>
                            </Body>
                            <Right>
                               <Icon3 name='md-notifications' style={{fontSize: 20, color: '#efefef' , marginRight : 30}} />
                               <Icon1  onPress={this.singout} name='logout' style={{fontSize: 20, color: '#efefef'}}/>
                               
                            </Right>
                </Header>
               
                       
                    <StatusBar backgroundColor='#1c313a' barStyle='light-content'>
                        </StatusBar>
        <FlatList
          data={this.state.item}
          renderItem={this.renderItem}
          keyExtractor ={item => item.idd}
        />



      </View >



    );
  }


}

const styles = StyleSheet.create({
    container: { //flex: 1, 
        padding: 16,//height:60 ,
        backgroundColor:'#D9D9DD'},
    head: { height: 39 },
    text: { marginLeft:100 },
    text1:{marginLeft:5},
    checkboxx:{
          
      backgroundColor: '#B4B6A4',
      borderRadius: 60,
      borderWidth: .1,
      color: '#000',
      margin: 10,
     
      
         
     },
     forcheckbox :{
         
         justifyContent: 'flex-start',
         //flex: 1,
         flexDirection :'row'
     },
     textsignup1 : {
      color : '#7BB062',
      fontSize :16 ,
      fontWeight :'500',
      marginLeft:-10,
      marginTop:8
  
  },
  
  buttonlogin : {
    width : 300,
    backgroundColor : '#7BB062',
    borderRadius : 25 , 
    marginVertical : -40,
    paddingVertical : 16,
    marginLeft:35
  } ,
  buttnTextlogin : {
    fontSize :16 ,
    fontWeight : '500',
    color : '#ffffff' , 
    textAlign : 'center'
  
  
  },
  connt: {
    backgroundColor: '#d9d9d9',
    flex: 1,
    
   

  }
  });





