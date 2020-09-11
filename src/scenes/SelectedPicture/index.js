import React from 'react';
import {StyleSheet, ScrollView, View, Text, TextInput, TouchableOpacity, Image, } from 'react-native';
import {Navigation} from 'react-native-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CameraRoll from "@react-native-community/cameraroll";


export default class SelectedPictureScreen extends React.Component {
  constructor(props){
    super(props);
  
    this.state = {
        imageURI: this.props.imageURI,
        title: '',
        description: '',
    }
    }
    

      render(){

      return(
        <KeyboardAwareScrollView style= {{flex: 1, backgroundColor:'white'}}>
        <View >
            <Image style ={{left:0, right:0, height: 350, justifyContent: 'space-around', }} source={{ uri: this.state.imageURI}}/>
            <View style= {{flex: 1,left:0, right:0, justifyContent: 'space-around',}}>
            <TextInput placeholder = "enter title" 
            placeholderTextColor={'#888888'}
            onChangeText= {(title) => this.setState({title})}
            style = {styles.titleInput}/>
            <TextInput placeholder = "enter description" 
            onChangeText= {(description) => this.setState({description})}
            multiline = {true}
            numberOfLines = {4}
            style = {styles.descriptionInput}/>
            <View>
          <TouchableOpacity style = {styles.leafBorder}
            onPress={() => {
            Navigation.push(this.props.componentId, {
              component: {
                name: "Home",
                passProps: {
                  imageURI: this.state.imageURI,
                  title: this.state.title,
                  description: this.state.description,
                }
                }
               })
          }} >
             <Text style = {styles.leafTitle}>submit</Text>
          </TouchableOpacity>
          </View>
          </View>
        </View>
        </KeyboardAwareScrollView>
      );
     }
    }

    const styles = StyleSheet.create({
        leafBorder:{
            margin: '10%',
            height: 50,
            width: '80%',
            borderColor: 'rgba(36, 111, 66, 0.3)',
            borderWidth: 1,
            borderStyle: 'solid',
            bottom: 0,
          },
    
          leafTitle:{
            color: '#246F42', 
            fontFamily:'Rakkas-Regular', 
            fontSize: 32, 
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center"
          },

          titleInput:{
            fontSize: 32, 
            textAlign: "center",
            fontFamily:'Rakkas-Regular', 
            width: '80%',
            height: 60,
            margin: '10%',
            borderColor: '#CBCACA',
            borderStyle: 'solid',
            borderBottomWidth:1,
            padding:0,
            textTransform: 'lowercase'
          },

          descriptionInput:{
            top:0,
            width: '90%',
            margin: '5%',
            height: 150,
            borderColor: '#CBCACA',
            borderWidth: 1,
            borderStyle: 'solid',
            alignItems: 'flex-start',
            fontFamily: 'NotoSansTC-Regular'
          },

    })