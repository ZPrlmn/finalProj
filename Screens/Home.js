import React, { useEffect, useState } from 'react'
import { Text, View, Button, TouchableHighlight } from 'react-native'
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
        
        {isLoading ? <LoadingScreen /> :
        
        <>

          <TouchableHighlight style={[{position: 'absolute', top: 30, right:20, backgroundColor: 'red', padding: 10, borderRadius: 10}]} onPress={handleLogout}>
            <Text style={{color:'white'}}>Log out</Text>
          </TouchableHighlight>

          <View style={Styles.card}>
            <View style={Styles.header}>
              <Text style={Styles.headerTitle}>Home</Text>
            </View>
            <View style={Styles.cardBody}>
              <TouchableHighlight style={Styles.button}>
                <Text style={Styles.buttonText}>Trivia Game</Text>
              </TouchableHighlight>  
              <TouchableHighlight style={Styles.button}>
                <Text style={Styles.buttonText}>4 Pics 1 Word</Text>
              </TouchableHighlight>  
            </View>
          </View>
        </>
        
        }
    </View>
  )
}

export default Home
