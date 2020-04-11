import React, { Component } from 'react';
import BackIcon from "react-native-vector-icons/Ionicons";
import { Header, Left, Body, Right } from 'native-base';

import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native'

let closePressed = 0
export default class HeaderReceiveNotification extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isUpdating: false,
            
            
        }
    }

    


    closeClick = () => {
        // to detect number of times close button is pressed
       this.props.Nav.goBack();
    };
    
    render() {
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
                    <Text style={styles.headerText}>Message From OFFice</Text>
                </Body>
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