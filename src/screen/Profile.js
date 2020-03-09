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
  Image
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';


class Profile extends Component {

      constructor(props){
        super(props);
        this.state = {
          emailEw : '',
          data :null,
          avatarSource : null,
          photoname : '',
        }
      }
    selectImage =async ()=>{
        ImagePicker.showImagePicker({noData:true,mediaType:'photo'}, (response) => {
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
              data :response.path,
              photoname : response.fileName
            });
            
            this.onRegister();
          }
        });
    }
    

   onRegister = () => {
   let url2 = 'http://192.168.1.107:8088/Image_upload/'+this.state.emailEw;
   // var imageName = this.state.imageName;
    const data1 = new FormData();
    data1.append("email",this.state.emailEw);
    data1.append("file", this.state.avatarSource); 
    data1.append("name",this.state.photoname);
    data1.append("type",this.state.data);
    
    
     fetch(url2, { method: 'post', body: data1 })
     .then(response => response.json())
     .then(json => {if(json.result === "exists"){
         //AsyncStorage
      ///alert("الحساب موجود ! يرجى تغيير رقم الموبايل");            
     }
     else if(json.result === "sucess"){
     // alert("تم إنشاء حسابك بنجاح"); 
    }       
    }).catch((error) => { 
      console.log(error);
      //alert( error)
    });
    };
  
    render(){
      const {EW} = this.props.navigation.state.params;
      this.state.emailEw= EW;
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
                <Icon onPress={this.selectImage} size={30} name="camera" style={{color:'#1c313a',marginTop:-60,marginLeft:110 }}/>
                <Text style={Styles.email}>{EW}</Text>
                <Text>{this.props.avatarSource}</Text>
            </View>
            
            </ImageBackground>
            <View style={Styles.Bar}>

            </View>
            <ScrollView style={Styles.hBk}>
            <Form>
             <Item stackedLabel>
                
                <Label>UserName</Label>
                <Input underlineColorAndroid />
                        
             </Item>
             <Item stackedLabel>
              
              <TouchableOpacity style={Styles.row} onPress={() => this.props.navigation.navigate('Changepassword',{email1:EW})}>
                <Text style={[Styles.title]}>EditPassword</Text>
                <View style={Styles.co}>
                <Icon1 name={'keyboard-arrow-right'} size={30} color={Colors.DARKGRAY}/>
                </View>
               </TouchableOpacity>
               
             </Item>
             <TouchableOpacity style={Styles.buttonlogin}>
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
        
       
    } ,
     hBk: {
        flex : 1 , 
        width : null , 
        alignSelf : 'stretch'
        
      },
      hed : {
            flex : 1 , 
            alignItems :  'center',
            justifyContent: 'center' ,
            padding :20 ,
            backgroundColor : 'rgba(0,0,0,0.5)'

      },
      ProfileWarp : {
          width : 180 , 
          height :180 , 
          borderRadius : 100 , 
          borderColor : 'rgba(0,0,0,0.4)' , 
          borderWidth : 16 , 

      },
      ProfileTopic : {
          flex :1 , 
          width : null , 
          alignSelf : 'stretch' , 
          borderRadius : 100 , 
          borderColor : '#fff',
          borderWidth : 4 , 
         

      },
      email :  {
            marginTop :20 , 
            fontSize : 16 , 
            color : '#fff',
            fontWeight  :'bold',
            marginTop:30
           
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

co: {
  //flex:1,
   //paddingTop:100,
  //backgroundColor:Colors.LIGHTGRAY,
}
});   
export default Profile;