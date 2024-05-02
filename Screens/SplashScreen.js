import React, { useEffect } from 'react'
import { Image, Text, View } from 'react-native'
import Styles from '../Styles'

function SplashScreen({navigation}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Login")
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation])
  return (
    <View style={Styles.container}>
      <Image
        source={require('../assets/splashScreen.jpg')}
        resizeMode='cover'
        style={{width: '100%', height:'100%'}}
      />
        <Text style={{
          fontSize: 50, 
          backgroundColor: 'rgba(100,100,100,0.7)', 
          position: 'absolute', 
          top:20, left:20,
          borderWidth: 3,
          borderColor: 'rgba(255,255,255,0.4)',
          borderRadius: 20,
          padding: 20
        }}>
          SplashScreen
        </Text>
    </View>
  )
}

export default SplashScreen
