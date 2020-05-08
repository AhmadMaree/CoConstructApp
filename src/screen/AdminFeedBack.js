import React,{Component} from 'react';
import {
  
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
  ToastAndroid,
  SafeAreaView,
  Platform,
  ScrollView,
  Dimensions,
  FlatList

} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Ip from './Ip';
export default class AdminFeedBack extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          
          item:[],
          name1:'',
          field1:'',
          EN1 :'',
          item1:[],
          username : '',
        }
    
      }
    
    componentDidMount() {

        fetch('http://'+Ip.ip+':8088/get_feedback/').then(results=>results.json())
        .then(results=>this.setState({'item':results.response}));
      }

      onRegister = EN => {
        this.state.EN1=EN;
         let  url = 'http://'+Ip.ip+':8088/delete11/'+this.state.EN1;
        const data = new FormData();
        data.append("message",this.state.EN1);
        fetch(url , {method : 'delete' , body : data}).then(results=>results.json())
        .then(json => {if(json.status === 200){
         const filteredData = this.state.item.filter(item => item.message !== EN);
         this.setState({ item: filteredData });
         }else {
         alert('There an Error in Database , Not Deleted') 
        }
                          
        })
     
       }
       Usename = email =>{
            
        fetch('http://'+Ip.ip+':8088/showusename/'+email).then(results=>results.json())
        .then(results=>this.setState({'item1':results.response}));
       }
       
    
 

      renderItem = ({ item }) => {
      
        if(item.type === '0'){
                var type ='Complaints'
        }else{
             var type = 'Suggestions'
        }
      return (
          
        <View style={{flex:1,marginVertical:20,height:200}}>
        <View style={{marginHorizontal:10,height:200,backgroundColor:'#dddddd',borderBottomWidth:1,borderBottomColor:'#dddddd'}}>
             <View style={{flexDirection:'row',backgroundColor:'#dddddd',height:50,
             elevation:25}}>
            <Text style={{alignItems:'center',justifyContent:'center',marginHorizontal:110,marginVertical:10,fontFamily:'Bellota-Bold' ,}}>{type}</Text> 
             <Icon onPress={() => this.onRegister(item.message)} name='ios-close' size={50} style={{paddingLeft:330,position:'absolute'}} />
            </View>

             <Text style={{fontSize : 20,fontFamily:'Bellota-Bold'}}>
                Email : {item.email}
             </Text>
             <Text style={{fontSize : 30,fontFamily:'Courgette-Regular'}}>
                Title : { item.title}
             </Text>
            <Text>
               Message : { item.message}
             </Text>
          </View>
       </View>
            
       )
       }
  


render(){
    return(
        <SafeAreaView style={{flex:1,}}>
             <FlatList
            data={this.state.item}
            renderItem={this.renderItem}
        />
        </SafeAreaView>

    );

}
}