
import React,{Component} from 'react';
//import { Container, Content,Card,CardItem,Left,Right, Form, Item, Input, Label } from 'native-base';
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

  import {ButtonGroup} from 'react-native-elements'
  import Textarea from 'react-native-textarea';
   import IP from './Ip';


export default class Feedback extends Component {


  constructor () {
    super()
    this.state = {
      selectedIndex: null,
      email : '',
      message : '',
      title :'',
    }
    this.updateIndex = this.updateIndex.bind(this)
  }
  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }
  
  addData=()=>{
    if (!(this.state.title=== '' || this.state.message=== ''||this.state.selectedIndex === null)) {

        let url2 = 'http://'+IP.ip+':8088/Feedback/'+this.state.email+'/'+this.state.selectedIndex+'/'+this.state.title+'/'+this.state.message;
        const data = new FormData();
       
        data.append("email",this.state.email);
        data.append("type",this.state.selectedIndex);
        data.append("title",this.state.title);
        data.append("message",this.state.message);

         fetch(url2, { method: 'post', body:data})
         .then(response => response.json())
         .then(json => {if(json.result === "failed"){
             //AsyncStorage
             ToastAndroid.show('Error with database. Please try again later. ', ToastAndroid.SHORT)       
         }
         else if(json.result === "success"){
            ToastAndroid.show('Your Feedback send!', ToastAndroid.SHORT)
         }          
                      })  
        } else {
            ToastAndroid.show('Must Fill the Boxs', ToastAndroid.SHORT)
        }
        
        
    }
  
  
  render () {
    

    const buttons = ['Complaints','Suggestions']
    const { selectedIndex } = this.state
    const {EW} = this.props.navigation.state.params;
    this.state.email= EW;
    return (
      <View>
      <ButtonGroup
        style={{backgroundColor : '#455a64'}}
        backgroundColor = {'#fff'}
        innerBorderStyle={{backgroundColor :'#7BB062',borderColor:'#7BB062'}}
        borderColor={'#7BB062'}
        onPress={this.updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons }
        containerStyle={{height: 60,width:'90%',marginLeft:20, marginTop:70,color:'#fff',padding:10,borderRadius:40,}} />
        <View style={styles.container}>
          <Textarea
             containerStyle={styles.textareaContainer}
             style={styles.textarea}
             onChangeText={TextInputValue => this.setState({ title : TextInputValue })}
             defaultValue={this.state.title}
             maxLength={50}
             placeholder={'Title of suggestions, complaints'}
             placeholderTextColor={'#c7c7c7'}
             underlineColorAndroid={'transparent'}
             borderColor='#000'
         />
</View >

<View style={styles.container1}>
          <Textarea
             containerStyle={styles.textareaContainer1}
             style={styles.textarea}
             onChangeText={TextInputValue => this.setState({ message : TextInputValue })}
             defaultValue={this.state.message}
             maxLength={300}
             placeholder={'Message of suggestions, complaints'}
             placeholderTextColor={'#c7c7c7'}
             underlineColorAndroid={'transparent'}
             borderColor='#000'
         />
</View>
           <View>
             <TouchableOpacity onPress={this.addData} style={{marginTop:100, width : "85%", backgroundColor : '#7BB062' , 
             marginVertical : 16, paddingVertical : 16, margin : "13%" , marginLeft:30}} >

                 <Text style={{ fontSize :16 ,
                             fontWeight : '500',
                             color : '#ffffff' , 
                             textAlign : 'center',}}>
                                 Send
                                 </Text>
             </TouchableOpacity> 
             </View>
</View>

    );
  }
          
        
      
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:40,
    
  },

  container1: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:100,
    
  },
  textareaContainer: {
    height: 70,
    padding: 5,
    backgroundColor: '#F5FCFF',
    borderWidth:0.5,
    
  
    
   
  },

  textareaContainer1: {
    height: 165,
    padding: 5,
    backgroundColor: 'yellow',
    backgroundColor: '#F5FCFF',
    borderWidth:0.5,
   
  },
  textarea: {
    textAlignVertical: 'top',  // hack android
    height: 170,
    fontSize: 14,
    color: '#333',
  },
 
});