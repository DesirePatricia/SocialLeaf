
import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Header, withTheme } from 'react-native-elements';


const HomeScreen = (props) => {
  return (
      <View style = {{flex:1, backgroundColor: 'white'}}>
      <Header
          centerComponent={{ text: 'SocialLeaf', style: styles.leafTitle }}
          containerStyle={{
          backgroundColor: '#246F42',
          justifyContent: 'space-around',
          height: 100,
        }}
        >
       <Image source ={require('../../assets/images/leaf.png')} style = {styles.leafImage}  />
          
      </Header>
        <ScrollView contentContainerStyle = {{flexGrow: 1 }}>
          <View style ={styles.bottom}>
          <TouchableOpacity style = {styles.button}
          onPress={() => {
            Navigation.push(props.componentId, {
            component: {
              name: "NewPost",
              }
             })
            }}>
          <Image source = {require('../../assets/images/add.png')} style = {{width: 35, height:35,}}/>
          </TouchableOpacity>
          </View>
        </ScrollView>
        </View>
  );
};


export default HomeScreen;

const styles = StyleSheet.create({

  leafTitle:{
    color: 'white', 
    fontFamily:'Rancho-Regular', 
    fontSize: 48, 
    marginRight:20
  },

  leafImage:{
    width:18,
    height: 18,
    padding: 0,
    margin:0,
    marginLeft: 265,
    transform: [
      { scaleX: -1 }
    ]
  },

  button:{
    borderRadius: 100,
    width: 65,
    height: 65,
    backgroundColor:'#246F42',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom:0,

  },
  bottom: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: 36,
    marginRight: 36
  },
});

