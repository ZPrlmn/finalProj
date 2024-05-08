import React, { useState } from 'react'
import { Text, View, Button, TextInput, Alert, TouchableHighlight } from 'react-native'
import Styles from '../Styles'

function Login({ navigation }) {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  
  const Accounts = [
    { id: 1, userName: 'Admin', password: 'admin' }
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
      <View style={Styles.card}>
        <View style={Styles.header}>
          <Text style={Styles.headerTitle}>Login</Text>
        </View>
        <View style={Styles.cardBody}>
          <Text style={{fontSize: 18}}>Name</Text>
          <TextInput  style={Styles.textInput} value={userName} onChangeText={setUserName} placeholder='Name' />
          <Text style={{fontSize: 18}}>Password</Text>
          <TextInput style={Styles.textInput} value={password} onChangeText={setPassword} secureTextEntry={true} placeholder='Password' />
          <TouchableHighlight style={{backgroundColor:'#2196F3', padding: 10, borderRadius: 10}} onPress={loginFunction}>
            <Text style={{color: 'white', fontSize: 18}}>Login</Text>
          </TouchableHighlight>  
        </View>
      </View>
    </View>
  )
}

export default Login
