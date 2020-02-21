import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, ImageBackground } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ScrollView } from 'react-native-gesture-handler';



 class CustomSidebarMenu extends Component {
    constructor() {
      super();
      
      this.proileImage =
        '../Images/profil-image.png';
      
      this.items = [
        {
          navOptionThumb: 'home',
          navOptionName: 'Home',
          screenToNavigate: 'Stages',
        },
        {
          navOptionThumb: 'account-edit',
          navOptionName: 'EditProfile',
          screenToNavigate: 'Profile',
        },
        {
          navOptionThumb: 'logout-variant',
          navOptionName: 'Logout',
         screenToNavigate: 'Login',
        },
      ];
    }
    render() {
      return (
        <ScrollView >
           <ImageBackground source={require('../Images/green.jpg')} style={{width:undefined, padding :32 ,paddingTop:48}}> 
           <Image
            source={require('../Images/profil-image.png')}
            style={styles.sideMenuProfileIcon}/> 
            <Text style={styles.name1}>Nafe Hammad</Text>
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
                    
                    this.props.navigation.navigate(item.screenToNavigate);
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