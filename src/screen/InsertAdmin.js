import React,{Component} from'react';
import {
  
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  TextInput,
  
  Animated,
  
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


import {Container,Header,Body,Checkbox,Title,Card,CardItem,Left,Right,Content,Grid,Col,Text,Button, Thumbnail, Subtitle}from 'native-base'
import Ip from './Ip';

export default class InsertAdmin  extends Component{

  constructor(props) {
 
    super(props)
  
    this.state = {
  
      name: '',
      salary: '',
      phonenum: '',
      email: '',
      
    }
  
  }



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


  let url2 = 'http://'+Ip.ip+':8088/Insert/'+this.state.name+'/'+this.state.salary+'/'+this.state.phonenum+'/'+this.state.email;
  //var imageName = this.state.imageName;
   const data = new FormData();
  //data.append("file", this.state.data); 

  /*data.append("name",this.state.photoname );*/
  data.append("name",this.state.name);
  data.append("salary",this.state.salary);
  data.append("phonenum",this.state.phonenum);
  data.append("email",this.state.email);
  
  
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
          
            
<View style={styles.MainContainer}>

 
 <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 50}}> Survey Enginerring information </Text>

 <TextInput
   
   placeholder="Enter Name"
   onChangeText={ TextInputValue => this.setState({ name : TextInputValue }) }
 // onChangeText={(TextInputValue)=>{this.state.TextInput_name=TextInputValue}}
  //value={this.state.TextInput_name}
   style={styles.TextInputStyleClass}
   underlineColorAndroid='transparent'
 />

<TextInput
   
   placeholder="Enter salary"
   onChangeText={ TextInputValue=>this.setState({salary:TextInputValue}) }
   underlineColorAndroid='transparent'
   style={styles.TextInputStyleClass}
 />

<TextInput
   
   placeholder="Enter Phone Number"
   onChangeText={ TextInputValue=>this.setState({phonenum:TextInputValue}) }
   underlineColorAndroid='transparent'
   style={styles.TextInputStyleClass}
 />

 <TextInput

   placeholder="Enter  Email"
   onChangeText={ TextInputValue=>this.setState({email:TextInputValue}) }
   underlineColorAndroid='transparent'
   style={styles.TextInputStyleClass}
 />

<TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.onRegister} >

  <Text style={styles.TextStyle}> INSERT </Text>

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
      //backgroundColor: '#fff'
   
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