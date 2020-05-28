import React, { Component } from 'react';
import { StyleSheet, View,Text,Button,TextInput,TouchableOpacity  , AsyncStorage,Image} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import Checkbox from 'react-native-custom-checkbox';
import RNPickerSelect from 'react-native-picker-select';
import IP from './Ip';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
 
export default class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      tel:'',
      idd:'',
      Token : '',
      emailuser : '',
      addd:'',
      val:'false',
      data :null,
      avatarSource : null,
      photoname : '',
      checked1:'',
      ch:false,
      tableHead: ['Form For Office Reservation'],
      tableData: [
        ['Name',<TextInput  underlineColorAndroid='rgba(0,0,0,0)'  placeholder="Your name " 
         onChangeText={ TextInputValue => this.setState({ name : TextInputValue }) }/> ],
        ['Identity Number',<TextInput underlineColorAndroid='rgba(0,0,0,0)'  placeholder="EX:0431258974 " 
         onChangeText={ TextInputValue => this.setState({ idd : TextInputValue }) }/>],
        ['Mobile Number',<TextInput underlineColorAndroid='rgba(0,0,0,0)'  placeholder="EX:0597438914 " 
         onChangeText={ TextInputValue => this.setState({ tel : TextInputValue }) }/>] ,
        ['Address',   <RNPickerSelect
        useNativeAndroidPickerStyle={false}
        style={{color:'#000'}}
        onValueChange={value => this.setState({addd:value})}
        items={[
            { label: 'Nablus', value: 'Nablus' },
            { label: 'Jenin', value: 'Jenin' },
            { label: 'Tulkarem', value: 'Tulkarem' },
            { label: 'Ramallaha', value: 'Ramallaha' },
            { label: 'AlQuds', value: 'AlQuds' },
            { label: 'Jerico', value: 'Jerico' },
            { label: 'Betlahem', value: 'Betlahem' },
        ]}
    />],
        
       
      ],
      em :'',
      item :[],
    
    }
  }
  toggle() {
    this.setState({val: !this.state.val});
    if(this.state.val){
        this.state.checked1='1';
        this.state.ch=true;
        console.log(this.state.checked1)

    }
    else{
        this.state.checked1='0';
        this.state.ch=false;
        console.log(this.state.checked1)
    }
    
    
 }

 componentDidMount(){
  this.getToken1()
  this.getToken2()
  const {EM1} = this.props.navigation.state.params;
  this.state.em= EM1;

   fetch('http://'+IP.ip+':8088/get_r1/'+this.state.em).then(results=>results.json())
    .then(results=>this.setState({'item':results.response,'len':results.length}));

 }

 onRegister = () => {

  if (!(this.state.name=== '' || this.state.addd === '' || this.state.tel === '' || this.state.idd === '')) {

  let url2 = 'http://'+IP.ip+':8088/Sendtooffice/'+this.state.emailuser+'/'+this.state.name+'/'+this.state.idd+'/'+this.state.tel+'/'+this.state.addd+'/'+this.state.checked1+'/'+this.state.em;
  const data = new FormData();
 
  data.append("name",this.state.name);
  data.append("idd",this.state.idd);
  data.append("tel",this.state.tel);
  data.append("addd",this.state.addd);
  data.append("checked1",this.state.checked1);
  data.append("emailuser",this.state.emailuser);
  data.append("token",this.state.Token);
  data.append("emailoffice",this.state.em);
  data.append("file", this.state.data); 
  data.append("name1",this.state.photoname);

   fetch(url2, { method: 'post', body:data})
   .then(response => response.json())
   .then(json => {if(json.result === "exists"){
    //AsyncStorage
     alert("no");          
     } 
     else if(json.result === "success"){
      alert("Home License is send"); 
     } 
    })
 }
      else {
      ToastAndroid.show('Must Fill the Boxs', ToastAndroid.SHORT)
    }


 
  let url2 = 'http://'+IP.ip+':8088/inserttoken/'+this.state.emailuser;
                const data = new FormData();
                 data.append("token",this.state.Token)
                 fetch(url2, { method: 'post', body:data})
                 .then(response => response.json())
                 .then(json => {if(json.result === "failed"){
                  
                         
                 }
                 else if(json.result === "success"){
                    
                } }) 
               
                
                var sum1;

                sum1=parseInt(this.state.count) + parseInt(1);
                console.log(sum1)
   let url3 = 'http://'+IP.ip+':8088/updategrp/'+this.state.em;
                const data1 = new FormData();
                 data1.append("count",sum1)
                 fetch(url3, { method: 'post', body:data1})
                 .then(response => response.json())
                 .then(json => {if(json.result === "failed"){   
                 }
                 else if(json.result === "success"){
                    
                } }) 
  
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
    }
  });
} 

