import React, {
  Component,
} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import FoldView from 'react-native-foldview';

import ProfileDetailCard from './ProfileDetailCard';
import AdditionalInfoCard from './AdditionalInfoCard';

export default class Row extends Component {
  constructor(props) {
    super(props);
  }

/*  */

  componentWillMount() {
    this.renderBackface = this.renderBackface.bind(this);
    this.renderInnerBackFace = this.renderInnerBackFace.bind(this);
  }

  renderBlankFace() {
    return (
      <View
        style={{
          backgroundColor: '#D6EFFF',
          flex: 1,
        }}
      />
    );
  }

  renderBackface() {
    const onPress = this.props.onPress;
    return (
      <View style={{ flex: 1 }}>

        <FoldView
          renderFrontface={this.renderBlankFace}
          renderBackface={this.renderInnerBackFace}
        >
          <AdditionalInfoCard onPress={onPress} />
        </FoldView>

      </View>
    );
  }

  renderInnerBackFace() {
    const onPress = this.props.onPress;
    return (
      <View
        style={{
          backgroundColor: '#fff',
          flex: 1,
          borderTopWidth: StyleSheet.hairlineWidth,
          borderTopColor: '#BDC2C9',
          borderBottomLeftRadius: 2,
          borderBottomRightRadius: 2,
        }}
      >
        <View
          style={{
            backgroundColor: '#FFBD18',
            flex: 1,
            margin: 14,
            borderRadius: 2,
          }}
        >
          <TouchableHighlight
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={onPress}
          >
            <Text>
              PRESS ME
            </Text>
          </TouchableHighlight>

        </View>
      </View>
    );
  }

  render() {
    const onPress = this.props.onPress;

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#D4D9D9',
          flexDirection: 'column',
        }}
      >

        <View style={{ flex: 1 }} >

          <View
            style={{
              flex: 1,
              paddingBottom: 10,
              padding: 5,
            }}
          >

          <Text style={{fontFamily:'Bellota-LightItalic',marginLeft:50}}> Jawwal:{this.props.PN}</Text>
           
           
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
               
              }}
            >
              
              <TouchableOpacity onPress={onPress} style={{  width: 40,
  height: 40,
  marginLeft: 8,
alignItems:'center',
  //backgroundColor: '#7BB062',
  marginTop:-20}} >
           <Icon name="arrow-up" size={25} color='#7BB062' style={{marginTop:12}} />
        </TouchableOpacity>
              

              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  marginTop:-10,
                  
                  
                }}
              >
                
              <Text style={{fontFamily:'Bellota-LightItalic',marginLeft:0}}> {this.props.EM}</Text>
              <Text style={{fontFamily:'Bellota-LightItalic',marginLeft:0}}> {this.props.FA}</Text>
              </View>

            </View>

          </View>

          <View style={{ flex: 1 }}>

            <FoldView
              renderFrontface={this.renderBlankFace}
              renderBackface={this.renderBackface}
            >
              <ProfileDetailCard  onPress={onPress}
                                 TE = {this.props.TE}
                                 AD = {this.props.AD}
              
              />
            </FoldView>

          </View>

        </View>

      </View>
    );
  }
}