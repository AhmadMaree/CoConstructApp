import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image,
  Dimensions,
  Platform

} from 'react-native';
import MapView,{PROVIDER_GOOGLE,Marker,Callout,Polygon} from 'react-native-maps';
import Carousel from 'react-native-snap-carousel';
import Geolocation from '@react-native-community/geolocation';
import {request,PERMISSIONS} from 'react-native-permissions';

export default class Playground extends Component{
    state={
        markers:[],
    coordinates:[
        {name: 'Matian and Khatib Engineering', latitude:31.89964,longitude: 35.20422,image:require('../Images/bd1.jpg')},
        {name: 'Kalbouneh Engineering Office', latitude:32.23999889,longitude: 35.5100140399,image:require('../Images/office1.jpg')},
        {name: 'Thika Engineering office', latitude:32.462421,longitude: 35.296851,image:require('../Images/bd.jpg')},
    ]
    };


    requestLocationPermission = async ()=> {
       
            var response= await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
            console.log('android :'+response);
            if(response==='granted'){
                this.locateCurrentPosition();
            }

          

    };

    componentDidMount(){
       this.requestLocationPermission();
    }

    onCarouselItemChange=(index)=>{
 
    let location=this.state.coordinates[index];

       this._map.animateToRegion({
       latitude:location.latitude,
       longitude:location.longitude,
       latitudeDelta:0.09,
       longitudeDelta:0.35


    })

       this.state.markers[index].showCallout();

        };

    locateCurrentPosition=() => {
        Geolocation.getCurrentPosition(
          position=>{
              console.log(JSON.stringify(position));

               let initialPosition={
                latitude:position.coords.latitude,
                longitude:position.coords.longitude,
                latitudeDelta:0.09,
                longitudeDelta:0.35
                }
                    this.setState({initialPosition})

              }
        )
 }
    
    renderCarouselItem=({item})=>
          <View style={styles.contcard}>
          <Text style={styles.textcard}> {item.name}</Text>
          <Image style={styles.imagecard} source={item.image}/>
          </View>


  render(){
   return(
       <View style={styles.cont}>
    <MapView
    provider={PROVIDER_GOOGLE}
    ref={map=>this._map=map}
    showsUserLocation={true}
    style={styles.map}
    initialPosition={this.state.initialPosition} >
        <Polygon
        coordinates={this.state.coordinates}
        fillColor={'rgba(100,100,200,0.3)'}
        />
         
          {
             this.state.coordinates.map((marker,index)=>(
                 <Marker
                 key={marker.name}
                 ref={ref=>this.state.markers[index]= ref}
                 coordinate={{latitude:marker.latitude,longitude:marker.longitude}}
                 title={marker.name}
                 >
               <Callout>
              
                    <Text> {marker.name}</Text>
               </Callout>
               


                 </Marker>
             ))
            }
     </MapView>

     <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.coordinates}
              containerCustomStyle={styles.cursol}
              renderItem={this.renderCarouselItem}
              sliderWidth={Dimensions.get('window').width}
              itemWidth={300}
              removeClippedSubviews={false}
              onSnapToItem={(index)=>this.onCarouselItemChange(index)}

              
            />
       

      </View>


   );

  }

};

const styles = StyleSheet.create({
    
    cont:{
        ...StyleSheet.absoluteFillObject

    },


    map:{
       ...StyleSheet.absoluteFillObject
    },
    cursol:{
      position:'absolute',
      bottom:0,
      marginBottom:48

    },
    contcard:{
     backgroundColor:'rgba(0,0,0,0.6)',
     height:200,
     width:300,
     padding:24,
     borderRadius:24

    },

    imagecard:{
     height:120,
     width:300,
     bottom:0,
     position:'absolute',
     borderBottomLeftRadius:24,
     borderBottomRightRadius:24

    },

    textcard:{
      color:'white',
      fontSize:22,
      alignSelf:'center'

    }


});