import React,{Component, useCallback} from 'react';
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
import Ip from './Ip';


class Profile extends Component {

      constructor(props){
        super(props);
        this.state = {
          emailEw : '',
          data :null,
          avatarSource : null,
          photoname : '',
          allData : [],
          length : 0 ,
          avatarSource1 : null,
          username :'',
          isFocused: false
        }
      }

      
     async componentDidMount() {
      this.subs = [
        this.props.navigation.addListener("didFocus", () => this.setState({ isFocused: true })),
        this.props.navigation.addListener("willBlur", () => this.setState({ isFocused: false }))
      ];
        const {EW} = this.props.navigation.state.params;
        this.state.emailEw= EW;
        let url = 'http://'+Ip.ip+':8088/get_all_Profile/'+this.state.emailEw ;
        fetch(url).then(results=>results.json())
        .then(results=>this.setState({'allData':results.response}));
       
       }
       componentWillUnmount() {
        this.subs.forEach(sub => sub.remove());
      }
      
      selectPhotoTapped(num){
        const options = {
          quality: 1.0,
          maxWidth: 500,
          maxHeight: 500,
       includeBase64: true,
          storageOptions: {
            skipBackup: true
          }
        }
        ImagePicker.showImagePicker(options, (response) => {
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
              data :response.data,
              photoname : response.fileName
            });
            
            this.onRegister();
          }
        });
    
  } 

   onRegister = () => {
   let url2 = 'http://'+Ip.ip+':8088/Image_upload/'+this.state.emailEw;
   // var imageName = this.state.imageName;
    const data1 = new FormData();
    data1.append("email",this.state.emailEw);
    data1.append("file", this.state.data); 
    data1.append("name",this.state.photoname);
    //data1.append("type",this.state.avatarSource);
    
    
     fetch(url2, { method: 'post', body: data1 })
     .then(response => response.json())
     .then(json => {if(json.result === "exists"){
         //AsyncStorage
      ///alert          
     }
     else if(json.result === "sucess"){
     // alert 
    }       
    }).catch((error) => { 
      console.log(error);
      
    });
    };
  
    render(){
      if (!this.state.isFocused) {
        this.componentDidMount()
      }
      const {EW} = this.props.navigation.state.params;
      this.state.emailEw= EW;

      this.state.allData.forEach((item)=>{
          this.state.avatarSource = encodeURI('http://'+Ip.ip+':8088/load_image1?img=' + `${item.photo}`)
          this.state.username = `${item.username}`
      });
    
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
                <Icon onPress={this.selectPhotoTapped.bind(this,1)} size={30} name="camera" style={{color:'#1c313a',marginTop:-60,marginLeft:110 }}/>
               
            </View>
            <View style={{justifyContent:'flex-start',alignItems:'flex-start', flex : 1 ,padding :20 ,
            backgroundColor : 'rgba(0,0,0,0.5)' , height : 700}}>
                <Text style={{marginTop :20 , fontSize : 30, 
                              color : '#fff',
                              fontFamily :'Bellota-Bold'}}>Email</Text>
                <Text  style={{ fontSize : 15, 
                                marginLeft:30,
                               color : '#fff',
                              fontFamily :'Bellota-Bold'}}>{EW}</Text>
                <Text  style={{ fontSize : 20, 
                              color : '#fff',
                              fontFamily :'Bellota-Bold'}}>UserName</Text>
                <Text  style={{ fontSize : 15, 
                                marginLeft:30,
                              color : '#fff',
                              fontFamily :'Bellota-Bold'}}>{this.state.username}</Text>
                
                </View>
            </ImageBackground>
            
            <ScrollView style={Styles.hBk}>
            <Form>
              
             
             <Item stackedLabel>
              <TouchableOpacity style={Styles.row} onPress={() => this.props.navigation.navigate('Changepassword',{email1:EW})}>
                <Text style={[Styles.title]}>EditPassword</Text>
                <View style={Styles.co}>
                <Icon1 name={'keyboard-arrow-right'} size={30} color={Colors.DARKGRAY}/>
                </View>
               </TouchableOpacity>
               </Item>
               <Item stackedLabel>
              <TouchableOpacity style={Styles.row1} onPress={() => this.props.navigation.navigate('EditUserName',{email1:EW,user:this.state.username})}>
                <Text style={[Styles.title]}>EditUserName</Text>
                <View style={Styles.co}>
                <Icon1 name={'keyboard-arrow-right'} size={30} color={Colors.DARKGRAY}/>
                </View>
               </TouchableOpacity>
               </Item>
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

        
        
      },
      hed : {
            flex : 1 , 
            alignItems :  'center',
            justifyContent: 'center' ,
            padding :20 ,
            backgroundColor : 'rgba(0,0,0,0.5)',
            height: 600

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
            marginTop :30 , 
            fontSize : 16 , 
            color : '#fff',
            fontWeight  :'bold',
            fontFamily :"Courgette-Regular"
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
    backgroundColor: Colors.COCOLOR,
    marginTop : 50 ,
}, 
row1:{
  flexDirection: 'row',
  justifyContent:'space-between',
  height:70,
  width : "90%",
  borderRadius : 60 ,
  paddingLeft:25,
  paddingRight:25,
  alignItems:'center',
  backgroundColor: Colors.CGRAY,
  marginTop : 50 ,
}, 

co: {
  //flex:1,
   //paddingTop:100,
  //backgroundColor:Colors.LIGHTGRAY,
}
});   
export default Profile;