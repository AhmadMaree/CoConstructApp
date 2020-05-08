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

export default class EditUserName extends Component{

  constructor(props) {
 
    super(props)
  
    this.state = {
  
      oldusername: '',
      newusername: '',
      email : '',
    }
  
  }

  onRegister = () => {
    if (!(this.state.oldusername=== '' || this.state.newusername === '')) {

  let url2 = 'http://'+IP.ip+':8088/ChangeUsername/'+this.state.email+'/'+this.state.newusername;
   const data = new FormData();

  data.append("email",this.state.email);
  data.append("newuser",this.state.newusername);
  
   fetch(url2, { method: 'POST',body:data})
   .then(response => response.json())
   
   .then(json => {if(json.result === "failed"){
       //AsyncStorage
    alert("error");          
   }
   else if (json.result === "in"){
    ToastAndroid.show('Username Changed', ToastAndroid.SHORT)
   }
   else if(json.result === "success"){
    alert("Username Changed"); 
  }       
 })                                                                                   
  }else { 
        ToastAndroid.show('Must Fill the Boxs', ToastAndroid.SHORT)
  }
  
  };
  

    
 
 render(){

  const {email1} = this.props.navigation.state.params;
   this.state.email = email1;
   const {user} = this.props.navigation.state.params;
   this.state.oldusername = user;

        return(
          
        
<View style={styles.MainContainer}>

 
 <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 50,marginTop:80,color:'#000'}}>Edit UserName</Text>

 <TextInput
  value={this.state.oldusername}
  editable={true}
   style={styles.TextInputStyleClass}
   underlineColorAndroid='transparent'
 />

<TextInput
   
   placeholder="NEW UserName"
   onChangeText={ TextInputValue=> this.setState({newusername:TextInputValue}) }
   underlineColorAndroid='transparent'
   style={styles.TextInputStyleClass}
   value={this.state.newusername}
 />
 
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


  