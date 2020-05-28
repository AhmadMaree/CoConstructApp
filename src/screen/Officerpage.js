import React,{Component, useCallback} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Ionicons';
import Icon4 from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-community/async-storage';
import { Table, Row, Rows } from 'react-native-table-component';
import {
  
  StyleSheet,
  
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image,
  BackHandler,
  FlatList,
  Button,
  ToastAndroid,
} from 'react-native';

import Svg, {
    Line
  } from 'react-native-svg';
  import {Container,Header,Body,Title,Card,CardItem,Left,Right,Content,Grid, Thumbnail, Subtitle}from 'native-base'
  import { ScrollView } from 'react-native-gesture-handler';
  import Ip from './Ip';
    import {createBottomTabNavigator} from 'react-navigation-tabs';
    import { createAppContainer} from 'react-navigation'
    import { SearchBar } from 'react-native-elements'; 
  
    import ShowBooking1 from './ShowBooking'
 const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
 class Officerpage extends Component {


    
  
    constructor(props) {
        super(props);
      this.state = {
            checked1: false,
            email:'',
            pass:'',
            sec : '',
            iduser :'',
            item :[],
            email1 :'',
            len:0,
            nam:'',
            ide:'',
            mob:'',
            addr:'',
            ch:'',
            tableData :[],
            tableHead :[],
            buttons :[],
            emailoff:'',
            arrayholder :[],
            count :0,
        }
        //const {navigate} = this.props.navigation
       
     }

     singout = () => {
      AsyncStorage.clear();
      this.props.navigation.navigate('Login');
    }

    

     componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
        this.getToken2();
        fetch('http://'+Ip.ip+':8088/get_all_Accpet/').then(results=>results.json())
        .then(results=>this.setState({'item':results.response,'arrayholder':results.response}));

        
       }           
       handleBackButton() {
               BackHandler.exitApp();
               return true;
       }
       
       async getToken2() {
        try {
          let userData = await AsyncStorage.getItem("user");
          let data = userData;
          
          if(data != null){
            let d = data.toString();
            this.state.emailoff =d ;
            console.log(this.state.emailoff)
          }
        } catch (error) {
          console.log("Something went wrong", error);
        }
      }

       renderItem=({item,index}) => {
         
          this.state.nam=item.name;
          this.state.ide= item.idd;
          this.state.mob= item.tel;
          this.state.addr= item.addd;
          this.state.ch= item.checked1;
          
          if(this.state.ch === '1' && item.emailoffice === this.state.emailoff){
                this.state.ch= "Yes"
                this.state.buttons=[<Button onPress={()=> this.props.navigation.navigate("SendNotification",
                {token: item.token,
                username: item.name,})} title ={'SendMessage for user'} color="#7BB062" />],
                
                
                this.state.tableHead =[<Text style={{marginLeft :100}}> Details {this.state.nam}</Text>],
                this.state.tableData = [
                ['name',<Text>{this.state.nam}</Text>],
                 ['Identity Number',<Text>{this.state.ide}</Text>],
                 ['Mobile Number',<Text>{this.state.mob}</Text>],
                 ['Address',<Text>{this.state.addr}</Text>],
                 ['Have Title Deed',
                
                 <View>
                 <Text style={{marginLeft:60}}>{this.state.ch}</Text>
                 <View style={formStyles.hed}>
                 <View style={formStyles.ProfileWarp}> 
                 <Image  style={formStyles.ProfileTopic1} source={{uri:encodeURI('http://'+Ip.ip+':8088/load_image1?img=' + `${item.photo}`)}}/>
                
                </View>
                
             </View>
             </View>
               
                ]
                 
                  
               
                 ]
                
                 const state=this.state
               
                 return (
          
                  <View style={formStyles.container}>
        
                 
                  <Table style={{marginVertical:30}} borderStyle={{borderWidth: 1, borderColor: '#000'}}>
                    <Row  data={state.tableHead} style={formStyles.head} textStyle={formStyles.text}/>
                    <Rows   data={state.tableData} textStyle={formStyles.text1}/>
                    <Row style={formStyles.head} textStyle={formStyles.text} data={state.buttons}/>
                  </Table>
                </View>
                      
                );
          } else if(this.state.ch === '0' && item.emailoffice === this.state.emailoff){
                    this.state.count=parseInt(this.state.count)+parseInt(1);

                    var data = JSON.stringify({
                      "to": item.token,
                      "content_available": true,
                      "notification": {
                          "title": "Hi " + item.name,
                          "body": "You've Recive massage from office",
                          "sound": "default",
                          "icon": "logo"
                      },
                      "data": {
                          "name": "Reject Booking",
                          "description": "Hello, your Booking Rejected Because you don't have a Title Deed."
                      }
                  });
          
                  var xhr = new XMLHttpRequest();
                  xhr.withCredentials = true;
          
                  xhr.addEventListener("readystatechange", function () {
                      if (this.readyState === 4) {
                          console.log(this.responseText);
                      }
                  });
          
                  xhr.open("POST", "https://fcm.googleapis.com/fcm/send");
                  xhr.setRequestHeader("content-type", "application/json");
                  xhr.setRequestHeader("authorization", "key=AIzaSyDZHylej3wjHt1y8L_3InntLUptJWMPZI8");
                  xhr.setRequestHeader("cache-control", "no-cache");
                  xhr.setRequestHeader("postman-token", "b6fe8a19-d390-5e0a-b701-e9d1a2eb3ad1");
          
                  xhr.send(data);
                  ToastAndroid.show("Response Sent!", ToastAndroid.SHORT)
                  ToastAndroid.show("Massge Reject send for"+this.state.count+"Users.", ToastAndroid.LONG)

          }
    }


    searchFilterFunction = text => {    
      this.setState({
        value: text,
      });
      const newData = this.state.arrayholder.filter(item => {      
        const itemData = `${item.addd}`;
      
         const textData = text;
          
         return itemData.indexOf(textData) > -1;    
      });
      
      this.state.item = newData ;
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



       render(){
    
        return( 
          <View style={{backgroundColor :'#E1DFDE' , flex : 1}}>
                 <Header style={{backgroundColor :"#7BB062" }}>
                            <Left>
                                <Icon name='home' style={{fontSize: 20, color: '#efefef'}}/>
                            </Left>
                            <Body>
                            <Title>List of Booking</Title>
                            </Body>
                            <Right>
                            
                               <Icon1  onPress={this.singout} name='logout' style={{fontSize: 20, color: '#efefef'}}/>
                               
                            </Right>
                </Header>
               
                       
                    <StatusBar backgroundColor='#1c313a' barStyle='light-content'>
                        </StatusBar>

                       
                        
                        
                        <FlatList
                                data={this.state.item}
                                renderItem={this.renderItem}
                                keyExtractor ={item => item.idd}
                                ListHeaderComponent={this.renderHeader} 
                                ItemSeparatorComponent={this.renderSeparator}
                                />

                                
                
                        
          </View>
                 
              
        );}





}

