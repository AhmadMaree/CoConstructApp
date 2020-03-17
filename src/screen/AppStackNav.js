
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
import Changepassword from './Changepassword';
import Feedback from './Feedback';
import Officeadd from './Officeadd';
import AddWorker from './Addworker';

const AppNavigator = createStackNavigator({
    //Screens   
    Splash: {
        screen: Splash,
        navigationOptions: {
            header: null
        },
    },
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        },

    },
    Drawer : {
        screen : Drawer ,
        navigationOptions: {
            header: null
        },
    },
    singup : {
        screen : Signup ,
        navigationOptions: {
            header: null
        },
    },
    Admin :{
        screen : Admin,
        navigationOptions: {
            header: null
        },
    },
    Profile : {
        screen : Profile,
       
    },
    Changepassword : {
            screen : Changepassword,
            navigationOptions : {
                title: 'ChangePassword',
                headerStyle: {
                backgroundColor: '#7BB062',
                },
                headerTintColor: '#fff',
            }
    },
    Feedback : {
        screen : Feedback
    },
    Officeadd : {
        screen : Officeadd,
        navigationOptions:{
            title : 'Insert Office',
            headerStyle : {
                backgroundColor : '#7BB062',
            },
            headerTintColor : '#fff',
        }
    },
    AddWorker: {
        screen : AddWorker,
        navigationOptions:{
            title : 'Insert Worker',
            headerStyle : {
                backgroundColor : '#7BB062',
            },
            headerTintColor : '#fff',
        }
    }
},
  {
    //settings
    initialRouteName: 'Splash' ,
    //headerMode : 'none'
    

})

export default createAppContainer(AppNavigator);