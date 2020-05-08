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
} from 'react-native';

import Svg, {
    Line
  } from 'react-native-svg';
  import {Container,Header,Body,Title,Card,CardItem,Left,Right,Content,Grid, Thumbnail, Subtitle}from 'native-base'
  import { ScrollView } from 'react-native-gesture-handler';
  import Ip from './Ip';
    import {createBottomTabNavigator} from 'react-navigation-tabs';
    import { createAppContainer} from 'react-navigation'
  
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
        .then(results=>this.setState({'item':results.response}));

        
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

       renderItem=({item}) => {
         
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
                
                     <Text>{this.state.ch}</Text>,

                ]
                 
                  
               
                 ]
                
                 const state=this.state
               
                 return (
          
                  <View style={formStyles.container}>
        
                 
                  <Table style={{marginVertical:80}} borderStyle={{borderWidth: 1, borderColor: '#000'}}>
                    <Row  data={state.tableHead} style={formStyles.head} textStyle={formStyles.text}/>
                    <Rows   data={state.tableData} textStyle={formStyles.text1}/>
                    <Row style={formStyles.head} textStyle={formStyles.text} data={state.buttons}/>
                  </Table>
                </View>
                      
                );
          }
    }




       render(){
    
        return( 
          <View style={{backgroundColor :'#E1DFDE' , flex : 1}}>
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