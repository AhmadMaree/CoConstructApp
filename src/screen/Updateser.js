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
  ToastAndroid,
  FlatList,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import Ip from './Ip';

  export default class Updateoffice extends Component {


    constructor(props){
        super(props);
        this.state = {
    
        avatarSource : null,
        ON:'',
        EN:'',
        PN:'',
        FA:'',
        AD:'',
        EM:'',
        TE:'',
        ONN:'',
        emailEw:'',
        item:[],
        officename:'',
        enginnername:'',
        phonenumber:'',
        facebook:'',
        address:'',
        email:'',
        telfax:'',
        onn:'',
        photo:'',
        data:'',
        photoname:'',
        sel : '',
      }
    }

      componentDidMount() {
          const {officename} = this.props.navigation.state.params;
          this.state.onn=officename;
        console.log(this.state.onn)
         fetch('http://'+Ip.ip+':8088/get_show_ser1/'+this.state.onn).then(results=>results.json())
        .then(results=>this.setState({'item':results.response,'len':results.length}));
       }

      



      selectPhotoTapped(num){
        const options = {
          quality: 1.0,
          maxWidth: 500,
          maxHeight: 500,
       includeBase64: true,
          storageOptions: {
            skipBackup: true
          }
        }
  
          ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
             
              this.setState({
                avatarSource: response.uri,
                data :response.data,
                photoname : response.fileName,
                sel: '1',
              });
            }
          });
      
    };
      onRegister = () => {

  
  
        if(this.state.sel === '1'){
            if (!(this.state.ON=== '' || this.state.EN=== ''||this.state.PN === ''||this.state.EM === ''||this.state.TE === ''||this.state.AD === '')) {
      
                let url2 = 'http://'+Ip.ip+':8088/Updateofficeser/'+this.state.ON;
                //var imageName = this.state.imageName;
                 const data = new FormData();
                 data.append("file", this.state.data); 
                 data.append("name",this.state.photoname);
                data.append("ON",this.state.ON);
                data.append("EN",this.state.EN);
                data.append("PN",this.state.PN);
                data.append("EM",this.state.EM);
                data.append("TE",this.state.TE);
                data.append("AD",this.state.AD);
                
                
                
                 fetch(url2, { method: 'POST',body:data})
                 .then(response => response.json())
                 
                 .then(json => {if(json.result === "failed"){
                     //AsyncStorage
                    ToastAndroid.show('Error with database. Please try again later. ', ToastAndroid.SHORT)         
                 }
                 else if(json.status === 200){
                  ToastAndroid.show('Office updated', ToastAndroid.SHORT)
                }       
               })                                                                                   
              } else {
                ToastAndroid.show('Must Fill the Boxs', ToastAndroid.SHORT)
            }
        }else{
           
        if (!(this.state.ON=== '' || this.state.EN=== ''||this.state.PN === ''||this.state.EM === ''||this.state.TE === ''||this.state.AD === '')) {
      
        let url2 = 'http://'+Ip.ip+':8088/Updateofficeser1/'+this.state.ON;
        //var imageName = this.state.imageName;
         const data = new FormData();
        data.append("ON",this.state.ON);
        data.append("EN",this.state.EN);
        data.append("PN",this.state.PN);
        data.append("EM",this.state.EM);
        data.append("TE",this.state.TE);
        data.append("AD",this.state.AD);
        
        
        
         fetch(url2, { method: 'POST',body:data})
         .then(response => response.json())
         
         .then(json => {if(json.result === "failed"){
             //AsyncStorage
            ToastAndroid.show('Error with database. Please try again later. ', ToastAndroid.SHORT)         
         }
         else if(json.status === 200){
          ToastAndroid.show('Office updated', ToastAndroid.SHORT)
        }       
       })                                                                                   
      } else {
        ToastAndroid.show('Must Fill the Boxs', ToastAndroid.SHORT)
    }
}   
 };

  


renderItem = ({ item ,index}) => {
  //const {ofi}=item.ONN;
  this.state.officename=item.officename;
  //const state=this.state
  this.state.enginnername=item.engname;
  this.state.phonenumber=item.jawwal;
  this.state.telfax=item.telephone;
  this.state.address=item.address;
  this.state.email=item.engemail;
   
  this.state.ON=this.state.officename;
  this.state.EN=this.state.enginnername;
  this.state.PN=this.state.phonenumber;
  this.state.AD=this.state.address;
  this.state.TE=this.state.telfax;
  this.state.EM=this.state.email;
   
    
return (
  <ScrollView style={Styles.hBk1}>
  <Form>
   <Item stackedLabel>
   <TextInput
     placeholder="Enter Your OfficeName : "
     value={this.state.officename}
     onChangeText={ TextInputValue=>this.setState({ON:TextInputValue}) }
     underlineColorAndroid='transparent'
     
    style={Styles.TextInputStyleClass}
    />
     <TextInput
     placeholder="Enter Engineering Name  "
     defaultValue={this.state.enginnername}
     onChangeText={ TextInputValue=>this.setState({EN:TextInputValue}) }
     underlineColorAndroid='transparent'
     style={Styles.TextInputStyleClass}
    />
     <TextInput
    placeholder="Enter Phone Number Ex:0597438914"
    defaultValue={this.state.phonenumber}
     onChangeText={ TextInputValue=>this.setState({PN:TextInputValue}) }
     underlineColorAndroid='transparent'
     keyboardType= 'numeric'
     maxLength ={10}
    style={Styles.TextInputStyleClass}
    />
     <TextInput
    placeholder="Enter  Email Ex:name@name.com"
    defaultValue={this.state.email}
     onChangeText={ TextInputValue=>this.setState({EM:TextInputValue}) }
     underlineColorAndroid='transparent'
    style={Styles.TextInputStyleClass}
    />
     <TextInput
    placeholder="Enter Telefax Ex:+970 9 2330340"
    defaultValue={this.state.telfax}
     onChangeText={ TextInputValue=>this.setState({TE:TextInputValue}) }
     underlineColorAndroid='transparent'
     keyboardType='numeric'
    style={Styles.TextInputStyleClass}
    />
     <TextInput
    placeholder="Enter Address Ex:Country-Ciy-Lane-Street"
    defaultValue={this.state.address}
     onChangeText={ TextInputValue=>this.setState({AD:TextInputValue}) }
     underlineColorAndroid='transparent'
    style={Styles.TextInputStyleClass}
    />
              
   </Item>
  
   <TouchableOpacity style={Styles.buttonlogin} onPress={this.onRegister}>
       <Text style={Styles.buttnTextlogin}>Update</Text>
   </TouchableOpacity> 
  </Form>
  </ScrollView>
      
 )
 }


