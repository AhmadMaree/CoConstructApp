import React,{Component, useCallback} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Ionicons';
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

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
export default class Officerpage extends Component {


    
  
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
            buttons :[],
            buttons1 :[],
            tableData :[],
        }
        //const {navigate} = this.props.navigation
     }

     singout = () => {
      AsyncStorage.clear();
      this.props.navigation.navigate('Login');
    }

    

     componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
       
        fetch('http://'+Ip.ip+':8088/get_all_Accpet/').then(results=>results.json())
        .then(results=>this.setState({'item':results.response}));

        
       }
           
       componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
        fetch('http://'+Ip.ip+':8088/get_all_Accpet/').then(results=>results.json())
        .then(results=>this.setState({'item':results.response}));
       }
           
       handleBackButton() {
               BackHandler.exitApp();
               return true;
       }
       


       renderItem=({item}) => {
         console.log(item.token);
         console.log(item.name);
         this.state.buttons=[<Button onPress={()=> this.props.navigation.navigate("SendNotification",
          {token: item.token,
          username: item.name,})} title ={'SendMessage for user'} color="#7BB062" />],

         this.state.tableData = [
         ['name',<Text>{item.name}</Text>],
           ['Email',<Text>{item.emailuser}</Text>], 
         
           ]
        return (
          
             <View style={formStyles.container}>

         
        <Table style={{marginVertical:10}} borderStyle={{borderWidth: 1, borderColor: '#000'}}>
          <Rows  style={{height:70}} data={this.state.tableData} textStyle={formStyles.text1}/>
          <Row style={formStyles.head} textStyle={formStyles.text} data={this.state.buttons}/>
        </Table>
        
        
      </View>
              
        );
                          

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

                        <TouchableOpacity  onPress={()=> this.props.navigation.navigate('ShowBooking')} style={formStyles.button}>
                            <Text style={formStyles.text2}>Show Booking</Text>
                        </TouchableOpacity>  
                       
                        <Svg height="100" width="400">
                            <Line x1="0" y1="50" x2="400" y2="50" stroke="#7BB062" strokeWidth="1" />
                            <Text style={{fontFamily : 'Bellota-Regular',marginLeft:149,marginTop:20}}>List of Accepted</Text>
                        </Svg>

                       
                        
                        
                        <FlatList
                                data={this.state.item}
                                renderItem={this.renderItem}
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
      text1 :{marginLeft:5}

})