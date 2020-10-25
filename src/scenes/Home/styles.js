import { StyleSheet } from 'react-native';
export default StyleSheet.create({

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
  