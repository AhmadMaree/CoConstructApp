import React,{Component} from 'react';
import Checkbox from 'react-native-custom-checkbox';
import RNPickerSelect from 'react-native-picker-select';
import { Item, Input, Label } from 'native-base';
import RNSmtpMailer from "react-native-smtp-mailer";

import {
  
  StyleSheet,
  TextInput,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ToastAndroid,
  BackHandler,
  Alert
} from 'react-native';

import Logo from '../components/Logo';
import Ip from './Ip';

export default class Forgot extends Component {

    constructor(props) {
        super(props);
      this.state = {
            checked1: true,
            email:'',
            checked2:true,
            sec:'',
            NumberHolder : 1 ,
            checked3:true,
            checked4:false,
            newpass :''
        }
        
     }
    

     onRegister = () => {

            
           let url2 = 'http://'+Ip.ip+':8088/forgot/'+this.state.email;
            const data = new FormData();
            data.append("email",this.state.email);
            fetch(url2, { method: 'post', body:data})
             .then(response => response.json())
             .then(json => {
                 if(json.result === "failed"){
                 
                 ToastAndroid.show('Error with database. Please try again later. ', ToastAndroid.SHORT)       
             }

             else if(json.result === "success"){
                ToastAndroid.show('Email does not found ', ToastAndroid.SHORT)
            } 

            else if(json.result === "in"){
                Alert.alert ('Alert',
                   'We will send message to your email,which contain a key.\nPlease enter key in text below',
                  [
                    {text :'No', onPress : () =>  alert('Canceled'),style:'cancel'},
                    {text: 'Yes' ,onPress :() => {
                    this.setState({checked1: !this.state.checked1,checked2: !this.state.checked2});
                    this.GenerateRandomNumber();
                    RNSmtpMailer.sendMail({
                        mailhost: "smtp.gmail.com",
                        port: "465",
                        ssl: true, 
                        //if ssl: false, TLS is enabled,**note:** in iOS TLS/SSL is determined automatically, so either true or false is the same
                        username: "anahek.smy.91@gmail.com",
                        password: "anasahmad321098",
                        from: "anahek.smy.91@gmail.com",
                        recipients: this.state.email,
                        subject: "Support Coconstruct",
                        htmlBody: '<h1>Your code For New Password</h1><p>The code is : '+this.state.NumberHolder+'</p>',
                        attachmentPaths: [],
                        attachmentNames: [],//only used in android, these are renames of original files. in ios filenames will be same as specified in path. In ios-only application, leave it empty: attachmentNames:[] 
                        attachmentTypes: []//needed for android, in ios-only application, leave it empty: attachmentTypes:[]
                      })
                        .then(success => console.log(success) , alert("Message SEND TO YOUER Email"))
                        .catch(err => console.log(err));
                    }}
                ]
                )
             
            }

        }
             );
      
    }    

            GenerateRandomNumber=()=>
            {
                    
                    var RandomNumber = Math.floor(100000 + Math.random() * 900000) ;
                    
                    this.setState({
                    
                    NumberHolder : RandomNumber
                    
                    })
            }
    
    onClik =()=> {

          if(this.state.sec == this.state.NumberHolder){
            this.setState({checked3: !this.state.checked3,checked4: !this.state.checked4});
          }else{
              alert("Your secuer Number is Not True");
          }
    }
    onClik1 =()=> {
        let url2 = 'http://'+Ip.ip+':8088/updatePass/'+this.state.email;
        const data = new FormData();
        data.append("email",this.state.email);
        data.append("newpass",this.state.newpass)
        fetch(url2, { method: 'post', body:data})
         .then(response => response.json())
         .then(json => {
             if(json.result === "failed"){
             
             ToastAndroid.show('Error with database. Please try again later. ', ToastAndroid.SHORT)       
         }

         else if(json.result === "in"){
            Alert.alert ('Alert',
            'Your Password is Changed You can now Login',
           [
             {text: 'Ok' ,onPress :() => {
                this.props.navigation.navigate('Login')
             }
            }
            ]
            )
        }
        else if(json.result === "success") {
            Alert.alert ('Alert',
            'Your Password is Changed You can now Login',
           [
             {text: 'Ok' ,onPress :() => {
                this.props.navigation.navigate('Login')
             }
            }
            ]
            )
        }
    });
}
    
   
    render(){
          return(
 
            <View style={formStyles.connt}>
            <StatusBar backgroundColor='#1c313a' barStyle='light-content'>
            </StatusBar>
            <Logo/>
            {this.state.checked3 ? 
             <View style={formStyles.coonnt}>
            {this.state.checked1 ?
             <TextInput style={formStyles.inputtext} underlineColorAndroid='rgba(0,0,0,0)' 
             placeholder="Email" 
             placeholderTextColor="#ffffff"
             value={this.state.email}
             onChangeText={ TextInputValue => this.setState({ email : TextInputValue }) }/>:
             <Item stackedLabel >
                     <Label style={{ color: "#7BB062" }} >SecureCode</Label>
                        <TextInput style={formStyles.inputtext}
                        placeholder="XXX-X" 
                        placeholderTextColor="#ffffff"
                        secureTextEntry={true}
                        onChangeText={ TextInputValue => this.setState({ sec : TextInputValue }) }/>
                           </Item>
           }
                 {this.state.checked2 ?
             <TouchableOpacity style={formStyles.buttonlogin} onPress={this.onRegister}>
                 <Text style={formStyles.buttnTextlogin}>Send</Text>
             </TouchableOpacity>: <TouchableOpacity style={formStyles.buttonlogin} onPress={this.onClik}>
                 <Text style={formStyles.buttnTextlogin}>Submit</Text>
             </TouchableOpacity>
    }
    
             </View>
             :
             <View style={formStyles.coonnt}>
           <TextInput style={formStyles.inputtext} underlineColorAndroid='rgba(0,0,0,0)' 
                        placeholder="New Password" 
                        placeholderTextColor="#ffffff"
                        secureTextEntry={true}
                        value={this.state.newpass}
                        onChangeText={ TextInputValue => this.setState({ newpass : TextInputValue }) }/>
                {this.state.checked4 ?<TouchableOpacity style={formStyles.buttonlogin} onPress={this.onClik1}>
                    <Text style={formStyles.buttnTextlogin}>Go to page</Text>
                </TouchableOpacity> :null}
                    </View>

     
     }
     
            </View> 


          );

    }
}
const formStyles = StyleSheet.create({
    connt : {
        backgroundColor: '#455a64',
        flex: 1,
        alignItems :  'center',
        justifyContent: 'center',
        marginTop:-100
    } , 
    
    textsignup : {
        color : 'rgba(255,255,255,0.6)',
        fontSize : 16 
    },
    textsignup1 : {
        color : '#7BB062',
        fontSize :16 ,
        fontWeight :'500'

    },
   
   
    coonnt : {
        flexGrow: 1,
        alignItems :  'center',
        justifyContent: 'center',
    
    },

    inputtext: {
        width : 300,
        backgroundColor : 'rgba(255,255,255,0.3)',
        borderRadius : 25 , 
        paddingHorizontal : 16,
        fontSize : 16 ,
        color : '#ffffff', 
        marginVertical : 10


    } ,
    buttonlogin : {
        width : 300,
        backgroundColor : '#7BB062',
        borderRadius : 25 , 
        marginVertical : 16,
        paddingVertical : 16
    } ,
    buttnTextlogin : {
        fontSize :16 ,
        fontWeight : '500',
        color : '#ffffff' , 
        textAlign : 'center'


    },
    emailIcon: {
        position: 'absolute',
        top: 25,
        left: 10,
    }



});   
