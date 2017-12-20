import React , {Component}from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableHighlight, Image, WebView, Linking } from 'react-native';
import Meteor, {createContainer, MeteorListView} from 'react-native-meteor';
import { List, ListItem, Card, SocialIcon, Button} from 'react-native-elements';
import DeputyDetail from './deputy_detail';
import Tabs from '../config/routes.js';
import {
  StackNavigator,
  TabNavigator
} from 'react-navigation';

//this component renders the full deputy profile

class DeputyProfile extends Component {


    constructor(props){
      super(props);
    }

    _OnPressTwitter(twitter){
      Linking.openURL('https://twitter.com/' + twitter);
    }
    _OnPressFacebook(sites_web){
      console.log(sites_web[0].site)
      const url = sites_web[0].site
      Linking.openURL(url);
    }
    _OnPressMailto(emails){
      console.log(emails[0].email)
      const email = emails[0].email
      Linking.openURL("mailto: email")
    }

    render(){

        const{nom, emails, picture, url_an, groupe_sigle, profession, nom_circo, twitter, sites_web} = this.props.navigation.state.params;

        return(
          <View>
              <Card>
                <Image
                style={{width: 50, height: 60}}
                source={{uri: picture }}
                />
                <Text>{nom}</Text>
                <Text>{groupe_sigle}</Text>
                <Text>Circonscription : {nom_circo}</Text>
                <Text>Profession : {profession}</Text>
                <SocialIcon
                type="twitter"
                onPress={()=>this._OnPressTwitter(twitter)}
                />
                <SocialIcon
                type="facebook"
                onPress={()=>this._OnPressFacebook(sites_web)}
                />
                <Button
                title="Envoyer un message"
                onPress={()=>this._OnPressMailto(emails)}
                />
                <Text>{emails[0].email}</Text>
              </Card>
            </View>

          );
    }

}

export default DeputyProfile;
