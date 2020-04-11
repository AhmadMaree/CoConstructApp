import React, { Component } from 'react';
import HeaderIncomingNotification from '../components/HeaderSendNotification';
import {
    View,
    Image,
    BackHandler,
    TextInput,
    Dimensions,
    StyleSheet,
    ScrollView
} from 'react-native';

export default class SendNotification extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sender_token: this.props.navigation.state.params.token,
            username: this.props.navigation.state.params.username,
            img_name: '',
            img_description: '',
        }
    }

    render() {
        
        return (
            <View>
                <HeaderIncomingNotification
                    sender_token={this.state.sender_token}
                    username={this.state.username}
                    img_name={this.state.img_name}
                    img_description={this.state.img_description}
                    Nav ={this.props.navigation} />
                <ScrollView>
                   
                    <View style={{ padding: 10 }}>
                        <TextInput
                            placeholder={"Titel"}
                            style={styles.name}
                            onChangeText={(text) => this.setState({ img_name: text })}
                            value={this.state.img_name}
                        />
                        <TextInput
                            multiline={true}
                            numberOfLines={5}
                            placeholder={"Description"}
                            style={styles.description}
                            onChangeText={(text) => this.setState({ img_description: text })}
                            value={this.state.img_description}
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    name: {
        borderColor: 'rgba(0,0,0, 0.7)',
        borderWidth: 0.4,
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: 'rgba(0,0,0, 0.7)',
        marginTop: 10,
    },
    description: {
        borderColor: 'rgba(0,0,0, 0.7)',
        borderWidth: 0.4,
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: 'rgba(0,0,0, 0.7)',
        marginTop: 10,
        marginBottom: 50
    },
});


