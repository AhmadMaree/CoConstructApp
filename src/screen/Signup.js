import React,{Component} from 'react';
import {HelperText} from 'react-native-paper'
import Icon from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";
import RNPickerSelect from 'react-native-picker-select';
import {
  
  StyleSheet,
  TextInput,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
  ToastAndroid,
} from 'react-native';
import Logo from '../components/Logo';
import Ip from './Ip';

export default class Signup extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          Name: '',
          Email: '',
          Pass: '',
          CPass: '',
          iduser : '',
          ErrFlagName: false,
          ErrFlagEmail: false,
          ErrFlagPass: false,
          ErrFlagCPass: false,
          isSigningUp: false
        };
      }

      validateName = (name) => {
        var re = /^[a-zA-Z\s]+$/;
        return re.test(name);
       };
      validatePass = (pass) => {
        //Minimum eight characters, at least one letter and one number and one special char(#$^+=!*()@%&):
        var re = /^(?=.*[a-z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,}$/;
        return re.test(pass)
      };
      validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      };

      clicksignup() {
        if (!this.validateName(this.state.Name)) {
          // invalid name
          this.setState({ ErrFlagName: true });
        }
        else {
          this.setState({ ErrFlagName: false });
        }
        if (!this.validateEmail(this.state.Email)) {
          // invalid email
          this.setState({ ErrFlagEmail: true });
        }
        else {
          this.setState({ ErrFlagEmail: false });
        }
        if (!this.validatePass(this.state.Pass)) {
          // invalid password
          this.setState({ ErrFlagPass: true });
        }
        else {
          this.setState({ ErrFlagPass: false });
        }
    
        if (this.state.Pass != this.state.CPass) {
          // confirm password not equal the password
          this.setState({ ErrFlagCPass: true });
        }
        else {
          this.setState({ ErrFlagCPass: false });
        }
      }

      endEditing() {
        this.clicksignup()
      }
      changePass(inputText) {
        this.setState({ Pass: inputText });
        this.clicksignup();
      }
      changeCPass(inputText) {
        this.setState({ CPass: inputText });
        this.clicksignup();
      }
      changeEmail(inputText) {
        this.setState({ Email: inputText });
        this.clicksignup();
      }
      changeName(inputText) {
        this.setState({ Name: inputText });
        this.clicksignup();
      }
      
      renderInputTextNameWithIcon() {
        return (
          <View>
            <Icon
              name={'md-person'}
              size={20}
              color={'#7BB062'}
              style={formStyles.emailIcon}
            />
            <TextInput style={formStyles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="UserName"
              placeholderTextColor={'rgba(0,0,0, 0.5)'}
              returnKeyType='next'
              value={this.state.Name}
              onSubmitEditing={() => this.email.focus()}
              onChangeText={text => this.changeName(text)}
              onEndEditing={() => this.endEditing()}
            />
            <TouchableOpacity style={formStyles.btnIcon}>
              <View>
                <Icon
                  name={this.state.ErrFlagName == false ? 'ios-checkmark' : 'md-close-circle'}
                  size={this.state.ErrFlagName == false ? 35 : 20}
                  color={this.state.ErrFlagName == false ? 'rgba(0,0,0, 0.5)' : '#ef426c'}
                  style={this.state.ErrFlagName == false ? formStyles.inputIcon : formStyles.closeIcon}>
                </Icon>
              </View>
            </TouchableOpacity>
            <HelperText
              style={{color:'#ef426c'}}
              type="error"
              visible={this.state.ErrFlagName}>
              Name must only contain letters
            </HelperText>
          </View>
    
        );
      }
      renderInputTextName() {
        return (
          <View>
            <Icon
              name={'md-person'}
              size={20}
              color={'#7BB062'}
              style={formStyles.emailIcon}
            />
            <TextInput style={formStyles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="UserName "
              placeholderTextColor={'rgba(0,0,0, 0.5)'}
              returnKeyType='next'
              onSubmitEditing={() => this.email.focus()}
              value={this.state.Name}
              onChangeText={text => this.setState({ Name: text })}
            />
          </View>
        );
      }
    

      renderInputTextEmailWithIcon() {
        return (
          <View>
            <Icon
              name={'md-mail'}
              size={18}
              color={'#7BB062'}
              style={formStyles.emailIcon}
            />
            <TextInput style={formStyles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Email "
              placeholderTextColor={'rgba(0,0,0, 0.5)'}
              keyboardType="email-address"
              textContentType='emailAddress'
              returnKeyType='next'
              ref={(input) => this.email = input}
              value={this.state.Email}
              onSubmitEditing={() => this.password.focus()}
              onChangeText={text => this.changeEmail(text)}
              onEndEditing={() => this.endEditing()}
            />
            <TouchableOpacity style={formStyles.btnIcon}>
              <View>
                <Icon
                  name={this.state.ErrFlagEmail == false ? 'ios-checkmark' : 'md-close-circle'}
                  size={this.state.ErrFlagEmail == false ? 35 : 20}
                  color={this.state.ErrFlagEmail == false ? 'rgba(0,0,0, 0.5)' : '#ef426c'}
                  style={this.state.ErrFlagEmail == false ? formStyles.inputIcon : formStyles.closeIcon}>
                </Icon>
              </View>
            </TouchableOpacity>
            <HelperText
              style={{color:'#ef426c'}}
              type="error"
              visible={this.state.ErrFlagEmail}>
              Email address is invalid
            </HelperText>
          </View>
        );
      }
    
      renderInputTextEmail() {
        return (
          <View>
            <Icon
              name={'md-mail'}
              size={18}
              color={'#7BB062'}
              style={formStyles.emailIcon}
            />
            <TextInput style={formStyles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Email "
              placeholderTextColor={'rgba(0,0,0, 0.5)'}
              keyboardType="email-address"
              returnKeyType='next'
              ref={(input) => this.email = input}
              value={this.state.Email}
              onSubmitEditing={() => this.password.focus()}
              onChangeText={text => this.setState({ Email: text })}
            />
          </View>
        );
      }

      renderInputTextPass() {
        return (
          <View>
            <Icon
              name={'md-lock'}
              size={23}
              color={'#7BB062'}
              style={formStyles.icons}
            />
            <TextInput style={formStyles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' 
             placeholder="Password" 
             placeholderTextColor={'rgba(0,0,0, 0.5)'}
             secureTextEntry={true}
             returnKeyType='next'
             value={this.state.Pass}
             onSubmitEditing={() => this.Confirmpassword.focus()}
             onChangeText={text => this.changePass(text)}
             ref={(input) => this.password = input}/>
          </View>
        );
      }

      renderInputTextPassWithIcon() {
        return (
          <View>
            <Icon
              name={'md-lock'}
              size={23}
              color={'#7BB062'}
              style={formStyles.icons}
            />
            <TextInput style={formStyles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' 
             placeholder="Password" 
             placeholderTextColor={'rgba(0,0,0, 0.5)'}
             secureTextEntry={true}
             returnKeyType='next'
             value={this.state.Pass}
             onSubmitEditing={() => this.Confirmpassword.focus()}
             onChangeText={text => this.changePass(text)}
             onEndEditing={() => this.endEditing()}
             ref={(input) => this.password = input}/>
            <TouchableOpacity style={formStyles.btnIcon}>
              <View>
                <Icon
                  name={this.state.ErrFlagPass == false ? 'ios-checkmark' : 'md-close-circle'}
                  size={this.state.ErrFlagPass == false ? 35 : 20}
                  color={this.state.ErrFlagPass == false ? 'rgba(0,0,0, 0.5)' : '#ef426c'}
                  style={this.state.ErrFlagPass == false ? formStyles.inputIcon : formStyles.closeIcon}>
                </Icon>
              </View>
            </TouchableOpacity>
            <HelperText
              style={{color:'#ef426c'}}
              type="error"
              visible={this.state.ErrFlagPass}>
              at least 8 chars, alphabet,digits and special
            </HelperText>
          </View>
        );
      }
      renderInputTextCPassWithIcon() {
        return (
          <View>
            <Icon
              name={'md-lock'}
              size={23}
              color={'#7BB062'}
              style={formStyles.icons}
            />
            <TextInput style={formStyles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Confirm Password"
              secureTextEntry={true}
              returnKeyType='go'
              placeholderTextColor={'rgba(0,0,0, 0.5)'}
              ref={(input) => this.Confirmpassword = input}
              value={this.state.CPass}
              onChangeText={text => this.changeCPass(text)}
              onEndEditing={() => this.endEditing()}
            />
            <TouchableOpacity style={formStyles.btnIcon}>
              <View>
                <Icon
                  name={this.state.ErrFlagCPass == false ? 'ios-checkmark' : 'md-close-circle'}
                  size={this.state.ErrFlagCPass == false ? 35 : 20}
                  color={this.state.ErrFlagCPass == false ? 'rgba(0,0,0, 0.5)' : '#ef426c'}
                  style={this.state.ErrFlagCPass == false ? formStyles.inputIcon : formStyles.closeIcon}>
                </Icon>
              </View>
            </TouchableOpacity>
            <HelperText
              style={{color:'#ef426c'}}
              type="error"
              visible={this.state.ErrFlagCPass}>
              Passwords do not match
            </HelperText>
          </View>
        );
      }
    
      renderInputTextCPass() {
        return (
          <View>
            <Icon
              name={'md-lock'}
              size={23}
              color={'#7BB062'}
              style={formStyles.icons}
            />
            <TextInput style={formStyles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Confirm Password"
              secureTextEntry={true}
              returnKeyType='go'
              placeholderTextColor={'rgba(0,0,0, 0.5)'}
              ref={(input) => this.Confirmpassword = input}
              value={this.state.CPass}
              onChangeText={text => this.setState({ CPass: text })}
            />
          </View>
        );
      }
    
  signUpUser= () => {
    if (!(this.state.ErrFlagName || this.state.ErrFlagEmail ||
      this.state.ErrFlagPass || this.state.ErrFlagCPass ||
      this.state.Name === '' || this.state.Email === '' ||
      this.state.Pass === '' || this.state.CPass === ''|| this.state.iduser === '')) {

        let url2 = 'http://'+Ip.ip+':8088/Insertsingup/'+this.state.iduser+'/'+this.state.Name+'/'+this.state.Email+'/'+this.state.Pass;
          const data = new FormData();
         data.append("username",this.state.Name);
         data.append("email",this.state.Email);
         data.append("password",this.state.Pass);
         data.append("iduser",this.state.iduser);
  
          console.log(this.state.id);
   fetch(url2, { method: 'POST',body:data})
   .then(response => response.json()) 
   .then(json => {if(json.result === "failed"){
       //AsyncStorage
       alert("Email is Exists");          
   }
   else if(json.result === "success"){
    ToastAndroid.show('Log in and enjoy our App!', ToastAndroid.SHORT)
   }
    })   
  }
   else{
    ToastAndroid.show('Must Fill the Box!', ToastAndroid.SHORT)
    }
};

    
   render(){
       return(
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <LinearGradient colors={['#455a64', '#455a64', '#455a64']} style={styles.container}>
        
            <StatusBar backgroundColor='#1c313a' barStyle='light-content'>
            </StatusBar>
            
           <View style={formStyles.cont}>
            <View>
              {this.state.Name == '' ? this.renderInputTextName() : this.renderInputTextNameWithIcon()}
            </View>
              <View>
              {this.state.Email == '' ? this.renderInputTextEmail() : this.renderInputTextEmailWithIcon()}
              </View>
              <View>
              {this.state.Pass == '' ? this.renderInputTextPass() : this.renderInputTextPassWithIcon()}
              </View>
              <View>
              {this.state.CPass == '' ? this.renderInputTextCPass() : this.renderInputTextCPassWithIcon()}
              </View> 
              
              <RNPickerSelect
                    onValueChange={(value) => this.setState({iduser: value})}
                    //value={this.state.id}
                    //onChangeText={(value)=> this.setState({id : value})}
                    items={[
                        { label: 'Office', value: '0' },
                        { label: 'User', value: '1' },
                    ]}
                 />
                  
         
                <TouchableOpacity
                  onPress={ this.signUpUser}
                  style={formStyles.button}>
                  <Text style={formStyles.buttonText}>Sign Up</Text>
                </TouchableOpacity> 

              </View>
        
           
          <View style={styles.loginTextCont}>
            <Text style={styles.loginText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.loginButton}> Log In</Text>
            </TouchableOpacity>
          </View>
          </LinearGradient>
        </ScrollView>
       );
   }



}
 const styles = StyleSheet.create({
    contentContainer: {
       flexGrow: 1,
    },
    container: {
      backgroundColor: '#455a64',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    loginTextCont: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row'
      },
      loginText: {
        color: 'rgba(0,0,0, 0.5)',
        fontSize: 16
      },
      loginButton: {
        color: '#7BB062',
        fontSize: 16,
        fontWeight: '500'
      }

  });




  const formStyles = StyleSheet.create({
    connt : {
       // backgroundColor: '#455a64',
       // flex: 1,
       // alignItems :  'center',
        ///justifyContent: 'center',
        
    } , 
    cont : {
      backgroundColor: '#455a64',
        flex: 1,
        alignItems :  'center',
        justifyContent: 'center',
        marginTop : 150
    },
    button: {
        width: 300,
        backgroundColor: '#7BB062',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13,
      
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#fff',
        textAlign: 'center'
      },
    inputBox: {
    width: 300,
    backgroundColor : 'rgba(255,255,255,0.3)',
    borderWidth: 0.4,
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingLeft: 40,
    color : '#ffffff',
    fontSize: 16,
    marginVertical: 10
  },
  buttonlogin : {
      width : 300,
      backgroundColor : '#7BB062',
      borderRadius : 25 , 
      marginVertical : 16,
      paddingVertical : 16
  } ,
  buttnTextlogin : {
      fontSize :16 ,
      fontWeight : '500',
      color : '#ffffff' , 
      textAlign : 'center'


  },
  emailIcon: {
      position: 'absolute',
      top: 25,
      left: 10,
  },
  icons: {
    position: 'absolute',
    top: 19,
    left: 10,
  },
  btnIcon: {
    position: 'absolute',
    right: 100
  },
  inputIcon: {
    position: 'absolute',
    top: 17,
    left: 65,
  },
  closeIcon: {
    position: 'absolute',
    top: 25,
    left: 65,
  },
  

});   