
import Login from './login';
import Splash from './Splash';

import Signup from './Signup';
import Drawer from './Drawer';
import Stages from './Stages';
import Admin from './Admin';
import Requrmint from './Requrmint';


import { createAppContainer} from 'react-navigation'

import { createStackNavigator } from 'react-navigation-stack';
import Profile from './Profile';
import { State } from 'react-native-gesture-handler';




const AppNavigator = createStackNavigator({
    //Screens   
    Splash: {
        screen: Splash
    },
    Login: {
        screen: Login

    },
    singup : {
        screen : Signup 
    },
    Drawer : {
        screen : Drawer 
    },
    Stages : {
        screen : Stages
    },
    Profile :{
        screen: Profile
    },
    Requrmint :{
        screen : Requrmint
    },
    Admin :{
        screen : Admin
    },
   
},
  {
    //settings
    initialRouteName: 'Splash' ,
    headerMode : 'none'
    

})

export default createAppContainer(AppNavigator);