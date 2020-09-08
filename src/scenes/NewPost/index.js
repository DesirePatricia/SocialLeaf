import React from 'react';
import {StyleSheet,Button, ScrollView, KeyboardAvoidingView, Keyboard, View, TouchableWithoutFeedback, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import {Navigation} from 'react-native-navigation';
import CameraRoll from "@react-native-community/cameraroll";



export default class NewPostScreen extends React.Component {
  constructor(props){
    super(props);
 
    this.state = {
       photos: [],
    }
 }
 componentDidMount(){
  CameraRoll.getPhotos({
    first: 20,
    assetType: 'Photos',
  })
  .then(r => {
    this.setState({ photos: r.edges });
  })
  .catch((err) => {
     //Error Loading Images
  });
 }

      render(){
      return(
        <View style= {{flex: 1}}>

          <ScrollView>
            {this.state.photos.map((p, i) => {
            return (
              <Image
                key={i}
                style={{
                  margin: 10,
                  width: 66,
                  height: 66,
                }}
                source={{ uri: p.node.image.uri }}
              />
            );
          })}
          </ScrollView>
          <TouchableOpacity style = {styles.leafBorder}>
             <Text style = {styles.leafTitle}>next</Text>
          </TouchableOpacity>
        </View>
      );
     }
    }

    const styles = StyleSheet.create({
      leafBorder:{
        margin: 80,
        height: 50,
        width: 260,
        borderColor: '#246F42',
        borderWidth: 1,
        borderStyle: 'solid',
        bottom: 0,
      },

      leafTitle:{
        color: '#246F42', 
        fontFamily:'Rancho-Regular', 
        fontSize: 32, 
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center"
      },

    })