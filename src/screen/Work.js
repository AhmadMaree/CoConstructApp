import { ListItem } from 'react-native-elements'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  TouchableHighlight,
  Animated,
  Text,
  FlatList,
  Button,
  StatusBar,
  ScrollView,

} from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import { SearchBar } from 'react-native-elements'; 
import {Container,Header,Body,Checkbox,Title,Card,CardItem,Left,Right,Content,Grid,Col, Thumbnail, Subtitle}from 'native-base'
import SendSMS from 'react-native-sms'
import Communications from 'react-native-communications';
import Ip from './Ip';
import StarRating from 'react-native-star-rating';

  




          export default class Work extends Component {

            constructor() {
              super();
              this.state = {
                dataSource: [],
                item:[],
                item1:[],
                len:0,
                expanded: false,
                generalStarCount: 0,
                data: '',
                name :'',
                item2 :[],
              }
              this.arrayholder = [];
          
            }
            Send_SMS= adr => {
              SendSMS.send({
                  //Message body
                  body: 'send Your Message',
                  //Recipients Number
                  recipients: [adr],
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

              onGeneralStarRatingPress(rating,count_photo,sum_photo,photo,name) {
                this.setState({
                  generalStarCount: sum_photo/count_photo,
                });
                
                   var sum1;
                  sum1 = parseFloat(sum_photo)+ parseFloat(rating);
                  sum1= parseFloat(sum1).toFixed(2);
                  console.log(sum1)
                  count_photo++;
                  let url2 = 'http://'+Ip.ip+':8088/rating1/'+photo;
                  const data = new FormData();
                  data.append("sum1", sum1); 
                  data.append("count1",count_photo);
                  data.append("EN",photo);
                                    fetch(url2 , {method : 'POST' , body : data})
                                    .then(results=>results.json())
                                    .then(json => {if(json.status === 200){
                                      this.setState({
                                        generalStarCount: sum1/count_photo,

                                      });
                                      sum1 = 0
                                        fetch('http://'+Ip.ip+':8088/get_all_Worker11/'+name).then(results=>results.json())
                                        .then(results=>this.setState({'item2':results.response,'len':results.length}));
                                        
                                    }

                                   })
             }
  
      toggelflag = name =>{
          
          this.setState({
            expanded: !this.state.expanded,
            name : name,
          });
          fetch('http://'+Ip.ip+':8088/get_all_Worker11/'+name).then(results=>results.json())
          .then(results=>this.setState({'item2':results.response,'len':results.length}));


      }
      renderItem1= ({ item }) => {
          this.state.generalStarCount = item.sum_photo/item.count_photo;
           return (
            <View style={{height:170,width:160,marginLeft:20,borderWidth:0.5,borderColor:'#dddddd'}}>
            <View style={{flex:2}}>
            <Image style={{flex:1,width:null,height:null,resizeMode:'cover'}} source={{uri:encodeURI('http://'+Ip.ip+':8088/load_image1?img=' + `${item.photo}`)}}/>
            </View>
            <View style={{flex:1, padding:4}}>
            <StarRating
                       disabled={false}
                       maxStars={5}
                       rating={item.sum_photo/item.count_photo}
                       emptyStarColor={'gold'}
                       fullStarColor={'gold'}
                       selectedStar={rating => this.onGeneralStarRatingPress(rating,item.sum_photo,item.count_photo,item.photo,item.name)} 
                       halfStarEnabled 
                       iconSet="Ionicons"
                       emptyStar="ios-star-outline"
                       fullStar="ios-star"
                       halfStar="ios-star-half"
                       starSize ={25}
                       />
                       <Text style={{fontFamily : 'Bellota-Bold',alignItems:'center',textAlign:'center'}}>{this.state.generalStarCount.toFixed(2)}/5</Text>
            </View>
            </View>
           );

      }
          
          
            renderItem = ({ item }) => {

              return (
                <View>
       <View style={{height:210,backgroundColor:'#efefef'}} >
        
        <Card style={{height:200}} >
         <CardItem style={{backgroundColor:"#efefef",height:200,elevation:50}}>
           <Left>
           <Thumbnail
            source={{uri:encodeURI('http://'+Ip.ip+':8088/load_image1?img=' + `${item.photoname}`)}} style={{width:120,height:120,borderRadius:70,marginTop:-50}}/>
             <TouchableHighlight style={{marginLeft:-100,marginTop:150}} onPress={()=>this.Send_SMS(item.adr)}  >
                      <Icon1 name="sms" size={30} color='#ffd24d' />
              </TouchableHighlight>
              <TouchableOpacity style={Styles.buttonlogin}>
               <Icon name="phone-call" size={30} color='#4559C1' /> 
              </TouchableOpacity>
              
              
           </Left>
           
                
            <Right>
            <View style={{alignItems:'flex-start',marginTop:15}}> 
               <Title style={{color:"#000"}}>
               <Text style={{fontFamily :'Bellota-Bold',fontWeight:"10"}}>{item.name}</Text>
               
               </Title>
              
               <Text style={{fontFamily :'Charm-Regular' , fontSize : 20}}>{item.field} </Text>
               <Text>{item.adr}</Text>
               <Text style={{fontFamily :'Bellota-Bold'}}>{item.tel}</Text>
               <View style={{flexDirection :'row'}}>
               <TouchableOpacity style={Styles.buttonlogin5} onPress={() => this.props.navigation.navigate('Mapss',{Name: item.name})}>
               <Icon3 name="google-maps" size={35}  color='#7BB062'/>
              </TouchableOpacity>
               <TouchableHighlight style={Styles.buttonlogin5} onPress={() => this.toggelflag(item.name)} >
                  <Icon2 name="downcircle" size={30}  color='#7BB062'/>
              </TouchableHighlight>
              </View>
             </View>
            
            
            </Right>
            </CardItem>
            </Card>
            </View> 
            {this.state.expanded && this.state.name === item.name ? 
            <View style={{height:170,backgroundColor:'#efefef'}}>
            <ScrollView horizontal={true} style={{paddingTop:10,paddingLeft:5}}
                                   showsHorizontalScrollIndicator={false}>
              
              <FlatList
                    data={this.state.item2}
                    renderItem={this.renderItem1}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                  />
          

              </ScrollView>  
              </View>
                 :null}
          </View>
              )
          
            }
            componentDidMount() {
             
              const {nam} = this.props.navigation.state.params;
              this.state.data= nam;

              fetch('http://'+Ip.ip+':8088/get_all_Worker1/'+this.state.data).then(results=>results.json())
              .then(results=>this.setState({'item':results.response,'len':results.length,'item1':results.response}));

          
            }
            searchFilterFunction = text => {    
              this.setState({
                value: text,
              });
              const newData = this.state.item1.filter(item => {      
                const itemData = `${item.name}`;
              
                 const textData = text;
                  
                 return itemData.indexOf(textData) > -1;    
                 
              });
              
              this.setState({ item: newData });  
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
          
            render() {
                
             
              return (
          
                <View style={Styles.connt}>
          
                  <FlatList
                    data={this.state.item}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.tel}
                    ListHeaderComponent={this.renderHeader} 
                    ItemSeparatorComponent={this.renderSeparator}
                  />
          
          
          
                </View >
          
          
          
              );
            }
          
          
          }
          
          const Styles = StyleSheet.create({
            connt: {
              backgroundColor: '#d9d9d9',
              flex: 1,
             
             
          
            },
            buttnTextlogin : {
              fontSize :16 ,
              fontWeight : '500',
              color : '#ffffff' , 
              textAlign : 'center',
              marginTop:8
            
            
            },
            buttnTextlogin1 : {
              fontSize :13 ,
              fontWeight : '500',
              color : '#ffffff' , 
              textAlign : 'center',
              alignContent :'center',
              alignItems:'center',
              paddingTop : 10
            },
            buttonlogin : {
              paddingHorizontal:30,
              
              marginTop:160,
              height:40,
              marginLeft:20
              
            } ,
            buttonlogin1 : {
              paddingHorizontal:30,
              
              marginTop:10,
              height:40,
              
              
            } ,
            buttonlogin4 : {
              paddingHorizontal:30,
              
              marginTop:10,
              height:40,
              marginLeft:70              
              
            } ,
            buttonlogin5 : {
              paddingHorizontal:30,
              
              marginTop:20,
              height:40,
              marginLeft:10              
              
            } ,
            buttonlogin2 : {
              paddingHorizontal:20,
              
              marginTop:20,
              height:40,
              width : 100,
              backgroundColor : '#7BB062',
             // marginLeft : 100
              
            } ,
          });