
import React, { Component } from 'react';
import { Table, Row, Rows } from 'react-native-table-component';

import {
  
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Alert,

} from "react-native";


import IP from './Ip';
export default class DeleteOffice extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
      item:[],
      len:0,
      officename:'',
      ide:'',
      mob:'',
      addr:'',
      ch:'',
      officename1: '',
      
      tableData :[],
      tableHead :[],
      buttons :[],
     


    }

  }

  
  onRegister = officename => {

    this.state.officename1=officename;
    let  url = 'http://'+IP.ip+':8088/delete_ser/'+this.state.officename1;
    Alert.alert ('Alert',
                  'Are you Sure you want to delete ?',
                  [
                    {text :'No', onPress : () =>  alert('Canceled'),style:'cancel'},
                    {text: 'Yes' ,onPress :() => {

                      const data = new FormData();
                          data.append("flag",this.state.officename1);
                         
                      fetch(url , {method : 'delete' , body : data}).then(results=>results.json())
                      .then(json => {if(json.status === 200){
                          //AsyncStorage
                          alert('You Delete the Office')   
                            const filteredData = this.state.item.filter(item => item.officename !== officename);
                            this.setState({ item: filteredData });
                          
                          
                       
                      }else {
                        alert('There an Error in Database , Not Deleted') 
                      }
                     
                  
                      
                     })

                    }},
                  ],
                  {cancelable :true}
                  
                  );

     
   

  }
       
    
    
  
  


  renderItem = ({ item ,index}) => {
    this.state.officename=item.officename;
    const state=this.state
    this.state.tableData = [
    [<Text style={{fontFamily :'Bellota-Bold',fontSize:20,color:"#7BB062", padding:50}}>{index}</Text>,
    <Text style={{fontFamily :'Bellota-Bold' , fontSize : 20  }}>{this.state.officename}</Text>,
      <View> 
      <TouchableOpacity onPress={() => this.onRegister(item.officename)} style={styles.buttonlogin}>
      <Text style={styles.buttnTextlogin}>Delete</Text>
      </TouchableOpacity> 
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Updateser',{Enginner:item.engname,photo:item.imageName,officename:item.officename})} style={styles.buttonlogin1}>
      <Text style={styles.buttnTextlogin}>UPDATE</Text>
      </TouchableOpacity> 
      </View>
      ],
      ]
     
     
      
  return (
         <View style={styles.container}>
         <Table style={{marginVertical:-16.5}} borderStyle={{borderWidth: 1, borderColor: '#000'}}>
         <Rows  style={{height:160,backgroundColor: '#D9D9DB'}} data={state.tableData} textStyle={styles.text1}/>
         </Table>
         </View>
   )
   }

  componentDidMount() {

    fetch('http://'+IP.ip+':8088/get_show_sur/').then(results=>results.json())
    .then(results=>this.setState({'item':results.response,'len':results.length}));
   
  }

  render() {

    

   
    

    return (
        
      <View style={styles.connt}>
          <View>
          <Text style={{marginTop:50,fontSize:20,fontFamily:'Bellota-Italic'}}>         These all office Survey you have. </Text>
          <Text style={{fontSize:20,fontFamily:'Bellota-Italic'}}>         In order to Deleta any office please  </Text>
          <Text style={{marginBottom:50,fontSize:20,fontFamily:'Bellota-Italic'}}>         please press on delete/Update </Text>        
          </View>

        <FlatList
          data={this.state.item}
          
          renderItem={this.renderItem}
          

        />



      </View >



    );
  }


}

const styles = StyleSheet.create({
    container: { //flex: 1, 
        padding: 16,
    //height:60 ,
        backgroundColor:'#D9D9DD'},
    head: { height: 90 },
    text: { marginLeft:90 },
    text1:{marginLeft:5},
    checkboxx:{
          
      backgroundColor: '#B4B6A4',
      borderRadius: 60,
      borderWidth: .1,
      color: '#000',
      margin: 10,
     
      
         
     },
     forcheckbox :{
         
         justifyContent: 'flex-start',
         //flex: 1,
         flexDirection :'row'
     },
     textsignup1 : {
      color : '#7BB062',
      fontSize :16 ,
      fontWeight :'500',
      marginLeft:-10,
      marginTop:8
  
  },
  
  buttonlogin : {
    width : 100,
    backgroundColor : '#7BB062',
    borderRadius : 25 , 
    marginVertical : -10,
    paddingVertical : 17,
    marginLeft:10
    
  } ,

  buttonlogin1 : {
    width : 100,
    backgroundColor : '#7BB062',
    borderRadius : 25 , 
    marginVertical : 15,
    paddingVertical :16,
    marginLeft:10
    
  } ,
  buttnTextlogin : {
    fontSize :16 ,
    fontWeight : '500',
    color : '#ffffff' , 
    textAlign : 'center'
  
  
  },
  connt: {
    backgroundColor: '#d9d9d9',
    flex: 1,
   

  }
  });