import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, ImageBackground , AsyncStorage } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import { ScrollView } from 'react-native-gesture-handler';
import Ip from '../screen/Ip';



 class CustomSidebarMenu extends Component {
  constructor(props) {
    super(props);
      
    this.state = {
     
      email:'',
      avatarSource :null ,
      allData : [],
      username : '',
      
  }
    //const {navigate} = this.props.navigation

      
      this.items = [
        {
          navOptionThumb: 'home',
          navOptionName: 'Home',
          screenToNavigate: 'First5',
        },
        {
          navOptionThumb: 'user-circle-o',
          navOptionName: 'Profile',
          screenToNavigate: 'First1',
        },
        {
          navOptionThumb: 'commenting',
          navOptionName: 'Feedback',
          screenToNavigate: 'First2',
        },
        {
          navOptionThumb: 'map-marker',
          navOptionName: 'Maps',
          screenToNavigate: 'Firstt',
        },
        {
          navOptionThumb: 'sign-out',
          navOptionName: 'Logout',
         screenToNavigate: 'Login',
        },
        
      ];
    }


    componentDidMount(){
      const { Email } = this.props.navigation.state.params;
      this.state.email = Email;
        let url = 'http://'+Ip.ip+':8088/get_all_Profile/'+this.state.email ;
        fetch(url).then(results=>results.json())
        .then(results=>this.setState({'allData':results.response}));
    }


    render() {
      const { Email } = this.props.navigation.state.params;
      this.state.email = Email;
      this.state.allData.forEach((item)=>{
        this.state.avatarSource = encodeURI('http://'+Ip.ip+':8088/load_image1?img=' + `${item.photo}`);
        this.state.username = `${item.username}` ;
    });
      return (
        <ScrollView >
           <ImageBackground source={require('../Images/green.jpg')} style={{width:undefined, padding :32 ,paddingTop:48}}> 
           {this.state.avatarSource == null ?
           <Image
            source={require('../Images/profil-image.png')}
            style={styles.sideMenuProfileIcon}/>
            : 
            <Image
            source={{uri:this.state.avatarSource}}
            style={styles.sideMenuProfileIcon}/>
           }
            <Text style={styles.name1}>{this.state.username}</Text>
          </ImageBackground>
          {/*Divider between Top Image and Sidebar Option*/}
          
          {/*Setting up Navigation Options from option array using loop*/}
          <View style={{ width: '100%' }}>
            {this.items.map((item, key) => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingTop: 10,
                  paddingBottom: 10,
                  
                }}
                key={key}>
                <View style={{ marginRight: 10, marginLeft: 20 }}>
                  <Icon name={item.navOptionThumb} size={25} color="#808080" />
                </View>
                <Text
                  style={{
                    fontSize: 15,
                    
                  }}
                  onPress={() => {

                     if(item.screenToNavigate === 'Login'){
                          AsyncStorage.clear();
                         
                     }
                   
                    this.props.navigation.navigate(item.screenToNavigate,{EW:this.state.email});

                  }}>
                  {item.navOptionName}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      );
    }
  }
  const styles = StyleSheet.create({
    sideMenuContainer: {
      width: '100%',
      height: '100%',
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop: 20,
    },
    sideMenuProfileIcon: {
      width: 80,
      height: 80,
      marginTop: 20,
      borderRadius: 40,
      borderWidth : 3 ,
      borderColor : '#fff',
      
      
    },
    name1 : {
        color: '#fff',
        fontSize : 20 ,
        fontWeight : "800" ,
        marginVertical :8 ,

    }
  });
  export default  CustomSidebarMenu;