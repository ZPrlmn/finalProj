import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
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
        <Text style={{fontSize: 100, backgroundColor: 'orange'}}>SplashScreen</Text>
    </View>
  )
}

export default SplashScreen