const formStyles = StyleSheet.create({
    connt : {
       // backgroundColor: '#E1DFDE',
        //flex: 1,
       // alignItems :  'center',
        
    } ,
    text2 : {
        color : 'rgba(255,255,255,0.6)',
        fontSize : 16 
    },
    button : {
        margin:20,
        marginLeft : 50,
        justifyContent: 'center',
        paddingVertical : 16 ,
        flexDirection :'row',
        width : 300,
        backgroundColor : '#7BB062',
        borderRadius : 25 ,
        
    },
    Scrollview :{
      backgroundColor: '#E1DFDE',
      padding: 10,
      flex :1
      // paddingTop: STATUSBAR_HEIGHT,
    },
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
  
 

},
hed1 : {
  //flex : 1 , 
  alignItems :  'center',
  justifyContent: 'center' ,
  padding :-5 ,
 // backgroundColor : 'rgba(0,0,0,0.5)',
 // height:150

},
ProfileWarp1 : {
width : 40 , 
height :40 , 
borderRadius : 0 , 
borderColor : 'rgba(255,255,255,255)' , 
borderWidth : 16 , 
marginLeft:-50

},
ProfileTopic : {
  //flex :1 , 
  width : null , 
  //alignSelf : 'stretch' , 
  borderRadius : 0 , 
  borderColor : '#fff',
  borderWidth : 2 , 
  //alignContent:'space-between'
  width : 40 , 
  height :40 , 
  marginLeft:-16,
  marginTop:-16
  
  
  },
  hed : {
    //flex : 1 , 
    alignItems :  'center',
    justifyContent: 'center' ,
    padding :-5 ,
   // backgroundColor : 'rgba(0,0,0,0.5)',
   // height:150
   marginLeft:20
  
  },
  ProfileWarp : {
  width : 120 , 
  height :120 , 
  borderRadius : 0 , 
  borderColor : 'rgba(255,255,255,255)' , 
  borderWidth : 16 , 
  marginLeft:-50
  
  },
  ProfileTopic1 : {
  //flex :1 , 
  width : null , 
  //alignSelf : 'stretch' , 
  borderRadius : 0 , 
  borderColor : '#fff',
  borderWidth : 2 , 
  //alignContent:'space-between'
  width : 120 , 
  height :120 , 
  marginLeft:-16,
  marginTop:-16
  
  
  },
  email :  {
    marginTop :20 , 
    fontSize : 16 , 
    color : '#000',
   // fontWeight  :'bold',
    marginTop:30,
    fontFamily:'Bellota-LightItalic',
    marginLeft:-40
   
  },     

})


const AppNavigator1 =createBottomTabNavigator ({

  
  Officerpage:{
   screen:Officerpage,
   navigationOptions:{
      tabBarLabel:'Booking',
      
      tabBarIcon:({tintColor})=>(
          <Icon4 name="wechat"
          color={tintColor}
          size={24}/>
      )
  }
  },
  ShowBooking1:{
   screen:ShowBooking1,
   navigationOptions:{
      tabBarLabel:'Charts',
      tabBarIcon:({tintColor})=>(
          <Icon4 name="barchart"
          color={tintColor}
          size={24}/>
      )
  }
 }
},
  {
    lazy: true,
    tabBarOptions: {
      style: {
         backgroundColor: '#7BB062',
      }
    },
    swipeEnabled: true,
    animationEnabled: true,
    tabBarPosition: 'bottom',
    initialRouteName: 'Officerpage',
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'grey',
    },
  },
);

export default createAppContainer(AppNavigator1);