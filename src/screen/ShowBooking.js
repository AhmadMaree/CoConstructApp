import { ListItem } from 'react-native-elements'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  TextInput,
  Animated,
  Text,
  FlatList,
  Button,
  StatusBar,
  TouchableHighlight,
  ScrollView,
  BackHandler,

} from "react-native";
import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/Ionicons';
import Icon4 from 'react-native-vector-icons/SimpleLineIcons';
import AsyncStorage from '@react-native-community/async-storage';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart,
    Alert
    
  } from "react-native-chart-kit";
   import { Dimensions } from "react-native";
   import Ip from './Ip';
   import {Container,Header,Body,Title,Card,CardItem,Left,Right,Content,Grid, Thumbnail, Subtitle}from 'native-base'
  const screenWidth = Dimensions.get("window").width;

export default class Showwork extends Component {

  constructor() {
    super();
    this.state = {
      dataSource: [],
      item:[],
      len:0,
      mont:0,
     em :'',
      
  }
 }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    this.getToken2();
  
        
    fetch('http://'+Ip.ip+':8088/get_r/').then(results=>results.json())
    .then(results=>this.setState({'item':results.response,'len':results.length}));
    
 
      var date = new Date().getDate();
      this.state.mont = new Date().getMonth() + 1;
      var year = new Date().getFullYear();
      // this.state.mont
      //Alert.alert(date + '-' + month + '-' + year);
       //console.log(month)
  }
  singout = () => {
    AsyncStorage.clear();
    this.props.navigation.navigate('Login');
  }
  handleBackButton() {
    BackHandler.exitApp();
    return true;
}
async getToken2() {
  try {
    let userData = await AsyncStorage.getItem("user");
    let data = userData;
    
    if(data != null){
      let d = data.toString();
      this.state.em =d ;
    }
  } catch (error) {
    console.log("Something went wrong", error);
  }
}
  renderItem = ({ item }) => {

    if(item.officename === this.state.em){
    const data = {
      labels: ["January", "February", "March", "April", "May", "June","July","Oughast","Septemper","October","November","Desamber"],
      datasets: [
        {
          data: [item.jan, item.feb, item.mar, item.apr, item.may,item.joh,item.jul,item.oug,item.sep,item.oct,item.nov,item.dece]
        }
      ]
    };
    const chartConfig = {
      backgroundGradientFrom: "#000",
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: "#e8e8df",
      backgroundGradientToOpacity: 1,
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.45,
      useShadowColorFromDataset: false // optional
    };
    return (
      <View style={{marginRight:10}}>
      <Text style={{marginTop:180,position:'absolute',transform:[{rotate:'90deg'}],color:'#7BB062'}}>(No.Book)</Text>
    <BarChart
    style={{padding:10,paddingBottom:0,paddingTop:0,alignContent:'flex-end',flexWrap:'wrap'}}
    data={data}
    width={screenWidth-60}
    height={350}
    yAxisLabel=""
    chartConfig={chartConfig}
    verticalLabelRotation={90}
   />
   <Text style={{marginLeft:180,marginTop:10,color:'#7BB062'}}>  (Month)</Text>
   </View>

    )
    }
  }



    render(){
      
        return(
          <View>
             <Header style={{backgroundColor :"#7BB062" }}>
                            <Left>
                                <Icon name='home' style={{fontSize: 20, color: '#efefef'}}/>
                            </Left>
                            <Body>
                            <Title>Officer</Title>
                            </Body>
                            <Right>
                               
                               <Icon4  onPress={this.singout} name='logout' style={{fontSize: 20, color: '#efefef'}}/>
                               
                            </Right>
                </Header>
               
                       
                    <StatusBar backgroundColor='#1c313a' barStyle='light-content'>
                        </StatusBar>
                        <Text style={{fontSize:22,padding:10,marginTop:30,fontFamily:'Bellota-Bold',color:'#7BB062'}}>Graph below show booking office number per each month.</Text>
        <View style={{height:420,backgroundColor:'#e8e8df'}}>
          <FlatList
           data={this.state.item}
           renderItem={this.renderItem}
        />
       </View>
        </View>

        );
    }
}