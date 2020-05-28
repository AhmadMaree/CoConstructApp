import { ListItem } from 'react-native-elements'
import React, { Component } from 'react';
import { Table, Row, Rows } from 'react-native-table-component';

import {
  AppRegistry,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  
  Animated,
  Text,
  FlatList,
  Button,
  StatusBar,
  Alert,

} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Container,Header,Body,Checkbox,Title,Card,CardItem,Left,Right,Content,Grid,Col, Thumbnail, Subtitle}from 'native-base'
import Swipeout from 'react-native-swipeout';
import Ip from './Ip';

export default class DeleteWorker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
      item:[],
      activeKeyRow : null ,
      deletrow : null , 


    }

  }

  componentDidMount() {

    fetch('http://'+Ip.ip+':8088/get_show_Worker/').then(results=>results.json())
    .then(results=>this.setState({'item':results.response,'len':results.length}));
   
  }

  reflist = (adr) => {
    const filteredData = this.state.item.filter(item => item.adr !== adr);
    this.setState({ item: filteredData });
  }

  


  renderItem = ({ item ,index}) => {
      const swipestting = {
            autoClose : true ,
            onClose : (sectionID , rowID,direction) => {
                if(this.state.activeKeyRow !=null){
                    this.setState({activeKeyRow : null})

                }

            },
            onOpen : (sectionID , rowID,direction) => {
                this.setState({activeKeyRow : index})   
                   
            },
            right : [
                
                    {
                        onPress : () => {
                            const de = this.state.activeKeyRow;
                            Alert.alert ('Alert',
                  'Are you Sure you want to delete ?',
                  [
                    {text :'No', onPress : () =>  alert('Canceled'),style:'cancel'},
                    {text: 'Yes' ,onPress :() => {

                        let  url = 'http://'+Ip.ip+':8088/delete2/'+item.adr;
                        const data = new FormData();
                        data.append("flag",item.adr);

                        fetch(url , {method : 'delete' , body : data}).then(results=>results.json())
                      .then(json => {if(json.status === 200){
                          //AsyncStorage
                          alert('You Delete the Office')   
                            this.reflist(item.adr)    
                          
                          
                       
                      }else {
                        alert('There an Error in Database , Not Deleted') 
                      }
                     
                  
                      
                     })
                       



                    }}
                    ])
                          },
                        text : 'Delete' , type : 'delete'
                    },
                    {
                      onPress : () => {this.props.navigation.navigate('UpdatePageWorker',{tel : item.tel , photo:item.photoname})},
                      text : 'Update' , type :'secondary' , backgroundColor:'#7BB062'

                    }
            ],
      
            rowID : index , sectionID :1 ,
      };
  
    return (
        
        
       
        <Card style={{height:120}}>
           <Swipeout {...swipestting} >
         <CardItem style={{backgroundColor:"#efefef",height:120}}>
         
           <Left style>
           
             <Thumbnail
             source={{uri:encodeURI('http://'+Ip.ip+':8088/load_image1?img=' + item.photoname)}} style={{width:120,height:70,borderRadius:10,marginRight:5}}/>
             
             <View style={{alignItems:'flex-start',Top:20}}> 
               <Title style={{color:"#000"}}>
               <Text style={{fontFamily :'Bellota-Bold'}}>Name:{item.name}</Text>
               
               </Title>
              
               <Text style={{fontFamily :'Charm-Regular'}}>Field:{item.field} </Text>
               <Text>Mobile:{item.adr}</Text>
               <Text>Address{item.tel}</Text>
              
             </View>
          
            
           </Left>
           
            </CardItem>
            </Swipeout>
            </Card>  
           
       
    
     )
     }

  

  render() {

    

   
    

    return (
        
      <View style={styles.connt}>
          <View>
          <Text style={{marginTop:50,fontSize:20,fontFamily:'Bellota-Italic'}}>         These all Worker you have. </Text>
          <Text style={{fontSize:20,fontFamily:'Bellota-Italic'}}>         In order to Delete any Worker   </Text>
          <Text style={{marginBottom:50,fontSize:18,fontFamily:'Bellota-Italic'}}>   please Swipe to Left and then press on  </Text>        
          </View>

        <FlatList
          scrollEnabled
          data={this.state.item}
          renderItem={this.renderItem.bind(this)}
          

        />



      </View >



    );
  }


}

const styles = StyleSheet.create({
  connt: {
    backgroundColor: '#d9d9d9',
    flex: 1,
   

  }
  });





