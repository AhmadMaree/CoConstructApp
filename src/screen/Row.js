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
  TouchableOpacity,
  TouchableHighlight,
  
} from 'react-native';
import {
  ThinRedLine,
} from './Lines';

  import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";
  import StarRating from 'react-native-star-rating';
  import FoldView from 'react-native-foldview';
  import Icon from "react-native-vector-icons/Entypo";
  import ProfileCard from './ProfileCard';
  import { Button } from 'react-native-paper';
  import IP from './Ip';

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
      generalStarCount: this.props.suma/this.props.co,
      sum : 0,
      sum1 : 0,
      count : 0,
      item :[],
    };
  }

/*  */

componentDidMount(){
  this.fetchFn();
  console.log(this.state.item)
}

  fetchFn(){
    fetch('http://'+IP.ip+':8088/get_rat/'+this.props.EN).then(results=>results.json())
    .then(results=>this.setState({'item':results.response}));
  }

  onGeneralStarRatingPress(rating) {
    this.setState({
      generalStarCount: rating,
    });
   
    this.ratingCompleted(rating)
  }
  ratingCompleted(rating) {
    console.log("Rating is: " + rating)
    console.log(this.state.item)
    this.state.item.forEach((item)=>{
      this.state.count=`${item.countra}`;
      this.state.sum=`${item.sumra}`;
      console.log(this.state.sum)
     });

     var sum1;
     sum1 = parseFloat(this.state.sum)+ parseFloat(rating);
      sum1= parseFloat(sum1).toFixed(2);
      
      this.state.count++;
     console.log(sum1)
    let url2 = 'http://'+IP.ip+':8088/rating/'+this.props.EN;

    const data = new FormData();
    data.append("sum1", sum1); 
    data.append("count1",this.state.count);
    data.append("EN",this.props.EN);
                      fetch(url2 , {method : 'POST' , body : data})
                      .then(results=>results.json())
                      .then(json => {if(json.status === 200){
                        this.setState({
                          generalStarCount: sum1/this.state.count,
                          sum : 0,
                          count:0,
                        });
                        sum1 = 0
                        this.fetchFn()
                      }
                     })

                    

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
      <Image source={{ uri: encodeURI('http://'+IP.ip+':8088/load_image1?img=' + this.props.photo)}} style={{width : "100%" , height : "100%", flex:1}} />
    
      </View>
  
      <View style={styles.rightPane}>
        <View style={{ flex: 1, flexDirection: 'column' }}>
        <Text  style={{fontFamily :'Bellota-Bold'}}>{this.props.ON}</Text>
     
        <Text  style={{fontFamily :'Bellota-Light'}} >Arthitect:{this.props.EN}</Text>
        </View>
        
        <View style={{alignContent :'center' , marginBottom : 5 , padding : 10 ,marginTop:7, width:45}}>
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
            <Text style={{fontSize : 20,marginLeft:20}}>{this.state.generalStarCount.toFixed(2)}/5</Text>
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
      <ProfileCard onPress={this.flip}
                    PN = {this.props.PN}
                    EM = {this.props.EM}
                    FA ={this.props.FA}
                    TE = {this.props.TE}
                    AD = {this.props.AD}
                    nav1 = {this.props.nav}
                    
                    

      />
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
                  <Text  style={{fontFamily :'Bellota-Bold',fontSize:20}}>{this.props.ON}</Text>
                  </View>
                  </View>
                      
                  <View style={styles.card}>
                    <View style={{flexDirection : 'row'}}>
                  <Icon name={'phone'} size={20} color={"#7BB062"} style= {{marginLeft :44}}/>
                  <Text style={{fontFamily:'Bellota-LightItalic', fontSize :20 }}> Jawwal:{this.props.PN}</Text>
                  </View>
                  <View style={{flexDirection : 'row'}}>
                  <Icon name={'email'} size={20} color={"#7BB062"} style= {{marginLeft :44}}/>
                  <Text style={{fontFamily:'Bellota-LightItalic',fontSize :13 , paddingTop : 2}}> {this.props.EM}</Text>
                  </View>
                    <View
                      style={{
                        flexDirection: 'row',
                       // justifyContent: 'center',
                       // padding: 10,
                        paddingBottom:10,
                      }}
                    >
                      <Icon name={'facebook-with-circle'} size={20} color={"#3b5998"} style= {{marginLeft :44}}/>
                      <Text style={{fontFamily:'Bellota-LightItalic',marginLeft:0}}> {this.props.FA}</Text>
                         
                        
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
  padding: 13,
  backgroundColor: '#D4D9D9',
},
buttonlogin : {
  width : 65,
  backgroundColor : '#7BB062',
  borderRadius : 360 , 
  marginVertical : 16,
  paddingVertical : 16,
  marginLeft:50,
  paddingTop:20

} ,

buttonlogin1 : {
width : 65,
backgroundColor : '#7BB062',
borderRadius : 360 , 
marginVertical : 16,
paddingVertical : 16,
marginLeft:10,
marginRight:10

} ,

buttonlogin2 : {
width : 65,
backgroundColor : '#7BB062',
borderRadius : 360 , 
marginVertical : 16,
paddingVertical : 16,
marginRight:-10

} ,
buttnTextlogin : {
  fontSize :16 ,
  fontWeight : '500',
  color : '#ffffff' , 
  textAlign : 'center'


},
});
