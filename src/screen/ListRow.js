import React, { Component } from 'react';

import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import Row from './Row';
import { FlatList } from 'react-native-gesture-handler';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;


export default class ListRow extends Component { 

    constructor(props) {
        super(props);
    
        this.state = {
          item : [],
          num : 0 
        };
      }
 
    componentDidMount(){
        fetch("http://192.168.1.103:8088/get_all_Office/").then(results=>results.json())
        .then(results=>this.setState({'item' :results.response  
        }))
    }
    

    renderItem=({item}) => {

        return (
            <Row zIndex={100}
                AD = {item.AD}
                EN={item.EN}
                ON ={item.ON}
                PN = {item.PN}
                EM = {item.EM}
                FA ={item.FA}
                TE = {item.TE}
                photo= {item.photo}
            />



        );


    }
 render(){
     return(

        <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <ScrollView
          style={styles.scrollView}
        >
            <FlatList 
              data={this.state.item}
              renderItem={this.renderItem}
       />
        </ScrollView>
      </View>

     );
 }
}
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollView: {
      backgroundColor: '#4A637D',
      flex: 1,
      padding: 10,
      paddingTop: STATUSBAR_HEIGHT,
    },
  });
  