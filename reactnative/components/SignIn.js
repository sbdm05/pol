import PropTypes from 'prop-types';
import React , {Component}from 'react';
import { StyleSheet, Text, View,TouchableOpacity, TextInput, Dimensions, Input } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Meteor, { Accounts } from 'react-native-meteor';
import SignOut from './SignOut';
//Import Connect
import {connect} from 'react-redux';
//Import Action Creators
import {emailChanged} from '../actions';
import {passwordChanged} from '../actions';
import {loginUser} from '../actions';



const { width } = Dimensions.get('window');

class SignIn extends Component {

    static navigationOptions = {
      tabBarVisible: false //not working
    };

    constructor(props){
      super(props);
      this.state={
        email:'',
        password:'',
        error: null,
        loading: false,
        error_password : false,
        error_email: false,
      };
    }


    isValid() {
      const { email, password, error_password, error_email } = this.state;
      let valid = false;

      if (email.length > 0 && password.length > 5) {
        valid = true;
      }


      if (email.length === 0) {
        this.setState({ error: 'You must enter an email address' });
        this.setState({error_email :true});
      } else if (password.length < 6) {
        this.setState({ error: 'Your password must contain at least 6 characters' });
        this.setState({error_password :true});
        console.log({error_password}, "from isValid");
      }
      return valid;
    }


   onSignIn() {
      const { email, password, error_password, error_email} = this.state;
      const {navigate} = this.props.navigation;
      //navigate('Home'); //it works.

       Meteor.loginWithPassword(email, password, (error) => {
          if (error) {
            this.setState({ error: error.reason});
            this.setState({error_email: true});
            console.log(error, 'erreur dans le sign in', {error_password})
          }else{
            console.log(email, 'signed in') //it works
            navigate('Home');
            this.setState({email:''});
            this.setState({password:''});
          }
        });
    }

    onCreateAccount() {
      const { email, password, error_password, error_email } = this.state;

      const {navigate} = this.props.navigation;

      if (this.isValid()) {
        Accounts.createUser({ email, password }, (error) => {
          if (error) {
            this.setState({ error: error.reason });
          } else {
            this.setState({email:''});
            navigate('SignOut')
          };
        });
       }
    }

   onLostPassword = (emails) => {
      const {email}= this.state;
      console.log('from signin component')
      Meteor.call('onLostPasswordMethod');
    };

    displayErrorMessage=()=>{
      const { error_password } = this.state;
      if(error_password){
        return(<Text style={styles.errorMessage}>Votre mot de passe doit contenir au moins six caractères!</Text>)
      }
    }

     displayErrorEmail=()=>{
      const { error_email } = this.state;
      if(error_email){
        return(<Text style={styles.errorMessage}>Oops ! L'email ou le mot de passe ne sont pas corrects! </Text>)
      }
    }


    onEmailChange(text){
    //Call Action Creator
    this.props.emailChanged(text);
    console.log(this.props.emailChanged(text), 'ceci est this.props.emailChanged actioncreator')
    console.log(this.props.email, 'ceci est le nouvel état')
    }


    onPasswordChange(password){
    //Call Action Creator
    this.props.passwordChanged(password);
      console.log(this.props.passwordChanged (password))
      console.log(this.props.password, 'ceci est le nouveau password')
    }

    onSignInWithRedux() {
      const {navigate} = this.props.navigation;
      const {email, password} = this.props;
      this.props.loginUser({email, password});
    }



render() {
    return (
      <View style={styles.container}>
      <Text>Input avec Redux</Text>
        <TextInput
          style={styles.input}
          label= "Email"
          placeholder= "email@gmail.com"
          onChangeText= {this.onEmailChange.bind(this)}
          value= {this.props.email}
        />
        <Text>Votre mot de passe avec Redux </Text>
        <TextInput
          style={styles.input}
          onChangeText={this.onPasswordChange.bind(this)}
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          value={this.props.password}
        />
            <TouchableOpacity style={styles.button} onPress={this.onSignInWithRedux.bind(this)}>
              <Text style={styles.buttonText}>Sign In with Redux</Text>
            </TouchableOpacity>
        <View>
            {this.displayErrorEmail()}
        </View>
        <Text>Entrez votre email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(email) => this.setState({email})}
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
        />
          <View>
            {this.displayErrorMessage()}
          </View>
        <Text>Votre mot de passe</Text>
        <TextInput
          style={styles.input}
          onChangeText={(password) => this.setState({password})}
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={this.onSignIn.bind(this)}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.onCreateAccount.bind(this)}>
          <Text style={styles.buttonText}>Créer un compte</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.button} onPress={this.onLostPassword.bind(this)}>
          <Text style={styles.buttonText}>J'ai perdu mon mot de passe</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const ELEMENT_WIDTH = width - 40;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    width: ELEMENT_WIDTH,
    fontSize: 16,
    height: 36,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderColor: '#888888',
    borderWidth: 1,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#3B5998',
    width: ELEMENT_WIDTH,
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 16,
  },
  errorMessage:{
    color: '#ff0000',
    padding: 10,
  }
});



const mapStateToProps= state=> {
  return{
    email: state.auth.email,
    password: state.auth.password
  };
};

export default connect (mapStateToProps, {emailChanged, passwordChanged, loginUser}) (SignIn);


