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
import Ip from './Ip';
export default class Playground extends Component{
    state={
        markers:[],
        item2:[],
        emailEw: '',
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
        const {Name} = this.props.navigation.state.params;
        this.state.emailEw= Name;
       fetch('http://'+Ip.ip+':8088/get_all_Maps/'+this.state.emailEw).then(results=>results.json())
       .then(results=>this.setState({'item2':results.response,'len':results.length}));
    }

    onCarouselItemChange=(index)=>{
 
    let location=this.state.item2[index];

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
          <Image style={styles.imagecard} source={{uri:encodeURI('http://'+Ip.ip+':8088/load_image1?img=' + `${item.photo}`)}}/>
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
       
          {
             this.state.item2.map((marker,index)=>(
                 <Marker
                 key={marker.name}
                 ref={ref=>this.state.markers[index]= ref}
                 coordinate={{latitude:marker.latitude,longitude:marker.longitude}}
                 title={marker.name}
                 >
                <Callout >
                  
                 <Text>{marker.name}</Text>
                  
                  </Callout>
                  


                 </Marker>
             ))
            }
     </MapView>

     <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.item2}
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
    imagecard1:{
        height:100,
        width:100,
        
   
       },

    textcard:{
      color:'white',
      fontSize:22,
      alignSelf:'center'

    }


});