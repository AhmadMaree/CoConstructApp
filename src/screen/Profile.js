import React,{Component} from 'react';
import { Container, Content,Card,CardItem,Left,Right, Form, Item, Input, Label } from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
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


class Profile extends Component {


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
                    <Image style={Styles.ProfileTopic} source={require('../Images/logo1.png')}/>
                </View>
                <Text style={Styles.email}>Nafe.hammd@hotmail.com</Text>
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
                
                <Label>Password</Label>
                <Input secureTextEntry={true} underlineColorAndroid />
                        
             </Item>
             <Item stackedLabel>
                
                <Label>ConfirmPassword</Label>
                <Input secureTextEntry={true} underlineColorAndroid />
                        
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
           
      },
      Bar : {
        borderTopColor : '#d9d9d9',
        borderTopWidth : 4 , 
        backgroundColor : '#455a64',
        flexDirection : 'row'  ,
        
    },
    buttonlogin : {
        width : 300,
        backgroundColor : '#7BB062',
        borderRadius : 25 , 
        marginVertical : 16,
        paddingVertical : 16,
        margin : "10%" ,

    } ,
    buttnTextlogin : {
        fontSize :16 ,
        fontWeight : '500',
        color : '#ffffff' , 
        textAlign : 'center'

    }
      
});   
export default Profile;