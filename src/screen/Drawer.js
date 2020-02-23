import React,{Component} from 'react';
import { createDrawerNavigator} from 'react-navigation-drawer';
import { createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';


import {
  
  StyleSheet,
  
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  Dimensions,
  BackHandler
} from 'react-native';
import Stages from './Stages';
import Profile from './Profile';
import CustomSidebarMenu from '../components/CustomSidebarMenu';
import Login from './login';



class Drawer extends Component {



  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
   }
       
   componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
   }
       
   handleBackButton() {
           //BackHandler.exitApp();
           return true;
   }
    //Structure for the navigatin Drawer
    toggleDrawer = () => {
      //Props to open/close the drawer
      this.props.navigationProps.toggleDrawer();
    };
    render() {
      return (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
            {/*Donute Button Image */}
            <Image
              source={require('../Images/drawer.png')}
              style={{ width: 25, height: 25, marginLeft: 5 }}
            />
          </TouchableOpacity>
        </View>
        
      );
    }
  }
  const FirstActivity_StackNavigator = createStackNavigator({
    //All the screen from the Screen1 will be indexed here
    First: {
      screen: Stages,
      navigationOptions: ({ navigation }) => ({
        title: 'Co Construct',
        headerLeft: <Drawer navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#7BB062',
        },
        headerTintColor: '#fff',
      }),
    },
   
  });
  const SecActivity_StackNavigator = createStackNavigator({
    //All the screen from the Screen1 will be indexed here
    First: {
      screen: Profile,
      navigationOptions: ({ navigation }) => ({
        title: 'EditProfile',
        headerLeft: <Drawer navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#7BB062',
        },
        headerTintColor: '#fff',
      }),
    },
   
  });



  const ThrActivity_StackNavigator = createStackNavigator({
    //All the screen from the Screen1 will be indexed here
    First: {
      screen: Login,
      navigationOptions: ({ navigation }) => ({
        title: 'Logout',
        headerLeft: <Drawer navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#7BB062',
        },
        headerTintColor: '#fff',
      }),
    },
   
  });
 
 

  const DrawerNavigator = createDrawerNavigator({
    //Drawer Optons and indexing
    Stages: {
      //Title
      screen: FirstActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Home',
      },
    },
    Profile: {
        //Title
        screen: SecActivity_StackNavigator,
        navigationOptions: {
          drawerLabel: 'EditProfile',
        },
      },

      Logout: {
        //Title
        screen: ThrActivity_StackNavigator,
        navigationOptions: {
          drawerLabel: 'Logout',
        },
      },

     


  },
    {
        //For the Custom sidebar menu we have to provide our CustomSidebarMenu
       
        contentComponent: CustomSidebarMenu,
        //Sidebar width
        drawerWidth: Dimensions.get('window').width - 130,
        hideStatusBar  : true 
         
      }
  );
   
  export default createAppContainer(DrawerNavigator);