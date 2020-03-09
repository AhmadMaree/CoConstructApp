import React from 'react';

import {
  View,
  TouchableHighlight,
  Text,
} from 'react-native';


//cons line is for the red button 
const Line = ({ style, onPress }) => {
  if (onPress) {
    return (
      <TouchableHighlight
        style={[
          {
            marginBottom: 10,
            borderRadius: 2,
          },
          style,
        ]}
        onPress={onPress}
      >

        <View style={{justifyContent:"center",alignItems:"center"}}>
        <Text color = "#000" style={{marginTop:3}}>Info</Text>
        </View>
       
      </TouchableHighlight>
    );
  }

// this for the places of second page 
  return (
    <View
      style={[
        {
          marginBottom: 10,
        },
        style,
      ]}
    >
      
      </View>
  );
};

//this const is for the three line in the secon page
const ThinLine = ({ color, width = 60 , height=10, ...props }) => (
  <Line
    style={{
      width,
      backgroundColor: color,
      height, 
    }}
    {...props}
  />
);


//this for the black line 
const ThickLine = ({ color, width = 70, ...props }) => (
  <Line
    style={{
      width,
      backgroundColor: color,
      height: 20,
      
    }}
    {...props}
  />
);

export const ThinGrayLine = (props) => (
  <ThinLine color={'#BDC2C9'} {...props} />
);

export const ThickGrayLine = (props) => (
  <ThickLine color={'#BDC2C9'} {...props} />
);

export const ThickWhiteLine = (props) => (
  <ThickLine color={'#FFFFFF'} {...props} />
);

export const ThickDarkGrayLine = (props) => (
  <ThickLine color={'#33373B'} {...props} />
);

export const ThinRedLine = (props) => (
  <ThinLine color={'#7BB062'} {...props} />
);