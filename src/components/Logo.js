import React,{Component} from 'react';
import * as Animatable from 'react-native-animatable';
import {
 StyleSheet,
Text,
View,
Image

}from 'react-native';

export default class Logo extends Component 

{
render(){
    return (
        <View style={formStyles.container}>
          <Animatable.View animation="zoomIn" iterationCount={1} easing="ease-out"> 
            <Image source={require('../Images/logo1.png')}
            style={{width: 150, height: 160}} />
            </Animatable.View>
            
        </View> 
    );
}
}

const formStyles=StyleSheet.create({
    container:{
        flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems:'center'
    }
});