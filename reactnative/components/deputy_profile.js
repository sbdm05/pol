import React , {Component}from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableHighlight, Image, WebView, Linking, ListView } from 'react-native';
import Meteor, {createContainer, MeteorListView} from 'react-native-meteor';
import { List, ListItem, Card, SocialIcon, Button} from 'react-native-elements';
import DeputyDetail from './deputy_detail';
import Tabs from '../config/routes.js';
import Communications from 'react-native-communications';


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
      const address = emails[0].email
      this.LaunchURL(`mailto:${address}`);
      //Communications.email('address',null,null,'My Subject','My body text');//a vérifier si OK quand mise en ligne
    }

    LaunchURL(url) {
      Linking.canOpenURL(url).then(supported => {
        if(!supported) {
                console.log('Can\'t handle url: ' + url);
            } else {
                Linking.openURL(url)
                .catch(err => {
            console.warn('openURL error', err);
                });
            }
        }).catch(err => console.warn('An unexpected error happened', err));
    }


    render(){

        const{nom, emails, picture, url_an, groupe_sigle, profession, nom_circo, num_circo, twitter, sites_web, collaborateurs} = this.props.navigation.state.params;

        return(
          <View>
              <Card>

                <View style={{flexDirection: 'column', justifyContent:'space-around'}}>
                    <Image
                    style={{width: 50, height: 60}}
                    source={{uri: picture }}
                    />
                    <Text>{nom}</Text>
                    <Text>{groupe_sigle}</Text>
                    <Text>Circonscription n°{num_circo} , {nom_circo}</Text>
                    <Text>Profession : {profession}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
                    <SocialIcon
                    type="twitter"
                    onPress={()=>this._OnPressTwitter(twitter)}
                    />
                    <SocialIcon
                    type="facebook"
                    onPress={()=>this._OnPressFacebook(sites_web)}
                    />
                    <Button
                    title="Lui envoyer un message"
                    onPress={()=>this._OnPressMailto(emails)}
                    />
                </View>
                <Text>Collaborateurs</Text>
                <Text>{collaborateurs[0].collaborateur}</Text>
                <Text>{collaborateurs[1].collaborateur}</Text>
                <Text>{emails[0].email}</Text>
              </Card>
            </View>

          );
    }

}

export default DeputyProfile;
