import React,{Component} from 'react';
import Checkbox from 'react-native-custom-checkbox';
import RNPickerSelect from 'react-native-picker-select';
import PushNotification from "react-native-push-notification";
import { Item, Input, Label } from 'native-base';
import IP from './Ip';
import {
  
  StyleSheet,
  TextInput,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ToastAndroid,
  BackHandler,
  Alert,
  AsyncStorage,
  Button
} from 'react-native';




import Logo from '../components/Logo';


  
 

export default class Login extends Component {




    async storeToken(user) {
        try {
           await AsyncStorage.setItem("user", user);
        } catch (error) {
          console.log("Something went wrong", error);
        }
      }
      async storeToken1(user) {
        try {
           await AsyncStorage.setItem("user1", user);
        } catch (error) {
          console.log("Something went wrong", error);
        }
      }
      async storeToken2(user) {
        try {
           await AsyncStorage.setItem("user2", user);
        } catch (error) {
          console.log("Something went wrong", error);
        }
      }
      async getToken() {
        try {
          let userData = await AsyncStorage.getItem("user");
          let data = userData;
          
          if(data != null){
            let d = data.toString();
            this.props.navigation.navigate('Officerpage',{Email: this.state.email});
          }
          console.log(data);
        } catch (error) {
          
          console.log("Something went wrong", error);
        }
      }
      async getToken1() {
        try {
          let userData = await AsyncStorage.getItem("user1");
          let data = userData;
          
          if(data != null){
            let d = data.toString();
            this.state.email=d ;
            this.props.navigation.navigate('Drawer',{Email: this.state.email})
          }
          console.log(data);
        } catch (error) {
          console.log("Something went wrong", error);
        }
      }
      async getToken2() {
        try {
          let userData = await AsyncStorage.getItem("user2");
          let data = userData;
          
          if(data != null){
            let d = data.toString();
            this.state.email=d ;
            this.props.navigation.navigate('Admin',{Email: this.state.email}) 
          }
          console.log(data);
        } catch (error) {
          console.log("Something went wrong", error);
        }
      }

        
        constructor(props) {
            super(props);
          this.state = {
                checked1: false,
                email:'',
                pass:'',
                sec : '',
                iduser :'',
            }
            //const {navigate} = this.props.navigation
         }
         
          
         componentDidMount() {
            
            BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
            this.getToken()
            this.getToken1()
            this.getToken2()
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
        if (!(this.state.email=== '' || this.state.pass === ''||this.state.iduser === '')) {

            if(this.state.iduser === '0'){
                let url2 = 'http://'+IP.ip+':8088/loginco/'+this.state.iduser+'/'+this.state.email+'/'+this.state.pass;
                const data = new FormData();
                data.append("iduser",this.state.iduser);
                data.append("email",this.state.email);
                data.append("password",this.state.pass);
               
              
                 fetch(url2, { method: 'post', body:data})
                 .then(response => response.json())
                 .then(json => {if(json.result === "failed"){
                     //AsyncStorage
                     ToastAndroid.show('Error with database. Please try again later. ', ToastAndroid.SHORT)       
                 }
                 else if(json.result === "success"){
                    ToastAndroid.show('Email Or Password incorrect ', ToastAndroid.SHORT)
                } 
                else if(json.result === "in"){
                   this.props.navigation.navigate('Officerpage',{Email: this.state.email});
                   this.storeToken(this.state.email);
                  }           
                              }
                              
                              ) 
        }else{

            let url2 = 'http://'+IP.ip+':8088/loginco/'+this.state.iduser+'/'+this.state.email+'/'+this.state.pass;
            const data = new FormData();
            data.append("iduser",this.state.iduser);
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
               this.props.navigation.navigate('Drawer',{Email: this.state.email})
               this.storeToken1(this.state.email);

              }           
                          }
                          
                          )  

        }
        } else {
            ToastAndroid.show('Must Fill the Boxs', ToastAndroid.SHORT)
        }
        
        
    }
    else {
        if (!(this.state.email=== '' || this.state.pass === ''||this.state.sec === '')) {
        let url2 = 'http://'+IP.ip+':8088/loginn/'+this.state.email+'/'+this.state.pass+'/'+this.state.sec;
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
            this.props.navigation.navigate('Admin',{Email: this.state.email})
            this.storeToken2(this.state.email);
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
             value={this.state.email}
             onChangeText={ TextInputValue => this.setState({ email : TextInputValue }) }/>
              <TextInput style={formStyles.inputtext} underlineColorAndroid='rgba(0,0,0,0)' 
             placeholder="Password" 
             placeholderTextColor="#ffffff"
             secureTextEntry={true}
             onChangeText={ TextInputValue => this.setState({ pass : TextInputValue }) }/>
             {this.state.checked1 ? null :
             <RNPickerSelect
                    onValueChange={(value) => this.setState({iduser: value})}
                    //value={this.state.id}
                    //onChangeText={(value)=> this.setState({id : value})}
                    items={[
                        { label: 'Office', value: '0' },
                        { label: 'User', value: '1' },
                    ]}
                 />
                }
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
             <View style={formStyles.signupstyle1}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Forgot')}><Text style={formStyles.textsignup1}>Forgot Password?</Text></TouchableOpacity>

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
        paddingVertical : 5 ,
        flexDirection :'row'
        
    },
    signupstyle1 : {
      marginBottom :15,
      alignItems :  'flex-end',
      justifyContent: 'center',
      paddingVertical : 4 ,
      
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

