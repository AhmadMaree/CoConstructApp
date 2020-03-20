import React,{Component, useCallback} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Ionicons';
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
} from 'react-native';

import Svg, {
    Line
  } from 'react-native-svg';
  import {Container,Header,Body,Title,Card,CardItem,Left,Right,Content,Grid,Button, Thumbnail, Subtitle}from 'native-base'
import { ScrollView } from 'react-native-gesture-handler';

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
            item :[]
        }
        //const {navigate} = this.props.navigation
     }


    

     componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);

        
        fetch("http://192.168.1.103:8088/get_all_Accpet/").then(results=>results.json())
        .then(results=>this.setState({'item':results.response}));

        
       }
           
       componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
       }
           
       handleBackButton() {
               BackHandler.exitApp();
               return true;
       }


       renderItem=({item}) => {

        return (
            <View>
            <Card style={{height:120}} >
            <CardItem style={{backgroundColor:"#efefef",height:120}}>
              <Left style>
                <View style={{alignItems:'flex-start',Top:20}}> 
                  <Title style={{color:"#000"}}>
                  <Text style={{fontFamily :'Bellota-Bold'}}>Name:{item.name}</Text>
                  
                  </Title>
                 
                  <Text style={{fontFamily :'Charm-Regular'}}>Identity Number:{item.idd} </Text>
                  <Text>Mobile:{item.tel}</Text>
                  <Text>Address :{item.addd}</Text>
                 
                </View>
              </Left>
             
               <Right>
               <Icon2  size={45} name={'send-circle'} style={{marginRight:20}} color ='#7BB062' />
               </Right>
               </CardItem>
               </Card>  
               </View>
        );


    }



       render(){
    
        return( 
            <Container>
                 <Header style={{backgroundColor :"#7BB062" }}>
                            <Left>
                                <Icon name='home' style={{fontSize: 20, color: '#efefef'}}/>
                            </Left>
                            <Body>
                            <Title>Officer</Title>
                            </Body>
                            <Right>
                               <Icon3 name='md-notifications' style={{fontSize: 20, color: '#efefef' , marginRight : 30}} />
                               <Icon1  onPress={()=> this.props.navigation.navigate('Login')} name='logout' style={{fontSize: 20, color: '#efefef'}}/>
                               
                            </Right>
                </Header>
                <View style={formStyles.connt}>
                       
                    <StatusBar backgroundColor='#1c313a' barStyle='light-content'>
                        </StatusBar>

                        <TouchableOpacity  onPress={()=> this.props.navigation.navigate('ShowBooking')} style={formStyles.button}>
                            <Text style={formStyles.text}>Show Booking</Text>
                        </TouchableOpacity>  
                        <View  >
                        <Svg height="100" width="400">
                            <Line x1="0" y1="50" x2="400" y2="50" stroke="#7BB062" strokeWidth="1" />
                            <Text style={{fontFamily : 'Bellota-Regular',marginLeft:149,marginTop:20}}>List of Accepted</Text>
                        </Svg>

                       
                        
                        </View>  
                        
                </View>

                <ScrollView style={formStyles.Scrollview}>
                        <FlatList
                                data={this.state.item}
                                renderItem={this.renderItem}
                                />
                         </ScrollView>
                 
                </Container>
        );}





}

const formStyles = StyleSheet.create({
    connt : {
        backgroundColor: '#E1DFDE',
        //flex: 1,
        alignItems :  'center',
        
    } ,
    text : {
        color : 'rgba(255,255,255,0.6)',
        fontSize : 16 
    },
    button : {
        margin:20,
        
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
      // paddingTop: STATUSBAR_HEIGHT,
    }

})