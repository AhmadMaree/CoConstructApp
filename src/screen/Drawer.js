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
import Requrmint from './Requrmint';
import Feedback from './Feedback'
import ListRow from './ListRow';
import Work from './Work';
import Map from './Map';
import Survey from './Survey';
import CatagoryWorker from './CatagoryWorker';

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
    First5: {
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
    First1: {
      screen: Profile,
      navigationOptions: ({ navigation }) => ({
        title: 'Profile',
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
  const ForActivity_StackNavigator = createStackNavigator({
    //All the screen from the Screen1 will be indexed here
    First: {
      screen: Requrmint,
      navigationOptions: ({ navigation }) => ({
        title: 'Requrmint',
        headerLeft: <Drawer navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#7BB062',
        },
        headerTintColor: '#fff',
      }),
    },
   
  });

  const FifActivity_StackNavigator = createStackNavigator({
    //All the screen from the Screen1 will be indexed here
    First3: {
      screen: ListRow,
      navigationOptions: ({ navigation }) => ({
        title: 'Engineering Office',
        headerLeft: <Drawer navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#7BB062',
        },
        headerTintColor: '#fff',
      }),
    },
   
  });

  const SixActivity_StackNavigator = createStackNavigator({
    //All the screen from the Screen1 will be indexed here
    First2: {
      screen: Feedback,
      navigationOptions: ({ navigation }) => ({
        title: 'Feedback',
        headerLeft: <Drawer navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#7BB062',
        },
        headerTintColor: '#fff',
      }),
    },
   
  });

  const SevActivity_StackNavigator = createStackNavigator({
    //All the screen from the Screen1 will be indexed here
    First4: {
      screen: Work,
      navigationOptions: ({ navigation }) => ({
        title: 'Worker',
        headerLeft: <Drawer navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#7BB062',
        },
        headerTintColor: '#fff',
      }),
    },
   
  });

  const eiActivity_StackNavigator = createStackNavigator({
    //All the screen from the Screen1 will be indexed here
    Firstt: {
      screen: Map,
      navigationOptions: ({ navigation }) => ({
        title: 'Map',
        headerLeft: <Drawer navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#7BB062',
        },
        headerTintColor: '#fff',
      }),
    },
   
  });
  const ei1Activity_StackNavigator = createStackNavigator({
    //All the screen from the Screen1 will be indexed here
    Firsttt: {
      screen: Survey,
      navigationOptions: ({ navigation }) => ({
        headerLeft: <Drawer navigationProps={navigation} />,
        title: 'Survey Engineering',
        headerStyle: {
          backgroundColor: '#7BB062',
        },
        headerTintColor: '#fff',
      }),
    },
   
  });
  const e4Activity_StackNavigator = createStackNavigator({
    //All the screen from the Screen1 will be indexed here
    Ca: {
      screen: CatagoryWorker,
      navigationOptions: ({ navigation }) => ({
        headerLeft: <Drawer navigationProps={navigation} />,
        title: 'Catagory',
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
          drawerLabel: 'Profile',
        },
      },

      Logout: {
        //Title
        screen: ThrActivity_StackNavigator,
        navigationOptions: {
          drawerLabel: 'Logout',
        },
      },

      Requrmint: {
        //Title
        screen: ForActivity_StackNavigator,
        navigationOptions: {
          drawerLabel: 'Requrmint',
        },
      },
      ListRow: {
        //Title
        screen: FifActivity_StackNavigator,
        navigationOptions: {
          drawerLabel: 'Engineering Office ',
        },
      },
      Feedback: {
        //Title
        screen: SixActivity_StackNavigator,
        navigationOptions: {
          drawerLabel: 'Feedback ',
        },
      },
      Work: {
        //Title
        screen: SevActivity_StackNavigator,
        navigationOptions: {
          drawerLabel: 'Worker ',
        },
      },
      Map: {
        //Title
        screen: eiActivity_StackNavigator,
        navigationOptions: {
          drawerLabel: 'Map For Office Eng ',
        },
      },
      Survey: {
        //Title
        screen: ei1Activity_StackNavigator,
        navigationOptions: {
          
        },
      },
      CatagoryWorker: {
        //Title
        screen: e4Activity_StackNavigator,
        navigationOptions: {
          drawerLabel: 'Catagory',
        },
      }


  },
  {
        //For the Custom sidebar menu we have to provide our CustomSidebarMenu
       
        contentComponent:props => <CustomSidebarMenu {...props} />,
        //Sidebar width
        drawerWidth: Dimensions.get('window').width - 130,
        hideStatusBar  : true 
         
      });
   
export default createAppContainer(DrawerNavigator);