import React,{Component} from'react';
import {HelperText} from 'react-native-paper';
import {
  
    StyleSheet,
    TextInput,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
    Alert,
    ToastAndroid,
  
} from "react-native";
import IP from './Ip';


//import {Container,Header,Body,Checkbox,Title,Card,CardItem,Left,Right,Content,Grid,Col,Text,Button, Thumbnail, Subtitle}from 'native-base'

export default class Changepassword extends Component{

  constructor(props) {
 
    super(props)
  
    this.state = {
  
      oldpass: '',
      newpass: '',
      conpass: '',
      email : '',
      ErrFlagCPass: false,
    }
  
  }

  clicks() {

   if (this.state.newpass != this.state.conpass) {
    // confirm password not equal the password
    this.setState({ ErrFlagCPass: true });
    }
    else {
    this.setState({ ErrFlagCPass: false });
     }

  }
  changeCPass(inputText) {
    this.setState({ conpass: inputText });
    this.clicks();
  }
  changePass(inputText) {
    this.setState({ newpass: inputText });
    this.clicks();
  }
  endEditing() {
    this.clicks()
  }

  onRegister = () => {
    if (!(this.state.newpass=== '' || this.state.oldpass === '' || this.state.conpass === '')) {

  let url2 = 'http://'+IP.ip+':8088/ChangePassword/'+this.state.email+'/'+this.state.oldpass+'/'+this.state.newpass;
  //var imageName = this.state.imageName;
   const data = new FormData();
  //data.append("file", this.state.data); 

  data.append("email",this.state.email);
  data.append("oldpass",this.state.oldpass);
  data.append("newpass",this.state.newpass);
  //data.append("conpass",this.state.conpass);
  
  
   fetch(url2, { method: 'POST',body:data})
   .then(response => response.json())
   
   .then(json => {if(json.result === "failed"){
       //AsyncStorage
    alert("error");          
   }
   else if (json.result === "in"){
    ToastAndroid.show('Password Changed', ToastAndroid.SHORT)
   }
   else if(json.result === "success"){
    alert("Password Changed1"); 
  }       
 })                                                                                   
  }else { 
        ToastAndroid.show('Must Fill the Boxs', ToastAndroid.SHORT)
  }
  
  };
  

    
 
 render(){

  const {email1} = this.props.navigation.state.params;
   this.state.email = email1;

        return(
          
        
<View style={styles.MainContainer}>

 
 <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 50,marginTop:80,color:'#000'}}>Edit Password</Text>

 <TextInput
   
   placeholder="OLD PASSWORD"
   onChangeText={ TextInputValue => this.setState({ oldpass : TextInputValue }) }
 // onChangeText={(TextInputValue)=>{this.state.TextInput_name=TextInputValue}}
  //value={this.state.TextInput_name}
   secureTextEntry={true}
   style={styles.TextInputStyleClass}
   underlineColorAndroid='transparent'
 />

<TextInput
   
   placeholder="NEW PASSWORD"
   onChangeText={ TextInputValue=> this.changePass(TextInputValue) }
   underlineColorAndroid='transparent'
   style={styles.TextInputStyleClass}
   value={this.state.newpass}
   secureTextEntry={true}
   onSubmitEditing={() => this.Confirmpassword.focus()}
   onEndEditing={() => this.endEditing()}
   ref={(input) => this.password = input}
 />

 <TextInput

   placeholder="CONFERM PASSWORD"
   onChangeText={TextInputValue => this.changeCPass(TextInputValue)}
   underlineColorAndroid='transparent'
   style={styles.TextInputStyleClass}
   value={this.state.conpass}
   returnKeyType='go'
   secureTextEntry={true}
   ref={(input) => this.Confirmpassword = input}
   onEndEditing={() => this.endEditing()}
 />
 
  <HelperText
              style={{color:'#ef426c'}}
              type="error"
              visible={this.state.ErrFlagCPass}>
              Passwords do not match
   </HelperText>
 
<TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.onRegister} >

  <Text style={styles.TextStyle}> SAVE CHANGE </Text>

</TouchableOpacity>




</View>
     
);

}
}



            
  


 const styles = StyleSheet.create({
 
    MainContainer :{
   
      alignItems: 'center',
      flex:1,
      paddingTop: 30,
     // backgroundColor: '#455a64'
   
    },
   
    MainContainer_For_Show_StudentList_Activity :{
      
      flex:1,
      paddingTop: (Platform.OS == 'ios') ? 20 : 0,
      marginLeft: 5,
      marginRight: 5
      
      },
   
    TextInputStyleClass: {
   
    textAlign: 'center',
    width: '90%',
    marginBottom: 30,
    height: 40,
    borderWidth: 1,
    borderColor: '#7BB062',
    borderRadius: 50 ,
    height:60
   
    },
   
    TouchableOpacityStyle: {
   
      paddingTop:10,
      paddingBottom:10,
      borderRadius:40,
      marginBottom:7,
      width: '90%',
      backgroundColor: '#7BB062',
      height:50
   
    },
   
    TextStyle:{
      color:'#000',
      textAlign:'center',
    },
   
    rowViewContainer: {
      fontSize: 20,
      paddingRight: 10,
      paddingTop: 10,
      paddingBottom: 10,
    }
   
  });


  