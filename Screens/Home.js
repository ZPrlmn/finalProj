import React, { useEffect, useState } from 'react'
import { Text, View, Button } from 'react-native'
import Styles from '../Styles'
import LoadingScreen from '../LoadingScreen'

function Home({navigation}) {

  const [isLoading, setIsLoading] = useState(true)
  //di pa naiinstall
  //const navigation = useNavigation() 

  const handleLogout = () => {
    navigation.navigate('Login')
  }


  const fetchData = () => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <View style={Styles.container}>
        <Text>Home</Text>
        {isLoading ? <LoadingScreen /> :
        
        <>  
          <Button style={Styles.button} title="Trivia Game"/>
          <Button style={Styles.button} title="4 Pics 1 Word"/>
          <Button style={Styles.button} title="Logout" onPress={handleLogout}/>
        </>
        
        }
    </View>
  )
}

export default Home
