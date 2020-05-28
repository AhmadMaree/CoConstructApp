
import Login from './login';
import Splash from './Splash';

import Signup from './Signup';
import Drawer from './Drawer';
import Stages from './Stages';
import Admin from './Admin';
import Requrmint from './Requrmint';


import { createAppContainer , createSwitchNavigator} from 'react-navigation'

import { createStackNavigator, HeaderBackButton} from 'react-navigation-stack';
import Profile from './Profile';
import { State } from 'react-native-gesture-handler';
import Changepassword from './Changepassword';
import Feedback from './Feedback';
import Officeadd from './Officeadd';
import AddWorker from './Addworker';
import Officerpage from './Officerpage';
import Booking from './Booking';
import Row from './Row';
import ShowBooking from './ShowBooking';
import DeleteOffice from './DeleteOffice';
import DeleteWorker from './DeleteWorker';
import SendNotification from './sendNotification';
import ReceiveNotification from './receiveNotification';
import  Updateoffice from './UpdateOffice';
import UpdatePageWorker from './UpdatePageWorker';
import Forgot from './ForgotPassword';
import EditUserName from './EditUserName';
import AdminFeedBack from './AdminFeedBack';
import Addsurvey from './Addsurvey';
import Deletesurvey from './Deletesurvey';
import Updateser from './Updateser';
import CatagoryWorker from './CatagoryWorker';
import Work1 from './Work';
import Mapss from './Mapsworker'
const AuthStackAdmin = createStackNavigator({
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
    Admin :{
        screen : Admin,
        navigationOptions: {
            header: null
        },
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
    },
    DeleteOffice :{
        screen : DeleteOffice ,
        navigationOptions:{
            title : 'Modify Office',
            headerStyle : {
                backgroundColor : '#7BB062',
            },
            headerTintColor : '#fff',
        }
    },
    DeleteWorker :{
        screen : DeleteWorker ,
        navigationOptions:{
            title : 'Modify Worker',
            headerStyle : {
                backgroundColor : '#7BB062',
            },
            headerTintColor : '#fff',
        }
    },
    Updateoffice :{
        screen : Updateoffice ,
        navigationOptions:{
            title : 'Update Office',
            headerStyle : {
                backgroundColor : '#7BB062',
            },
            headerTintColor : '#fff',
        }
    },
    UpdatePageWorker :{
        screen : UpdatePageWorker ,
        navigationOptions:{
            title : 'Update Worker',
            headerStyle : {
                backgroundColor : '#7BB062',
            },
            headerTintColor : '#fff',
        }
    },
    Forgot :{
        screen : Forgot ,  
        navigationOptions:{
            title : 'ForgotPassWord',
            headerStyle : {
                backgroundColor : '#7BB062',
            },
            headerTintColor : '#fff',
        }
    },
    AdminFeedBack :{
        screen : AdminFeedBack ,  
        navigationOptions:{
            title : 'FeedBack From User',
            headerStyle : {
                backgroundColor : '#7BB062',
            },
            headerTintColor : '#fff',
        }
    },
    Addsurvey :{
        screen : Addsurvey ,  
        navigationOptions:{
            title : 'Addsurvey',
            headerStyle : {
                backgroundColor : '#7BB062',
            },
            headerTintColor : '#fff',
        }
    },
    Deletesurvey :{
        screen : Deletesurvey ,  
        navigationOptions:{
            title : 'Deletesurvey',
            headerStyle : {
                backgroundColor : '#7BB062',
            },
            headerTintColor : '#fff',
        }
    },
    Updateser :{
        screen : Updateser ,
        navigationOptions:{
            title : 'Update Servey',
            headerStyle : {
                backgroundColor : '#7BB062',
            },
            headerTintColor : '#fff',
        }
    },
    

  });

  const AuthStackOffice = createStackNavigator({
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
    Officerpage :{
        screen : Officerpage ,
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
    ShowBooking : {
        screen : ShowBooking ,
        navigationOptions :{
            title: 'Booking',
            headerStyle : {
                backgroundColor : '#7BB062',
            },
            headerTintColor : '#fff',
        }
    },
    SendNotification: {
        screen :SendNotification ,
        navigationOptions: {
            header: null
        },
    },
    ReceiveNotification :{
        screen : ReceiveNotification ,  
        navigationOptions: {
            header: null
        },
    },
    Forgot :{
        screen : Forgot ,  
        navigationOptions:{
            title : 'ForgotPassWord',
            headerStyle : {
                backgroundColor : '#7BB062',
            },
            headerTintColor : '#fff',
        }
    }

    

  });
  const AuthStackUser = createStackNavigator({
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
    Stages :{
        screen :Stages
    },
    Booking:{
        screen :Booking ,
        navigationOptions:{
            title : 'Booking Information',
            headerStyle : {
                backgroundColor : '#7BB062',
            },
            headerTintColor : '#fff',
        }
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
        SendNotification: {
            screen :SendNotification ,
            navigationOptions: {
                header: null
            },
    
        },
        ReceiveNotification :{
            screen : ReceiveNotification ,  
            navigationOptions: {
                header: null
            },
        },
        Forgot :{
            screen : Forgot ,  
            navigationOptions:{
                title : 'ForgotPassWord',
                headerStyle : {
                    backgroundColor : '#7BB062',
                },
                headerTintColor : '#fff',
            }
        },
        EditUserName : {
            screen : EditUserName,
            navigationOptions : {
                title: 'ChangeUserName',
                headerStyle: {
                backgroundColor: '#7BB062',
                },
                headerTintColor: '#fff',
            }
        },
        Work1 : {
            screen : Work1,
            navigationOptions:{
                title : 'Workers',
                headerStyle : {
                    backgroundColor : '#7BB062',
                },
                headerTintColor : '#fff',
            }
        },
        Mapss : {
            screen : Mapss,
            navigationOptions:{
                title : 'Map',
                headerStyle : {
                    backgroundColor : '#7BB062',
                },
                headerTintColor : '#fff',
            }
        },
    
        
    
  });



const AppNavigator = createStackNavigator({
    //Screens   
    Splash: {
        screen: Splash,
        navigationOptions: {
            header: null
        },
    },
    Stages :{
        screen :Stages
    },
    Profile : {
        screen : Profile,
       
    },
    Drawer : {
        screen : Drawer ,
        navigationOptions: {
            header: null
        },
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
    Booking:{
            screen :Booking ,
            navigationOptions:{
                title : 'Booking Information',
                headerStyle : {
                    backgroundColor : '#7BB062',
                },
                headerTintColor : '#fff',
            }
    },
   
    SendNotification: {
        screen :SendNotification ,

    },
    ReceiveNotification :{
        screen : ReceiveNotification ,  
    },
    Forgot :{
        screen : Forgot ,  
        navigationOptions:{
            title : 'ForgotPassWord',
            headerStyle : {
                backgroundColor : '#7BB062',
            },
            headerTintColor : '#fff',
        }
    }, 
    Work1 : {
        screen : Work1,
        navigationOptions:{
            title : 'Workers',
            headerStyle : {
                backgroundColor : '#7BB062',
            },
            headerTintColor : '#fff',
        }
    },
    Officerpage :{
        screen : Officerpage ,
        navigationOptions: {
            header: null
        },
       
    },
    Mapss : {
        screen : Mapss,
        navigationOptions:{
            title : 'Map',
            headerStyle : {
                backgroundColor : '#7BB062',
            },
            headerTintColor : '#fff',
        }
    },

},
  {
    //settings
    initialRouteName: 'Splash' ,
    //headerMode : 'none'
    

})





const switchNav = createSwitchNavigator({
    route1: AuthStackAdmin,
route2: AuthStackOffice,
route3: AuthStackUser,

    route4: AppNavigator
  })


export default createAppContainer(switchNav);