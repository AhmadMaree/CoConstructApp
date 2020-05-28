import React, { Component } from 'react';
import Icon from "react-native-vector-icons/MaterialIcons";
import BackIcon from "react-native-vector-icons/Ionicons";
import { Header, Left, Body, Right } from 'native-base';

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    ToastAndroid,
} from 'react-native'



export default class HeaderSendNotification extends Component {
    constructor(props) {
        super(props)

        this.state = {
            notSentYet: true,
            img_name: this.props.img_name,
            img_description: this.props.img_description,
            sender_token: this.props.sender_token,
            username: this.props.username
            
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            img_name: nextProps.img_name,
            img_description: nextProps.img_description,
            sender_token: nextProps.sender_token,
            username: nextProps.username,
        })
    }

    closeClick = () => {
        // to detect number of times close button is pressed
       this.props.Nav.goBack();
    };

   


    checkSend = () => {
        if (String(this.state.img_name).trim() !== '' &&
            String(this.state.img_description).trim() !== '') {
            console.log(this.state.username)
            this.sendNotification()
        }
    }

    sendNotification = () => {  
        var data = JSON.stringify({
            "to": this.state.sender_token,
            "content_available": true,
            "notification": {
                "title": "Hi " + this.state.username,
                "body": "You've Recive massage from office",
                "sound": "default",
                "icon": "logo"
            },
            "data": {
                "name": this.state.img_name,
                "description": this.state.img_description
            }
        });

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });

        xhr.open("POST", "https://fcm.googleapis.com/fcm/send");
        xhr.setRequestHeader("content-type", "application/json");
        xhr.setRequestHeader("authorization", "key=AIzaSyDZHylej3wjHt1y8L_3InntLUptJWMPZI8");
        xhr.setRequestHeader("cache-control", "no-cache");
        xhr.setRequestHeader("postman-token", "b6fe8a19-d390-5e0a-b701-e9d1a2eb3ad1");

        xhr.send(data);
        ToastAndroid.show("Response Sent!", ToastAndroid.SHORT)
        this.setState({ notSentYet: false })
    }

    
    render() {
        console.log(this.state.sender_token)
        return (
            <Header style={{ backgroundColor: '#7BB062' }}
                iosBarStyle='light-content'
                androidStatusBarColor='#1c313a' >
                    <Left>
                    <TouchableOpacity
                            onPress={() => this.closeClick()}>
                            <BackIcon
                                name="md-arrow-back"
                                style={styles.icon} />
                        </TouchableOpacity>
                        </Left>
                <Body>
                    <Text style={styles.headerText}>Incoming Message</Text>
                </Body>
                <Right>
                    {this.state.notSentYet ?
                        <TouchableOpacity
                            onPress={() => this.checkSend()}>
                            <Icon
                                name="send"
                                style={styles.icon} />
                        </TouchableOpacity> :
                        null
                    }
                </Right>
            </Header>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        color: '#fff',
        fontSize: 20,
        marginLeft: 10,
        marginRight: 10,
    },
    headerText: {
        color: '#fff',
        fontSize: 18
    }
});