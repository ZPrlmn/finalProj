import React from 'react'
import { Text, View, Button, TextInput, Alert, ActivityIndicator } from 'react-native'

const LoadingScreen = () => {
  return (
    <View>
        <ActivityIndicator size="large" color="brown" />
    </View>
  )
}

export default LoadingScreen
