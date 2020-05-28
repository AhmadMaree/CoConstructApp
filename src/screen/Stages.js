import React,{Component} from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import StepIndicator from 'react-native-step-indicator';
import Icon from 'react-native-vector-icons/FontAwesome';
import PushNotification from 'react-native-push-notification';
import {Container,Header,Body,Checkbox,Title,Card,CardItem,Left,Right,Content,Grid,Col,Text,Button, Thumbnail, Subtitle}from 'native-base';

import {
  
  StyleSheet,
  
  View,
  AppRegistry,
  StatusBar,
  TouchableOpacity,
  AsyncStorage,
  Alert
} from 'react-native';



 import CardStages from './CardStages';
 
    
  const secondIndicatorStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 40,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 5,
    stepStrokeCurrentColor: '#7BB062',
    stepStrokeWidth: 3,
    separatorStrokeFinishedWidth: 4,
    stepStrokeFinishedColor: '#7BB062',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#7BB062',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#7BB062',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#7BB062',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#7BB062'
  }
  

  
  const getStepIndicatorIconConfig = ({ position, stepStatus }) => {
    const iconConfig = {
      name: 'feed',
      color: stepStatus === 'finished' ? '#ffffff' : '#7BB062',
      size: 15
    }
    switch (position) {
      case 0: {
        iconConfig.name = 'newspaper'
        break
      }
      case 1: {
        iconConfig.name = 'office-building'
        break
      }
      case 2: {
        iconConfig.name = 'worker'
        break
      }
      case 3: {
        iconConfig.name = 'zend'
        break
      }
      default: {
        break
      }
    }
    return iconConfig
  }
  

  export default class Stages extends Component {
    constructor () {
        super()
        this.state = {
          currentPage: 0,
          email1:'',
          Token : '',
        }
      }

      componentDidMount(){
        this.getToken1();
        console.log(this.state.email1)
        this.configureNotifications();
      }
      async getToken1() {
        try {
          let userData = await AsyncStorage.getItem("user1");
          let data = userData;
          
          if(data != null){
            let d = data.toString();
            this.state.email1=d ;
            console.log(this.state.email1)
            console.log(this.state.email1)
          }
        } catch (error) {
          console.log("Something went wrong", error);
        }
      }
      
      configureNotifications() {
        PushNotification.configure({
          // (optional) Called when Token is generated (iOS and Android)
          
          onRegister: function(token) {
            console.log("TOKEN:", token.token);
            
            AsyncStorage.setItem("Token",token.token);
            
          },

        
          // (required) Called when a remote or local notification is opened or received
          onNotification: function(notification) {
            console.log("NOTIFICATION:", notification);
        
            if (!notification.foreground) {
              if (notification.name == null) {
                
                
              }
              else {
                console.log("ahamdmaree")
                this.props.navigation.navigate('receiveNotification', {

                  img_name: notification.name,
                  img_description: notification.description,
                  
                })
              }
              
            }
            else {
              if (notification.name == null) {
                Alert.alert("Someone SEND Attintion For you", "Would you like to show the message?",
                  [
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                    {
                      text: 'OK',
                      onPress: () => {
                        this.props.navigation.navigate('SendNotification',
                        {
                          token: notification.sender_token,
                          username: notification.sender_username,
                          hideBackArrow: false
                        })
                        
                      }
                    }
                  ],
                  { cancelable: false })
              }
              else {
                Alert.alert("You've Recive a massege", "Would you like to show the message?",
                  [
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                    {
                      text: 'OK',
                      onPress: () => {
    
                        this.props.navigation.navigate('ReceiveNotification',{
                          img_name: notification.name,
                          img_description: notification.description,
                        })
                      }
                    }
                  ],
                  { cancelable: false })
              }
            }
          }.bind(this),
          // Android only
          senderID: "834119776251",
          // iOS only
         /* permissions: {
            alert: true,
            badge: true,
            sound: true
          },*/
          popInitialNotification: true,
          requestPermissions: true
        });

        
    
      }
    
      onStepPress = position => {
       this.setState({ currentPage: position })
       
       switch (position) {
        case 0: {
         //
         this.props.navigation.navigate('ListRow')
          break
        }
        case 1: {
           // 
           this.props.navigation.navigate('Survey')
          break
        }
        case 2: {
          //
          this.props.navigation.navigate('CatagoryWorker')
          break
        }
        case 3: {
        //
          break
        }
        default: {
          break
        }
      }
    }
    renderStepIndicator = params => (
    <MaterialIcon {...getStepIndicatorIconConfig(params)} />
    )

  renderLabel = ({ position, stepStatus, label, currentPosition }) => {
    return (
      <Text
        style={
          position === currentPosition
            ? styles.stepLabelSelected
            : styles.stepLabel
        }
      >
        {label}
      </Text>
    )
  }

    render(){
        return(
           
        <View style={styles.container}>
            
            <View style={styles.stepIndicator} key={1}>
              <StepIndicator
                renderStepIndicator={this.renderStepIndicator}
                customStyles={secondIndicatorStyles}
                currentPosition={this.state.currentPage}
                stepCount={4}
                onPress={this.onStepPress}
                labels={[
                    'Engineering Office',
                    'Survey Engineering',
                    'Worker',
                    'END',
                ]}  
               
              />
              
            </View>
            <Container style={{backgroundColor:"#fff"}}>
    
              
    <Card>
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
         <View >
          <TouchableOpacity  onPress={() => this.onStepPress(0)} >
           <Icon name="arrow-right" size={25} color='#7BB062' style={{marginTop:12}} />
          </TouchableOpacity>
          </View>
         </Right>
         </CardItem>
         </Card>  
         <Card >
      <CardItem style={{backgroundColor:"#fff" }}>
        <Left style>
          <Thumbnail
          source={require('../Images/surfeng.jpg')} style={{width:90,height:70,borderRadius:10,marginRight:5}}/>
          <View style={{alignItems:'flex-start',Top:-10}}> 
            <Title style={{color:"#7BB062"}}>
                Survey
            </Title>
            <Subtitle style={{color:"#000" , paddingLeft : 20}}>
              Engineering
            </Subtitle>
          </View>
        </Left>
         <Right>
         <View >
          <TouchableOpacity  onPress={() => this.onStepPress(1)} >
        
           <Icon name="arrow-right" size={25} color='#7BB062' style={{marginTop:12}} />
        
        
          </TouchableOpacity>
          </View>
         </Right>
         </CardItem>
         </Card>  
         <Card> 
         <CardItem style={{backgroundColor:"#fff" }}>
        <Left style>
          <Thumbnail
          source={require('../Images/worker.jpg')} style={{width:90,height:70,borderRadius:10,marginRight:5}}/>
          <View style={{alignItems:'flex-start',Top:-10}}> 
            <Title style={{color:"#7BB062" , padding : 6}}>
                Worker
            </Title>
          </View>
        </Left>
         <Right>
         <View >
          <TouchableOpacity  onPress={() => this.onStepPress(2)} >
        
           <Icon name="arrow-right" size={25} color='#7BB062' style={{marginTop:12}} />
        
        
          </TouchableOpacity>
          </View>
         </Right>
         </CardItem>
          </Card>
         </Container>
          
          </View>
                   
        );
    }
}

const styles = StyleSheet.create({
    container: {
         flex :1 , 
      backgroundColor: '#ffffff',
     

    },
    stepIndicator: {
        marginVertical: 50,
      
    },
    page: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    stepLabel: {
      fontSize: 12,
      textAlign: 'center',
      fontWeight: '500',
      color: '#999999'
    },
    stepLabelSelected: {
      fontSize: 12,
      textAlign: 'center',
      fontWeight: '500',
      color: '#4aae4f'
    }
  });  
