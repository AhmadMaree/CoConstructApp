import React,{Component} from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import StepIndicator from 'react-native-step-indicator';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Container,Header,Body,Checkbox,Title,Card,CardItem,Left,Right,Content,Grid,Col,Text,Button, Thumbnail, Subtitle}from 'native-base';

import {
  
  StyleSheet,
  
  View,
  AppRegistry,
  StatusBar,
  TouchableOpacity,
 
} from 'react-native';



 import CardStages from './CardStages';
 
    
  const secondIndicatorStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 40,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
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
        iconConfig.name = 'cube-send'
        break
      }
      case 4: {
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
          currentPage: 0
        }
      }
    
      onStepPress = position => {
       this.setState({ currentPage: position })
       
       switch (position) {
        case 0: {
         //
         this.props.navigation.navigate('Profile')
          break
        }
        case 1: {
           // 
          break
        }
        case 2: {
          //
          break
        }
        case 3: {
        //
          break
        }
        case 4: {
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
                onPress={this.onStepPress}
                labels={[
                    'Buliding permit',
                    'Engineering Office',
                    'Ahmad',
                    'Nafe',
                    'End'
                ]}  
               
              />
              
            </View>
            <Container style={{backgroundColor:"#fff"}}>
    
              
    <Card>
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
         <Right >
         <View >
          <TouchableOpacity  onPress={() => this.props.navigation.navigate('Requrmint')} >
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
          <TouchableOpacity  onPress={() => this.props.navigation.navigate('ListRow')} >
        
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
