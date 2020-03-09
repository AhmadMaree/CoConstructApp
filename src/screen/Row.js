import React, {
    Component,
  } from 'react';
  
  import {
    LayoutAnimation,
    UIManager,
    View,
    StyleSheet,
    Text,
    Image,
  } from 'react-native';
  import {
    ThinRedLine,
  } from './Lines';
  
    import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";
    import StarRating from 'react-native-star-rating';
    import FoldView from 'react-native-foldview';
    import Icon from "react-native-vector-icons/Entypo";
    import ProfileCard from './ProfileCard';
  
  // Enable LayoutAnimation on Android
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  
  const ROW_HEIGHT = 180;
  
  const Spacer = ({ height }) => (
    <View
      pointerEvents="none"
      style={{
        height,
      }}
    />
  );
  
  export default class Row extends Component {
  
    constructor(props) {
      super(props);
  
      this.state = {
        expanded: false,
        height: ROW_HEIGHT,
        generalStarCount: 3,
      };
    }
    onGeneralStarRatingPress(rating) {
      this.setState({
        generalStarCount: rating,
      });
    }
    componentWillMount() {
      this.flip = this.flip.bind(this);
      this.handleAnimationStart = this.handleAnimationStart.bind(this);
      this.renderFrontface = this.renderFrontface.bind(this);
      this.renderBackface = this.renderBackface.bind(this);
    }
  
    flip() {
      this.setState({
        expanded: !this.state.expanded,
      });
    }
  
    handleAnimationStart(duration, height) {
      const isExpanding = this.state.expanded;
  
      const animationConfig = {
        duration,
        update: {
          type: isExpanding ? LayoutAnimation.Types.easeOut : LayoutAnimation.Types.easeIn,
          property: LayoutAnimation.Properties.height,
        },
      };
  
      LayoutAnimation.configureNext(animationConfig);
  
      this.setState({
        height,
      });
    }
  
    renderFrontface() {
      return (
        <View style={styles.container1}>

        <View style={styles.leftPane}>
        <Image source={require('../Images/office1.jpg')} style={{width : "100%" , height : "100%", flex:1}} />
        </View>
    
        <View style={styles.rightPane}>
          <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text  style={{fontFamily :'Bellota-Bold'}}>Kalbouneh Engineering Office</Text>
           <Text  style={{fontFamily :'Bellota-Light'}} >Architect: Rouhi Kalbouneh</Text>
          </View>
          <View style={{alignContent :'center' , marginBottom : 5 , padding : 10 , width:45}}>
          <StarRating
                            disabled={false}
                            maxStars={5}
                            rating={this.state.generalStarCount}
                            emptyStarColor={'gold'}
                            fullStarColor={'gold'}
                            selectedStar={rating => this.onGeneralStarRatingPress(rating)} 
                            halfStarEnabled 
                            iconSet="Ionicons"
                            emptyStar="ios-star-outline"
                            fullStar="ios-star"
                            halfStar="ios-star-half"
                            starSize ={30}

                            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
            <ThinRedLine onPress={this.flip} width={80} height={30}  />
            </View>
    
            <View style={{ flex: 1 }}>
              <Text style={{fontFamily : 'Bellota-Bold'}}>Rating</Text>
              <View style={{flexDirection : 'row'}}>
              <Text style={{fontSize : 20,marginLeft:20}}>{this.state.generalStarCount}/5</Text>
              <Icon name={'star'} size={25} color={"#FFEB05"} style={{padding :2}}/>
              </View>
            </View>
          </View>
        </View>
    
      </View>
      );
    }
  
    renderBackface() {
      return (
        <ProfileCard onPress={this.flip} />
      );
    }
  
    render() {
      const { height } = this.state;
      const { zIndex } = this.props;
  
      const spacerHeight = height - ROW_HEIGHT;
  
      return (
        <View
          style={{
            flex: 1,
            zIndex,
          }}
        >
          <View
            style={{
              height: ROW_HEIGHT,
              margin: 10,
            }}
          >
            <FoldView
              expanded={this.state.expanded}
              onAnimationStart={this.handleAnimationStart}
              perspective={1000}
              renderBackface={this.renderBackface}
              renderFrontface={this.renderFrontface}
            >
             <View style={styles.container}>

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        backgroundColor: '#7BB062',
                        height: 40,
                        //padding: 10,
                      }}
                    >
                      <View style={{flexDirection: 'row'}}>
                    <Icon1 name={'office-building'} size={20} color={"#605B3D"} style={{padding:7}}/>
                    <Text  style={{fontFamily :'Bellota-Bold',fontSize:20}}>Kalbouneh Engineering Office</Text>
                    </View>
                    </View>

                    <View style={styles.card}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                          padding: 10,
                          paddingBottom: 0,
                        }}
                      >
                          </View>

                            </View>

                              </View>
            </FoldView>
            
          </View>
  
          <Spacer height={spacerHeight} />
        </View>
      );
    }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#838380',
    padding: 10,
    flexDirection: 'column',
  },
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-end',
  },
  container1: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  leftPane: {
    flex: 1,
    backgroundColor: '#33373B',
    //padding: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  rightPane: {
    flex: 2,
    padding: 16,
    backgroundColor: '#D4D9D9',
  },
});
