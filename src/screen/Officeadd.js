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
  TextInput
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';

  export default class Officeadd extends Component {

    state = {
        avatarSource : null,
        ON:'',
        EN:'',
        PN:'',
        FA:'',
        AD:'',
        EM:'',
        TE:''
        
  
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
              });
            }
          });
      };

      onRegister = () => {

  
  
        /*selectPhotoTapped(num){
          const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
         includeBase64: true,
            storageOptions: {
              skipBackup: true
            }
          };
      */
      
      
        let url2 = 'http://192.168.1.104:8088/Insert/'+this.state.ON+'/'+this.state.EN+'/'+this.state.PN+'/'+this.state.EM+'/'+this.state.FA+'/'+this.state.TE+'/'+this.state.AD;
        //var imageName = this.state.imageName;
         const data = new FormData();
        //data.append("file", this.state.data); 
      
        /*data.append("name",this.state.photoname );*/
        data.append("ON",this.state.ON);
        data.append("EN",this.state.EN);
        data.append("PN",this.state.PN);
        data.append("EM",this.state.EM);
        data.append("FA",this.state.FA);
        data.append("TE",this.state.TE);
        data.append("AD",this.state.AD);
        
        
        
         fetch(url2, { method: 'POST',body:data})
         .then(response => response.json)
         
         .then(json => {if(json.result === "exists"){
             //AsyncStorage
          alert("no");          
         }
         else if(json.result === "success"){
          alert("insert ok"); 
        }       
       })                                                                                   
      
        
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
            <Icon onPress={this.selectImage} size={30} name="camera" style={{color:'#1c313a',marginTop:-60,marginLeft:110 }}/>
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
           onChangeText={ TextInputValue=>this.setState({ON:TextInputValue}) }
           underlineColorAndroid='transparent'
          style={Styles.TextInputStyleClass}
          />
           <TextInput
          placeholder="Enter Engineering Name  "
           onChangeText={ TextInputValue=>this.setState({EN:TextInputValue}) }
           underlineColorAndroid='transparent'
          style={Styles.TextInputStyleClass}
          />
           <TextInput
          placeholder="Enter Phone Number Ex:0597438914"
           onChangeText={ TextInputValue=>this.setState({PN:TextInputValue}) }
           underlineColorAndroid='transparent'
          style={Styles.TextInputStyleClass}
          />
           <TextInput
          placeholder="Enter  Email Ex:name@name.com"
           onChangeText={ TextInputValue=>this.setState({EM:TextInputValue}) }
           underlineColorAndroid='transparent'
          style={Styles.TextInputStyleClass}
          />
           <TextInput
          placeholder="Enter Facebook account"
           onChangeText={ TextInputValue=>this.setState({FA:TextInputValue}) }
           underlineColorAndroid='transparent'
          style={Styles.TextInputStyleClass}
          />
           <TextInput
          placeholder="Enter Telefax Ex:+970 9 2330340"
           onChangeText={ TextInputValue=>this.setState({TE:TextInputValue}) }
           underlineColorAndroid='transparent'
          style={Styles.TextInputStyleClass}
          />
           <TextInput
          placeholder="Enter Address Ex:Country-Ciy-Lane-Street"
           onChangeText={ TextInputValue=>this.setState({AD:TextInputValue}) }
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