async getToken1() {
  try {
    let userData = await AsyncStorage.getItem("Token");
    let data = userData;
    
    if(data != null){
      let d = data.toString();
      this.state.Token=d ;
      console.log(this.state.Token)
    }
  } catch (error) {
    console.log("Something went wrong", error);
  }
}
async getToken2() {
  try {
    let userData = await AsyncStorage.getItem("user1");
    let data = userData;
    
    if(data != null){
      let d = data.toString();
      this.state.emailuser=d ;
      console.log(this.state.emailuser)
    }
  } catch (error) {
    console.log("Something went wrong", error);
  }
}



                                                                                  

 
  render() {
    const {EM1} = this.props.navigation.state.params;
    this.state.em= EM1;
    console.log(this.state.em);
    this.state.item.forEach((item)=>{
      this.state.count = `${item.may}`
  });
      console.log(this.state.count)
    const state = this.state;
    return (
      <View style={styles.container}>
          
        <Table style={{marginVertical:80}} borderStyle={{borderWidth: .5, borderColor: '#000'}}>
          <Row  data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows  data={state.tableData} textStyle={styles.text1}/>
        </Table>
        <View style={{marginTop:-80,borderWidth:.5}}>
          <Text style={{marginTop:20}}>Have Title Deed?</Text>
        <View style={styles.forcheckbox}>
        <Checkbox name='checkbox1' size={20}
         style={styles.checkboxx} 
         onChange={()=> this.toggle()}    
         checked={this.state.ch}       
         />
         <Text style={styles.textsignup1}>  YES ?</Text>
    </View>
    <View style={styles.hed}>
    <View style={styles.ProfileWarp}> 
    {this.state.avatarSource == null ? 

        <Image  style={styles.ProfileTopic} source={require('../Images/logo1.png')}/>
      : <Image  style={styles.ProfileTopic} source={{uri:this.state.avatarSource}}/>
      }
    </View>
    <Icon onPress={this.selectPhotoTapped.bind(this,1)} size={30} name="camera" style={{color:'#1c313a',marginTop:-60,marginLeft:60 }}/>
    <Text style={styles.email}>Upload Title Deed </Text>
    
    </View>
    </View>
        <TouchableOpacity style={styles.buttonlogin} >
                 <Text style={styles.buttnTextlogin} onPress={this.onRegister}>Send</Text>
             </TouchableOpacity>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16,height:40 ,backgroundColor:'#D9D9DD'},
  head: { height: 65 },
  text: { marginLeft:90 },
  text1:{marginLeft:5},
  checkboxx:{
        
    backgroundColor: '#B4B6A4',
    borderRadius: 60,
    borderWidth: .1,
    color: '#000',
    margin: 10,
   
    
       
   },
   forcheckbox :{
       
    justifyContent: 'center',
    //flex: 1,
    flexDirection :'row',
    marginLeft:130,
    marginTop:-30
},
   textsignup1 : {
    color : '#7BB062',
    fontSize :16 ,
    fontWeight :'500',
    marginLeft:-10,
    marginTop:8

},

buttonlogin : {
  width : 300,
  backgroundColor : '#7BB062',
  borderRadius : 25 , 
  marginVertical : 20,
  paddingVertical : 16,
  marginLeft:35
} ,
buttnTextlogin : {
  fontSize :16 ,
  fontWeight : '500',
  color : '#ffffff' , 
  textAlign : 'center'


},
hBk: {
  flex : 2 , 
  width : null , 
  alignSelf : 'stretch'
  
},

hed : {
  //flex : 1 , 
  alignItems :  'center',
  justifyContent: 'center' ,
  padding :-5 ,
  marginLeft : 200,
 // backgroundColor : 'rgba(0,0,0,0.5)',
 // height:150

},
ProfileWarp : {
width : 120 , 
height :120 , 
borderRadius : 0 , 
borderColor : 'rgba(255,255,255,255)' , 
borderWidth : 16 , 
marginLeft:-50

},
ProfileTopic : {
//flex :1 , 
width : null , 
//alignSelf : 'stretch' , 
borderRadius : 0 , 
borderColor : '#fff',
borderWidth : 2 , 
//alignContent:'space-between'
width : 120 , 
height :120 , 
marginLeft:-16,
marginTop:-16


},
email :  {
  marginTop :20 , 
  fontSize : 16 , 
  color : '#000',
 // fontWeight  :'bold',
  marginTop:30,
  fontFamily:'Bellota-LightItalic',
  marginLeft:-40
 
},
});







  
