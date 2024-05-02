import React, { useState } from 'react'
import { Text, View, Button, TextInput, Alert } from 'react-native'
import Styles from '../Styles'

function Login({ navigation }) {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  
  const Accounts = [
    { id: 1, userName: 'admin', password: 'admin' }
  ]

  function loginFunction() {
    const findUser = Accounts.find(item => item.userName === userName && item.password === password)
    if (findUser) {
      navigation.navigate('Home')
    } else {
      Alert.alert("Inavlid UserName/Password")
    }
  }

  return (
    <View style={Styles.container}>
      <Text>Login</Text>
      <Text>Name</Text>
      <TextInput style={{ borderWidth: 1, borderColor: 'black', width: 200, paddingHorizontal: 5 }} value={userName} onChangeText={setUserName} />
      <Text>Password</Text>
      <TextInput style={{ borderWidth: 1, borderColor: 'black', width: 200, paddingHorizontal: 5 }} value={password} onChangeText={setPassword} secureTextEntry={true} />
      <Button title="Login" onPress={loginFunction} />
    </View>
  )
}

export default Login
