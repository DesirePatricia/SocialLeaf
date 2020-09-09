import React from 'react';
import {StyleSheet,Button, ScrollView, KeyboardAvoidingView, Keyboard, View, TouchableWithoutFeedback, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import {Navigation} from 'react-native-navigation';
import CameraRoll from "@react-native-community/cameraroll";



export default class NewPostScreen extends React.Component {
  constructor(props){
    super(props);
 
    this.state = {
       photos: [],
       selected: false,
       imageKey: '',
    }
 }
 toggleSelect(i){
  {this.imageKey == i? 
  this.setState({
    selected:!this.state.selected
  }): this.setState({
    selected: true,
  })
}}
 componentDidMount(){
  CameraRoll.getPhotos({
    first: 24,
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
        <View style= {{flex: 1, backgroundColor:'white'}}>

          <ScrollView >
            <View style = {{flex:1, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-around'}}>
            {this.state.photos.map((p, i) => {
            return (
              <TouchableOpacity onPress={() => {this.toggleSelect(i),
              this.setState({key: i})
              }}>
              <Image
                key={i}
                style={{
                  margin: 10,
                  width: 66,
                  height: 66,
                }}
                source={{ uri: p.node.image.uri }}
              />
              {(this.state.selected && this.state.key == i) ?
              <Image style={styles.checkImage} source={require('../../assets/images/round-check.png')}/>: null }
              </TouchableOpacity>
            );
          })}
          </View>
          </ScrollView>
          <View >
          <TouchableOpacity style = {styles.leafBorder}>
             <Text style = {styles.leafTitle}>next</Text>
          </TouchableOpacity>
          </View>
        </View>
      );
     }
    }

    const styles = StyleSheet.create({
      leafBorder:{
        margin: 55,
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
      checkImage:{
        zIndex: 2, 
        position: 'absolute', 
        width: 14, 
        height: 14, 
        right:10, 
        top:10,
      }

    })