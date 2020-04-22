import React,{Component} from 'react';
import { Container, Content,Card,CardItem,Left,Right, Form, Item, Input, Label } from 'native-base';
import {
  
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
  ToastAndroid,
  SafeAreaView,
  Platform,
  ScrollView,
  Dimensions

} from 'react-native';

import Catagory from '../components/Catagory';
import Offic from '../components/Offic';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { createAppContainer , createSwitchNavigator} from 'react-navigation'
import Stages from './Stages';

const {height,width}=Dimensions.get('window')
export default class Survey extends Component {
  
  
    render(){
    return(
        <SafeAreaView style={{flex:1}}>
        <View style={{flex:1}}>
            <View style={{height:80,backgroundColor:'#fff',borderBottomWidth:1,borderBottomColor:'#fff'}}>
            <View style={{flexDirection:'row', padding:10,backgroundColor:'#fff',marginHorizontal:30,
            elevation:1,marginTop:15}}
            
            >
                <Icon name='ios-search' size={20} style={{marginRight:10}}/>
                <TextInput
                underlineColorAndroid="transparent"
                placeholder="try new Delhi"
                placeholderTextColor="grey"
                style={{flex:1,fontWeight:'700',backgroundColor:'#fff',marginTop:-13}}
                />
            </View>

            </View>
              <ScrollView 
             scrollEventThrottle={16}
             
              >
                  <View style={{backgroundColor:'white',paddingTop:20,flex:1}}>
                      <Text style={{marginHorizontal:20,fontWeight:'700',fontSize:24}}>
                          What can we help you find,please ?
                      </Text>
                      <View style={{height:130,marginTop:20}}>
                          <ScrollView horizontal={true}
                          showsHorizontalScrollIndicator={false}>
                           <Catagory imageUri={require('../Images/office1.jpg')} name="Nafe"/>
                           <Catagory imageUri={require('../Images/feedback.jpg')} name="Ahmad"/>
                           <Catagory imageUri={require('../Images/EngOffice.jpg')} name="Sameer"/>
                          </ScrollView>

                      </View>
                      <View style={{marginTop:40,paddingHorizontal:20}}>
                          <Text style={{fontSize:24,fontWeight:'700'}}>
                              Introducing Airbnb plus
                          </Text>
                          <Text style={{marginTop:10,fontWeight:'100'}}>
                              A new selection of office verified for
                               quality & comfort 
                          </Text>
                          <View style={{width:width-40,height:200,marginTop:20}}>
                              <Image source={require('../Images/worker.jpg')}
                              style={{flex:1,width:null,height:null,resizeMode:'cover',
                              borderRadius:5,borderWidth:1,borderColor:'#dddddd'}}/>
                          </View>
                          
                      </View>
                  </View>
                  <View style={{marginTop:40}}>
                      <Text style={{fontSize:24,fontWeight:'700',paddingHorizontal:20}}> Office around Palestine</Text>
                       <View style={{paddingHorizontal:20,marginTop:20,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'}}>
                            <Offic width={width} name='Nafe Hamad' address='Nablus' price='100$' rating={4}/>
                            <Offic width={width} name='Nafe Hamad' address='Nablus' price='100$' rating={4}/>
                            <Offic width={width} name='Nafe Hamad' address='Nablus' price='100$' rating={4}/>
                            <Offic width={width} name='Nafe Hamad' address='Nablus' price='100$' rating={4}/>
                       </View>
                  </View>

              </ScrollView>


        </View>

        </SafeAreaView>

        
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

    
