
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
import StarRating from 'react-native-star-rating'

export default class Offic extends Component {

    render(){
    return(
        <View style={{width:this.props.width/2-30,height:this.props.width/2-30,borderWidth:0.5,borderColor:'#dddddd'}}>
        <View style={{flex:1}}>
                <Image style={{flex:1,width:null,height:null,resizeMode:'cover'}} source={require('../Images/worker.jpg')}/>
                </View>
                <View style={{flex:1,alignItems:'flex-start',justifyContent:'space-evenly',paddingLeft:10}}>
                    <Text style={{fontSize:10,color:'#bd3838'}}>{this.props.name}</Text>
                    <Text style={{fontSize:12,fontWeight:'bold'}}>{this.props.address}</Text>
                    <Text style={{fontSize:10}}>{this.props.price}</Text>
                    <StarRating
                    disabled={true}
                    maxStars={5}
                    rating={this.props.rating}
                    starSize={10}
                    />

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