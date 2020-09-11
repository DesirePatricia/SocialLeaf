
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


export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);
  
  this.state = {
    imageURI: '',
    title: '',
    description: '',
    submitted: false,
  }
  }

  componentDidMount(){
    {this.props.imageURI != undefined ? this.setState({
      imageURI: this.props.imageURI,
      submitted: true
    }): null}
    {this.props.title != undefined ? this.setState({
      title: this.props.title
    }): null}
    {this.props.description != undefined ? this.setState({
      description: this.props.description
    }): null}
  }


  render(){
    console.log(this.props.imageURI)
    console.log(this.props.title)
    console.log(this.props.description)
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
          {this.state.submitted ? 
          <View style={{width:'100%', height: 400, 
          padding: '5%'}}>
            <View>
              <Text style = {styles.plantTitle}>{this.state.title}</Text>
              <Text style = {styles.plantDescription}>{this.state.description}</Text>
            </View>
            <Image source = {{uri: this.state.imageURI}}
            style={{width:'100%', borderColor: '#CBCACA',
            borderStyle: 'solid',
            borderBottomWidth:1,
            height: 300}}/>
          </View>
          :null}

          <View style ={styles.bottom}>
          <TouchableOpacity style = {styles.button}
          onPress={() => {
            Navigation.push(this.props.componentId, {
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
}
}

const styles = StyleSheet.create({

  leafTitle:{
    color: 'white', 
    fontFamily:'Rakkas-Regular', 
    fontSize: 34, 
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

  plantTitle:{
    fontSize: 28, 
    textAlign: "center",
    fontFamily:'Rakkas-Regular', 
    textTransform: 'lowercase',
  },

  plantDescription:{
    top:0,
    width: '85%',
    marginLeft:'7.5%',
    marginBottom: '2%',
    fontFamily: 'NotoSansTC-Regular',
    color: '#6F6F6F'
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