render() {
  const {Enginner} = this.props.navigation.state.params;
    this.state.emailEw=Enginner;
    const {photo} = this.props.navigation.state.params;
    this.state.photo=photo;
    if(this.state.photo != ""){
    this.state.avatarSource = encodeURI('http://'+Ip.ip+':8088/load_image1?img=' + `${this.state.photo}`)
    }
  return (
    <View style={Styles.connt}>
       <StatusBar backgroundColor='#1c313a' barStyle='light-content'>
        </StatusBar>

         <ImageBackground
        source={require('../Images/green.jpg')}
        style={Styles.hBk}> 
        <View style={Styles.hed}>
            <View style={Styles.ProfileWarp}> 
            {this.state.avatarSource == null ? 

                <Image  style={Styles.ProfileTopic} source={require('../Images/logo1.png')}/>
              : <Image  style={Styles.ProfileTopic} source={{uri:this.state.avatarSource}}/>}
            </View>
            <Icon onPress={this.selectPhotoTapped.bind(this,1)} size={30} name="camera" style={{color:'#1c313a',marginTop:-60,marginLeft:110 }}/>
            <Text style={Styles.email}> {Enginner} </Text>
            
        </View>
        
        </ImageBackground>


        <View style={Styles.Bar}>

        </View>
        <FlatList
          data={this.state.item}
          renderItem={this.renderItem}
        />
        
      </View >
    );
  }
}



  

  const Styles = StyleSheet.create({
    connt : {
        backgroundColor: '#d9d9d9',
        flex: 1,
        // height:20
        
       
    } ,
     hBk: {
       // flex : 1, 
        //width : null , 
        alignSelf : 'stretch',
        width:'100%',
        height:250,
       // flexWrap:'wrap-reverse'
        
      },
      hBk1: {
        // flex : 1, 
         //width : null , 
         alignSelf : 'stretch',
         width:'100%',
         height:500,
        // flexWrap:'wrap-reverse'
         
       },
      hed : {
            flex : 1 , 
            alignItems :  'center',
            justifyContent: 'center' ,
            padding :20 ,
            backgroundColor : 'rgba(0,0,0,0.5)',
           // height:150

      },
      ProfileWarp : {
          width : 180 , 
          height :180 , 
          borderRadius : 0 , 
          borderColor : 'rgba(0,0,0,0.4)' , 
          borderWidth : 16 , 

      },
      ProfileTopic : {
          flex :1 , 
          width : null , 
          alignSelf : 'stretch' , 
          borderRadius : 0 , 
          borderColor : '#fff',
          borderWidth : 4 , 
         

      },
      email :  {
            marginTop :20 , 
            fontSize : 16 , 
            color : '#fff',
           // fontWeight  :'bold',
            marginTop:30,
            fontFamily:'Bellota-LightItalic'
           
      },
      Bar : {
        borderTopColor : '#d9d9d9',
        borderTopWidth : 4 , 
        backgroundColor : '#455a64',
        flexDirection : 'row'  ,
        
    },
    buttonlogin : {
        width : "80%",
        backgroundColor : '#7BB062',
        borderRadius : 60 , 
        marginVertical : 16,
        paddingVertical : 16,
        margin : "13%" ,
        marginBottom:50

    } ,
    buttnTextlogin : {
        fontSize :16 ,
        fontWeight : '500',
        color : '#ffffff' , 
        textAlign : 'center',
  

    },
    title:{
      fontSize: 14,
      fontWeight:'bold',
      color: Colors.DARKGRAY,
  },
  row:{
    flexDirection: 'row',
    justifyContent:'space-between',
    height:70,
    width : "90%",
    borderRadius : 60 ,
    paddingLeft:25,
    paddingRight:25,
    alignItems:'center',
    backgroundColor: Colors.CGRAY,

}, 

TextInputStyleClass: {
   
    textAlign: 'center',
    width: '90%',
    marginBottom: 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#7BB062',
    borderRadius: 50 ,
    height:60,
    fontFamily:'Bellota-BoldItalic',
    
   
    },
   
}); 