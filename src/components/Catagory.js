import React,{Component} from 'react';
import { Container, Content,Card,CardItem,Left,Right, Form, Item, Input, Label } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../Color/Colors';

import {
  
  StyleSheet,
  
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
  ToastAndroid
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import {createBottomTabNavigator} from 'react-navigation'

export default class Catagory extends Component {

    render(){
    return(
        <View style={{height:130,width:130,marginLeft:20,borderWidth:0.5,borderColor:'#dddddd'}}>
        <View style={{flex:2}}>
       <Image style={{flex:1,width:null,height:null,resizeMode:'cover'}} source={this.props.imageUri}/>
       </View>
       <View style={{flex:1}}>
           <Text style={{paddingLeft:10,paddingTop:10}}> {this.props.name} </Text>

       </View>


       </View>
    );

    }
  }

 


  const styles = StyleSheet.create({
    container: { 
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',

    }
   
    });