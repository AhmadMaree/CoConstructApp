import React,{Component} from 'react';
import Checkbox from 'react-native-custom-checkbox';

import { Item, Input, Label } from 'native-base';
import {
  
  StyleSheet,
  TextInput,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ToastAndroid,
  BackHandler,
} from 'react-native';




import Logo from '../components/Logo';


  
 

export default class Login extends Component {

        constructor(props) {
            super(props);
          this.state = {
                checked1: false,
                email:'',
                pass:'',
                sec : ''
            }
         }


     

         componentDidMount() {
            BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
            
           }
               
           componentWillUnmount() {
            BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
           }
               
           handleBackButton() {
                   BackHandler.exitApp();
                   return true;
           }
    toggle() {
       this.setState({checked1: !this.state.checked1});
       
       
    }
    onRegister = () => {
        if(!this.state.checked1){
        if (!(this.state.email=== '' || this.state.pass === '')) {

        let url2 = 'http://192.168.1.104:8088/loginco/'+this.state.email+'/'+this.state.pass;
        const data = new FormData();
       
        data.append("email",this.state.email);
        data.append("password",this.state.pass);
       
      
         fetch(url2, { method: 'post', body:data})
         .then(response => response.json())
         .then(json => {if(json.result === "failed"){
             //AsyncStorage
             ToastAndroid.show('Error with database. Please try again later. ', ToastAndroid.SHORT)       
         }
         else if(json.result === "success"){
            ToastAndroid.show('Email Or Password incorrect', ToastAndroid.SHORT)
        } 
        else if(json.result === "in"){
            this.props.navigation.navigate('Drawer')
          }           
                      }
                      
                      )  
        } else {
            ToastAndroid.show('Must Fill the Boxs', ToastAndroid.SHORT)
        }
        
        
    }
    else {
        if (!(this.state.email=== '' || this.state.pass === ''||this.state.sec === '')) {
        let url2 = 'http://192.168.1.104:8088/loginn/'+this.state.email+'/'+this.state.pass+'/'+this.state.sec;
        const data = new FormData();
       
        data.append("email",this.state.email);
        data.append("password",this.state.pass);
        data.append("sec",this.state.sec);
       
      
         fetch(url2, { method: 'post', body:data})
         .then(response => response.json())
         .then(json => {if(json.result === "failed"){
             //AsyncStorage
             ToastAndroid.show('Error with database. Please try again later. ', ToastAndroid.SHORT)           
         }
         else if(json.result === "success"){
            ToastAndroid.show('Email Or Password or scurecode incorrect', ToastAndroid.SHORT) 
        } 
        else if(json.result === "in"){
            this.props.navigation.navigate('Admin')
          }           
                      }
                      
                      )  
    }
    else {
        ToastAndroid.show('Must Fill the Boxs', ToastAndroid.SHORT)
  }
 }
};
    
   render(){
  
       return(

        <View style={formStyles.connt}>
            <StatusBar backgroundColor='#1c313a' barStyle='light-content'>
            </StatusBar>
            <Logo/>
            <View style={formStyles.coonnt}>
             
             <TextInput style={formStyles.inputtext} underlineColorAndroid='rgba(0,0,0,0)' 
             placeholder="Email" 
             placeholderTextColor="#ffffff"
             onChangeText={ TextInputValue => this.setState({ email : TextInputValue }) }/>
              <TextInput style={formStyles.inputtext} underlineColorAndroid='rgba(0,0,0,0)' 
             placeholder="Password" 
             placeholderTextColor="#ffffff"
             secureTextEntry={true}
             onChangeText={ TextInputValue => this.setState({ pass : TextInputValue }) }/>
             {this.state.checked1 ? <Item stackedLabel >
                     <Label style={{ color: "#7BB062" }} >SecureCode</Label>
                        <TextInput style={formStyles.inputtext}
                        placeholder="XXX-XX" 
                        placeholderTextColor="#ffffff"
                        secureTextEntry={true}
                        onChangeText={ TextInputValue => this.setState({ sec : TextInputValue }) }/>
                           </Item> : null}
             <TouchableOpacity style={formStyles.buttonlogin} onPress={this.onRegister}>
                 <Text style={formStyles.buttnTextlogin}>Login</Text>
             </TouchableOpacity>
    
                
            </View>

            <View style={formStyles.forcheckbox}>
                <Checkbox name='checkbox1' size={20}
                 style={formStyles.checkboxx} 
                 onChange={()=> this.toggle()}
                checked={this.state.checked1}           
                 />
                 <Text style={formStyles.textsignup1}>Login As Admin ?</Text>
            </View>
            <View style={formStyles.signupstyle}>
                <Text style={formStyles.textsignup}>Don't have an account yet ?  </Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('singup')}><Text style={formStyles.textsignup1}>signup</Text></TouchableOpacity>

             </View>
        </View>

        

       );
   }








}





const formStyles = StyleSheet.create({
    connt : {
        backgroundColor: '#455a64',
        flex: 1,
        alignItems :  'center',
        justifyContent: 'center'
    } , 
    signupstyle : {
        flexGrow: 1,
        alignItems :  'flex-end',
        justifyContent: 'center',
        paddingVertical : 16 ,
        flexDirection :'row'
        
    },
    textsignup : {
        color : 'rgba(255,255,255,0.6)',
        fontSize : 16 
    },
    textsignup1 : {
        color : '#7BB062',
        fontSize :16 ,
        fontWeight :'500'

    },
    checkboxx:{
        
     backgroundColor: '#455a64',
     borderRadius: 0,
     borderWidth: 2,
     color: '#7BB062',
     margin: 2,
    
     
        
    },
    forcheckbox :{
        
        justifyContent: 'flex-start',
        flex: 1,
        flexDirection :'row'
    },
    coonnt : {
        flexGrow: 1,
        alignItems :  'center',
        justifyContent: 'center'
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
