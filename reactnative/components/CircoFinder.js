import React , {Component}from 'react';
import { StyleSheet, Text, View,TouchableOpacity, TextInput, Dimensions, WebView } from 'react-native';
import { List, ListItem, Icon, Card, Divider, Button} from 'react-native-elements';
import Flat_List from '../components/FlatList';


class CircoFinder extends Component{

  render(){
    console.log ('from CircoFinder');
    return(
        <View style={{flex: 1, flexDirection: 'column'}} >
          <Text >
            Cliquer sur la loupe et entrer votre adresse
          </Text>
          <WebView
            source={{uri: 'https://www.geoportail.gouv.fr/carte?c=2.258424664843751,46.56891692313076&z=5&l0=GEOGRAPHICALGRIDSYSTEMS.MAPS.3D::GEOPORTAIL:OGC:WMTS==aggregate(0.27734375)&d1=1462296(1)&permalink=yes'}}
            style={{marginTop: 20}}
          />
        </View>

      )
  }
}


export default CircoFinder;
