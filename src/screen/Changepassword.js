import React,{Component} from'react';
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



//import {Container,Header,Body,Checkbox,Title,Card,CardItem,Left,Right,Content,Grid,Col,Text,Button, Thumbnail, Subtitle}from 'native-base'

export default class Changepassword extends Component{

  constructor(props) {
 
    super(props)
  
    this.state = {
  
      oldpass: '',
      newpass: '',
      conpass: '',
      
    }
  
  }



  onRegister = () => {

  
  
 


  let url2 = 'http://192.168.1.104:8088/Insert/'+this.state.oldpass+'/'+this.state.newpass+'/'+this.conpass;
  //var imageName = this.state.imageName;
   const data = new FormData();
  //data.append("file", this.state.data); 


  data.append("oldpass",this.state.oldpass);
  data.append("newpass",this.state.newpass);
  data.append("conpass",this.state.conpass);
  
  
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

 
 <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 50,marginTop:80,color:'#000'}}> EDIT PASSWORD </Text>

 <TextInput
   
   placeholder="OLD PASSWORD"
   onChangeText={ TextInputValue => this.setState({ oldpass : TextInputValue }) }
 // onChangeText={(TextInputValue)=>{this.state.TextInput_name=TextInputValue}}
  //value={this.state.TextInput_name}
   style={styles.TextInputStyleClass}
   underlineColorAndroid='transparent'
 />

<TextInput
   
   placeholder="NEW PASSWORD"
   onChangeText={ TextInputValue=>this.setState({newpass:TextInputValue}) }
   underlineColorAndroid='transparent'
   style={styles.TextInputStyleClass}
 />

 <TextInput

   placeholder="CONFERM PASSWORD"
   onChangeText={ TextInputValue=>this.setState({conpass:TextInputValue}) }
   underlineColorAndroid='transparent'
   style={styles.TextInputStyleClass}
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


  