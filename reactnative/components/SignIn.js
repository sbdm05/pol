import PropTypes from 'prop-types';
import React , {Component}from 'react';
import { StyleSheet, Text, View,TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Meteor, { Accounts } from 'react-native-meteor';
import SignOut from './SignOut';


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
      };
    }


    isValid() {
      const { email, password } = this.state;
      let valid = false;

      if (email.length > 0 && password.length > 5) {
        valid = true;
      }


      if (email.length === 0) {
        this.setState({ error: 'You must enter an email address' });
      } else if (password.length < 6) {
        this.setState({ error: 'Your password must contain at least 6 characters' });
        console.log(password, 'error your password must contain at least 6 characters')
      }
      return valid;
    }


   onSignIn() {
      const { email, password, error_password} = this.state;
      const {navigate} = this.props.navigation;
      //navigate('Home'); //it works.

       Meteor.loginWithPassword(email, password, (error) => {
          if (error) {
            this.setState({ error: error.reason});
            this.setState({error_password :true});//it works
            console.log(error, 'erreur dans le sign in', {error_password})
          }else{
           console.log(email, 'signed in') //it works
           navigate('Home')
          }
        });
    }

    onCreateAccount() {
      const { email, password, error_password } = this.state;

      const {navigate} = this.props.navigation;

      if (this.isValid()) {
        Accounts.createUser({ email, password }, (error) => {
          if (error) {
            this.setState({ error: error.reason });
            this.setState({error_password: true})
          } else {
            this.setState({email:''})
            navigate('SignOut')
          };
        });
       }
    }

    displayErrorMessage=()=>{
      const { error_password } = this.state;
      if(error_password){
        return(<Text style={styles.errorMessage}>Votre mot de passe doit contenir au moins six caractères!</Text>)
      }

  }

render() {
    return (
      <View style={styles.container}>
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
          <Text style={styles.buttonText}>Create Account</Text>
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

export default SignIn;
