import React from 'react'
import { Text, View, Button, TextInput, Alert, ActivityIndicator } from 'react-native'

const LoadingScreen = () => {
  return (
    <View style={{backgroundColor: 'black'}}>
        <ActivityIndicator size="large" color="brown" />
        
    </View>
  )
}

export default LoadingScreen
