import React, { Component } from 'react';
import HeaderReceiveNotification from '../components/HeaderReceiveNotification';
import {Container,Header,Body,Title,Card,CardItem,Left,Right,Content,Grid, Thumbnail, Subtitle}from 'native-base'
import {
    View,
    Image,
    BackHandler,
    Text,
    Dimensions,
    StyleSheet,
    ScrollView
} from 'react-native';

let backPressed = 0;
export default class ReceiveNotification extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
            img_name: this.props.navigation.state.params.img_name,
            img_description: this.props.navigation.state.params.img_description,
        }
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
       
    }

    componentWillUnmount() {
        console.disableYellowBox = true
        backPressed = 0;
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton() {
        // to detect number of times back button is pressed
        backPressed++;
        return true;
    }

    render() {
        return (
            <View>
                <HeaderReceiveNotification
                Nav = {this.props.navigation}
                   />
                <ScrollView>
                    <View style={{ padding: 10 }}>
                       
                                <Title style={styles.text1}>
                                    {this.state.img_name}
                                </Title>
                                <Text style={styles.text}>
                                    {this.state.img_description}
                                </Text>
                       
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
    text: {
        borderColor: 'rgba(0,0,0, 0.7)',
        borderWidth: 0.4,
        borderRadius: 25,
        padding: 16,
        fontSize: 30,
        color: 'rgba(0,0,0, 0.7)',
        marginTop: 10,
    },
    text1: {
        borderColor: 'rgba(0,0,0, 0.7)',
        borderWidth: 0.4,
        borderRadius: 25,
        padding: 45,
        fontSize: 30,
        color: 'rgba(0,0,0, 0.7)',
        marginTop: 10,
    }
}); 