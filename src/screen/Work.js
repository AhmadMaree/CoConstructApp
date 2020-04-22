import { ListItem } from 'react-native-elements'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  TouchableHighlight,
  Animated,
  Text,
  FlatList,
  Button,
  StatusBar,

} from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import { SearchBar } from 'react-native-elements'; 
import {Container,Header,Body,Checkbox,Title,Card,CardItem,Left,Right,Content,Grid,Col, Thumbnail, Subtitle}from 'native-base'
import SendSMS from 'react-native-sms'
import Communications from 'react-native-communications';

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
      item1:[],
      len:0,


    }
    this.arrayholder = [];

  }
  Send_SMS= adr => {
    SendSMS.send({
        //Message body
        body: 'send Your Message',
        //Recipients Number
        recipients: [adr],
        //An array of types that would trigger a "completed" response when using android
        successTypes: ['sent', 'queued']
    }, (completed, cancelled, error) => {
        if(completed){
          console.log('SMS Sent Completed');
        }else if(cancelled){
          console.log('SMS Sent Cancelled');
        }else if(error){
          console.log('Some error occured');
        }
    });
  }


  renderItem = ({ item }) => {
    return (
      <View >
       <Card style={{height:120}} >
        <CardItem style={{backgroundColor:"#efefef",height:120}}>
          <Left style>
            <Thumbnail
            source={{uri:encodeURI("http://192.168.1.106:8088/load_image1?img=" + item.photoname)}} style={{width:120,height:70,borderRadius:10,marginRight:5}}/>
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
           <TouchableHighlight onPress={()=>this.Send_SMS(item.adr)}  >
                      <Icon1 name="sms" size={30} color='#ffd24d' />
              </TouchableHighlight>
              <TouchableOpacity   onPress={() => Communications.phonecall(item.adr, true)}>
                       <Icon name="phone-call" size={30} color='#4559C1' />  
              </TouchableOpacity>
           </Right>
           </CardItem>
           </Card>  

      </View>

    )

  }

  componentDidMount() {

    fetch("http://192.168.1.106:8088/get_all_Worker/").then(results=>results.json())
    .then(results=>this.setState({'item':results.response,'len':results.length,'item1':results.response}));

  
   
  }
  searchFilterFunction = text => {    
    this.setState({
      value: text,
    });
    const newData = this.state.item1.filter(item => {      
      const itemData = `${item.field}`;
    
       const textData = text;
        
       return itemData.indexOf(textData) > -1;    
    });
    
    this.setState({ item: newData });  
  };
  renderHeader = () => {    
    return (      
      <SearchBar        
        placeholder="Type Here..."        
        lightTheme        
        round        
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}      
        value={this.state.value}       
      />    
    );  
  };
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };

  render() {
      

    return (

      <View style={Styles.connt}>

        <FlatList
          data={this.state.item}
          renderItem={this.renderItem}
          keyExtractor={item => item.tel}
          ListHeaderComponent={this.renderHeader} 
          ItemSeparatorComponent={this.renderSeparator}
        />



      </View >



    );
  }


}

const Styles = StyleSheet.create({
  connt: {
    backgroundColor: '#d9d9d9',
    flex: 1,
   
   

  },
  buttnTextlogin : {
    fontSize :16 ,
    fontWeight : '500',
    color : '#ffffff' , 
    textAlign : 'center'
  
  
  },
  buttonlogin1 : {
    width : 40,
    backgroundColor : '#ffd24d',
    marginLeft : 100,
    marginTop : 5,
  
    
  
  },
});




