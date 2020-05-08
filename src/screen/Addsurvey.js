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
import Ip from './Ip';

  export default class Addsurvey extends Component {

    state = {
        avatarSource : null,
        officename:'',
        engineerName:'',
        phone:'',
        telephone:'',
        address:'',
        email:'',
        data : '',
        photoname :'',      
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
              });
            }
          });
      
    };
      onRegister = () => {

        if (!(this.state.officename=== '' || this.state.engineerName=== ''||this.state.phone === ''||this.state.telephone === ''||this.state.email === ''||this.state.address === '')) {
      
        let url2 = 'http://'+Ip.ip+':8088/Addser/'+this.state.officename+'/'+this.state.engineerName+'/'+this.state.phone+'/'+this.state.email+'/'+this.state.telephone+'/'+this.state.address;
        //var imageName = this.state.imageName;
         const data = new FormData();
        data.append("file", this.state.data); 
        data.append("name",this.state.photoname );
        ////////////////////////////////////////////////////
        data.append("officename",this.state.officename);
        data.append("engineerName",this.state.engineerName);
        data.append("phone",this.state.phone);
        data.append("telephone",this.state.telephone);
        data.append("address",this.state.address);
        data.append("email",this.state.email);
        /////////////////////////////////////////////////////
         fetch(url2, { method: 'POST',body:data})
         .then(response => response.json())
         
         .then(json => {if(json.result === "failed"){
             //AsyncStorage
            ToastAndroid.show('Error with database. Please try again later. ', ToastAndroid.SHORT)         
         }
         else if(json.status === "success"){
          ToastAndroid.show('Office Added', ToastAndroid.SHORT)
        }       
       })                                                                                   
      } else {
        ToastAndroid.show('Must Fill the Boxs', ToastAndroid.SHORT)
    }
        
 };
  

   render(){
    return(
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
            <Text style={Styles.email}>Upload office cover </Text>
            
        </View>
        
        </ImageBackground>


        <View style={Styles.Bar}>

        </View>
        <ScrollView style={Styles.hBk}>
        <Form>
         <Item stackedLabel>
         <TextInput
          placeholder="Enter Office Name"
           onChangeText={ TextInputValue=>this.setState({officename:TextInputValue}) }
           underlineColorAndroid='transparent'
          style={Styles.TextInputStyleClass}
          />
           <TextInput
          placeholder="Enter Engineering Name  "
           onChangeText={ TextInputValue=>this.setState({engineerName:TextInputValue}) }
           underlineColorAndroid='transparent'
          style={Styles.TextInputStyleClass}
          />
           <TextInput
          placeholder="Enter Phone Number Ex:0597438914"
           onChangeText={ TextInputValue=>this.setState({phone:TextInputValue}) }
           underlineColorAndroid='transparent'
           keyboardType= 'numeric'
           maxLength ={10}
          style={Styles.TextInputStyleClass}
          />
           <TextInput
          placeholder="Enter  Email Ex:name@name.com"
           onChangeText={ TextInputValue=>this.setState({email:TextInputValue}) }
           underlineColorAndroid='transparent'
          style={Styles.TextInputStyleClass}
          />
          
           <TextInput
          placeholder="Enter Telephone Ex:09 2334302"
           onChangeText={ TextInputValue=>this.setState({telephone:TextInputValue}) }
           underlineColorAndroid='transparent'
           keyboardType='numeric'
          style={Styles.TextInputStyleClass}
          />
           <TextInput
          placeholder="Enter Address Ex:Country-Ciy-Lane-Street"
           onChangeText={ TextInputValue=>this.setState({address:TextInputValue}) }
           underlineColorAndroid='transparent'
          style={Styles.TextInputStyleClass}
          />
                    
         </Item>
        
         <TouchableOpacity style={Styles.buttonlogin} onPress={this.onRegister}>
             <Text style={Styles.buttnTextlogin}>Save</Text>
         </TouchableOpacity> 
        </Form>
        </ScrollView>
       
    
        </View>

    );
}
}

  

  const Styles = StyleSheet.create({
    connt : {
        backgroundColor: '#d9d9d9',
        flex: 1,
      // height:250
        
       
    } ,
     hBk: {
        //flex : 1 , 
        //width : null , 
        alignSelf : 'stretch',
        width:'100%',
        height:250
        
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