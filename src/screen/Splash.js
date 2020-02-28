import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    Animated,
    StatusBar
  
  } from 'react-native';

  export default class Splash extends Component{
    
  
    state= {
        logoAnim : new Animated.Value(0),
        //loadingProgess : false ,
    }


    

   async componentDidMount(){
        const {logoAnim}=this.state;
        Animated.sequence([
            Animated.timing(logoAnim,{
                toValue :1 ,
                tension :10 ,
                friction :2,
                duration : 1000,
               

            }),

        ]).start(() => {
          this.props.navigation.navigate("Login")           

        });
    }
    render(){
    return (
        
      <View style={formStyles.connt}>
        
            <StatusBar backgroundColor='#1c313a' barStyle='light-content'>
            </StatusBar>
            
                
           <Animated.Image source={require('../Images/logo1.png')}
             style={{
               opacity :this.state.logoAnim ,
               top : this.state.logoAnim.interpolate({
                   inputRange : [0 ,1] ,
                   outputRange : [80 ,0] , 
                

               }),
               
               width: 150, height: 160 ,
             }}>

              
             </Animated.Image>
             
            
      </View>
     );
    };
  }
 
 /* const RootStack = createStackNavigator({
    //home: {screen: HomeScreen},  
    log: {screen: Login},
    singup: {screen : Signup},
    splash : {screen : Splash},
  
  },
  {defaultNavigationOptions: {
    header: null
  }, 
    
  });
  
  export default createAppContainer(RootStack);*/
  
  const formStyles = StyleSheet.create({
      connt: {
        
        backgroundColor: '#455a64',
        flex: 1,
        alignItems :'center',
        justifyContent:'center' 
       

      },
    


  });
 