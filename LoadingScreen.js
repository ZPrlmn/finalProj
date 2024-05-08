import React from 'react'
import { Text, View, Button, TextInput, Alert, ActivityIndicator } from 'react-native'
import Styles from './Styles'

const LoadingScreen = () => {
  return (
    <View style={Styles.container}>
        <ActivityIndicator size="large" color="gray" />
    </View>
  )
}

export default LoadingScreen
