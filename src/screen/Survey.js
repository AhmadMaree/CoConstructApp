

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
  Dimensions,
  FlatList

} from 'react-native';
import StarRating from 'react-native-star-rating'
import Catagory from '../components/Catagory';
import Offic from '../components/Offic';
import Icon from 'react-native-vector-icons/Ionicons';
import Ip from './Ip';
import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Communications from 'react-native-communications';
import SendSMS from 'react-native-sms';
import { SearchBar } from 'react-native-elements'; 
const {height,width}=Dimensions.get('window')
 export default class Survey extends Component {

    constructor(props){
        super(props);
        this.state = {
    
         item :[],
         item1:[],   
      }
    }

    componentDidMount() {

       fetch('http://'+Ip.ip+':8088/get_all_ser/').then(results=>results.json())
      .then(results=>this.setState({'item':results.response,'len':results.length,'item1':results.response}));
   
     }
     Send_SMS= jawwal => {
        SendSMS.send({
            //Message body
            body: 'send Your Message',
            //Recipients Number
            recipients: [jawwal],
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

    renderItem = ({ item ,index}) => {
         return(
           
           
                
            <View style={{height:130,width:130,marginLeft:20,borderWidth:0.5,borderColor:'#dddddd'}}>
            <View style={{flex:2}}>
            <Image style={{flex:1,width:null,height:null,resizeMode:'cover'}} source={{uri:encodeURI('http://'+Ip.ip+':8088/load_image1?img=' + `${item.imageName}`)}}/>
            </View>
            <View style={{flex:1}}>
             <Text style={{paddingLeft:10,paddingTop:10}}> {item.officename}</Text>
            </View>
            </View>
             
            
            
    );
    }


    renderItem1 = ({ item ,index}) => {
        return( 
            
           
                <View style={{width:width/2-30,height:width/2-30,borderWidth:0.5,borderColor:'#dddddd'}}>
                <View style={{flex:1}}>
                <Image style={{flex:1,width:null,height:null,resizeMode:'cover'}} source={{uri:encodeURI('http://'+Ip.ip+':8088/load_image1?img=' + `${item.imageName}`)}}/>
                </View>
                <View style={{flex:1,alignItems:'flex-start',justifyContent:'space-evenly',paddingLeft:10}}>
                <Text style={{fontSize:10,color:'#bd3838',fontFamily:'Courgette-Regular'}}>{item.engname}</Text>
                <Text style={{fontSize:10,fontWeight:'bold'}}>{item.jawwal}</Text>
                <Text style={{fontSize:10,fontWeight:'bold'}}>{item.telephone}</Text>
                <Text style={{fontSize:12,fontWeight:'bold'}}>{item.address}</Text>
                <View style={{flex:1,alignItems:'flex-end',justifyContent:'space-evenly',paddingLeft:10}}>
                <TouchableOpacity style={{marginLeft:120,marginTop:-65}} onPress={()=>this.Send_SMS(item.jawwal)}>
                       <Icon2 name="sms" size={15} color='#f5bb25' />  
                 </TouchableOpacity>
                 <TouchableOpacity style={{marginLeft:120,marginTop:6}} onPress={() => Communications.email([item.engemail],null,null,'My Subject','My body Massege')}>
                       <Icon2 name="envelope-square" size={15} color='#4559C1' />  
                 </TouchableOpacity>
                 <TouchableOpacity style={{marginLeft:120,marginTop:6}} onPress={() => Communications.phonecall(item.jawwal, true)}>
                       <Icon1 name="phone-call" size={15} color='#4559C1' />  
                 </TouchableOpacity>
             </View>
            </View>
            </View>
           
            
                  

);
}

  
    render(){
    return(
        <SafeAreaView style={{flex:1}}>
        <View style={{flex:1}}>
            <View style={{height:80,backgroundColor:'#7BB062',borderBottomWidth:1,borderBottomColor:'#dddddd'}}>
            <View style={{flexDirection:'row', padding:10,backgroundColor:'#7BB062',marginHorizontal:30,
            elevation:1,marginTop:15}}
             >
                <Icon name='ios-search' size={20} style={{marginRight:10}}/>
                <TextInput
                underlineColorAndroid="transparent"
                placeholder="Type Here..."
                placeholderTextColor="grey"
                style={{flex:1,fontWeight:'700',backgroundColor:'#7BB062',marginTop:-13}}
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
                      <ScrollView horizontal={true}
                             showsHorizontalScrollIndicator={false}>
                      <View style={{height:130,marginTop:20}}>
                         <FlatList
                                  horizontal
                                  showsHorizontalScrollIndicator={false}
                                data={this.state.item}
                                renderItem={this.renderItem}
                                keyExtractor={item => item.officename}
                                
                                />
                         </View>  
                    </ScrollView>     
                      <View style={{marginTop:40,paddingHorizontal:20}}>
                          <Text style={{fontSize:24,fontWeight:'700'}}>
                              CO-Constructor Applicatin
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
                       
                             <FlatList
                                data={this.state.item}
                                renderItem={this.renderItem1}
                                numColumns={2}
                                />



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