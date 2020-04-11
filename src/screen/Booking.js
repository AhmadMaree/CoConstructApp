import React, { Component } from 'react';
import { StyleSheet, View,Text,Button,TextInput,TouchableOpacity  , AsyncStorage} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import Checkbox from 'react-native-custom-checkbox';
import RNPickerSelect from 'react-native-picker-select';

/*tableData: [
    ['1', '2', '3', '4'],
    ['a', 'b', 'c', 'd'],
    ['1', '2', '3', '456\n789'],
    ['a', 'b', 'c', 'd']
  */
 
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
      checked1:'',
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
        ['Have Title Deed', <View style={styles.forcheckbox}>
        <Checkbox name='checkbox1' size={20}
         style={styles.checkboxx} 
         onChange={()=> this.toggle()}
                  
         />
         <Text style={styles.textsignup1}>  YES ?</Text>
    </View>
        
       ],
       

      ]
    
    }
  }
  toggle() {
    this.setState({val: !this.state.val});
    if(this.state.val){
        this.state.checked1='1';

    }
    else{
        this.state.checked1='0';
    }
    
    
 }

 componentDidMount(){
  this.getToken1()
  this.getToken2()
 }

 onRegister = () => {
  
  if (!(this.state.name=== '' || this.state.addd === '' || this.state.tel === '' || this.state.idd === '')) {

  let url2 = 'http://192.168.1.106:8088/Sendtooffice/'+this.state.emailuser+'/'+this.state.name+'/'+this.state.idd+'/'+this.state.tel+'/'+this.state.addd+'/'+this.state.checked1;
  const data = new FormData();
 
  data.append("name",this.state.name);
  data.append("idd",this.state.idd);
  data.append("tel",this.state.tel);
  data.append("addd",this.state.addd);
  data.append("checked1",this.state.checked1);
  data.append("emailuser",this.state.emailuser);
  data.append("token",this.state.Token);

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


 
  let url2 = 'http://192.168.1.106:8088/inserttoken/'+this.state.emailuser;
                const data = new FormData();
                 data.append("token",this.state.Token)
                 fetch(url2, { method: 'post', body:data})
                 .then(response => response.json())
                 .then(json => {if(json.result === "failed"){
                  
                         
                 }
                 else if(json.result === "success"){
                    
                } }) 
    

  
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
    const state = this.state;
    return (
      <View style={styles.container}>
          
        <Table style={{marginVertical:80}} borderStyle={{borderWidth: .5, borderColor: '#000'}}>
          <Row  data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows  style={{height:70}} data={state.tableData} textStyle={styles.text1}/>
        </Table>
        <TouchableOpacity style={styles.buttonlogin} >
                 <Text style={styles.buttnTextlogin} onPress={this.onRegister}>Send</Text>
             </TouchableOpacity>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16,height:60 ,backgroundColor:'#D9D9DD'},
  head: { height: 90 },
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
       
       justifyContent: 'flex-start',
       //flex: 1,
       flexDirection :'row'
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
  marginVertical : -40,
  paddingVertical : 16,
  marginLeft:35
} ,
buttnTextlogin : {
  fontSize :16 ,
  fontWeight : '500',
  color : '#ffffff' , 
  textAlign : 'center'


},
});







  
